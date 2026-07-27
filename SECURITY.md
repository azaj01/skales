# Security Policy

Thank you for taking the time to look at Skales. Please read the first section
before you start. It will save you days of work on the wrong thing.

## What this repository is

This repository is the **distribution channel** for Skales: releases, the
changelog, install instructions and the issue tracker.

Skales itself is **closed source**, licensed under BSL 1.1. The product is the
signed application you download from [skales.app](https://skales.app).

The source tree that sits in this repository is a **historical v7 snapshot**
(`package.json` reports `7.1.0`). It is not maintained, it is not built, it is
not released, and it is **not the code that runs on a user's machine**. The
shipped application has roughly seven times the code, a different security
model, and subsystems that do not exist in this snapshot at all: a request
token gate on the local API, a path guard on every file operation, a shell
guard, and per-agent confinement, none of which are present here.

We are keeping the snapshot for history rather than deleting it. That means the
burden is on us to say clearly what it is, which is the purpose of this file.

## Scope

**In scope.** We want these reports, and we act on them:

- The signed Skales Desktop application from skales.app, current released
  version (Windows, macOS, Linux)
- Skales Mobile from the Google Play Store or the Apple App Store, current
  released version
- skales.app itself and the update feed it serves
- The Skales DevKit ([MIT, separate and maintained](https://github.com/skalesapp/skales-devkit))

**Out of scope.** Please do not spend time here:

- The v7 source snapshot in this repository. A finding in a file that only
  exists in this snapshot describes software nobody is running. If you believe
  a finding also applies to the shipped application, say so explicitly and tell
  us why, and we will check it against the real tree and treat it as in scope if
  it lands.
- Anything requiring an attacker to already have local user-level access to the
  machine Skales runs on. Skales is a local application: it runs with the
  user's own privileges by design, and by design it can read files and run
  commands when the user asks it to.
- Findings in third-party AI providers or models reached through your own API
  keys.
- Denial of service, resource exhaustion, and automated or volumetric load
  testing of any kind.
- Reports produced solely by an automated scanner, without a working
  demonstration against a released build.

## How to report

Use GitHub's private vulnerability reporting on this repository
(**Security → Report a vulnerability**). That reaches us directly and keeps the
report private until it is fixed.

If that is not available to you, write to **security@skales.app**.

Please include:

- The **version** you tested, and where you got the build
- Your **platform** (Windows, macOS, Linux, Android, iOS)
- Steps to reproduce, ideally against a freshly installed release
- What an attacker gains, concretely

Please do not open a public issue for a vulnerability before we have had a
chance to respond.

## What you can expect from us

- An acknowledgement within **72 hours**
- An assessment, including whether it hits the shipped product or only the
  snapshot, within **7 days**
- A fix in the next release for anything that affects users, sooner if it is
  serious
- **Credit in the changelog and in this repository's release notes**, under the
  name or handle you choose, unless you would rather stay anonymous

Skales is built by one person in Vienna. That means replies come from a human
and not a queue, and it also means please give us a little patience on the
larger reports.

## Supported versions

Only the **current released version** receives security fixes. Skales updates
in place, and the version you are on is visible under Settings → About.

| Version | Supported |
|---|---|
| Latest release | Yes |
| Anything older | No, please update |
| The v7 source snapshot in this repository | Not applicable, see above |
