export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { DATA_DIR } from '@/lib/paths';

const PROJECTS_DIR = path.resolve(path.join(DATA_DIR, 'workspace', 'projects'));

/**
 * POST /api/code/snapshot
 * Creates a snapshot of the current project files before an iteration.
 * Stored in {projectDir}/_backups/{timestamp}/ for rollback.
 */
export async function POST(req: NextRequest) {
    try {
        const { projectId, projectDir } = await req.json();
        if (!projectDir || !fs.existsSync(projectDir)) {
            return NextResponse.json({ ok: false, error: 'projectDir not found' });
        }

        // Path containment: projectDir arrives in the request body, so it is
        // attacker-controlled and must be proven to live under the managed
        // projects root before anything is created or copied. Without this a
        // request can point the snapshot at any directory the process can
        // reach (issue 213, CWE-22).
        const resolvedDir = path.resolve(projectDir);
        if (!resolvedDir.startsWith(PROJECTS_DIR + path.sep) && resolvedDir !== PROJECTS_DIR) {
            return NextResponse.json({ ok: false, error: 'Invalid project directory' }, { status: 403 });
        }

        const timestamp = Date.now();
        const backupDir = path.join(resolvedDir, '_backups', String(timestamp));
        fs.mkdirSync(backupDir, { recursive: true });

        // Copy all non-backup, non-hidden files
        const files = fs.readdirSync(resolvedDir).filter(f => !f.startsWith('_') && !f.startsWith('.'));
        const copied: string[] = [];
        for (const file of files) {
            try {
                const src = path.join(resolvedDir, file);
                // lstat, not stat: stat follows symlinks, so a link planted in
                // a project directory would be copied by reading whatever it
                // points at, outside the project. A symlink is never a project
                // file worth snapshotting, so skip it outright.
                const st = fs.lstatSync(src);
                if (st.isSymbolicLink() || !st.isFile()) continue;
                fs.copyFileSync(src, path.join(backupDir, file));
                copied.push(file);
            } catch { /* skip unreadable files */ }
        }

        // Write snapshot metadata
        fs.writeFileSync(path.join(backupDir, '.snapshot-meta.json'), JSON.stringify({
            projectId,
            projectDir: resolvedDir,
            createdAt: new Date().toISOString(),
            fileCount: copied.length,
        }, null, 2));

        return NextResponse.json({ ok: true, backupDir, timestamp });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e.message });
    }
}
