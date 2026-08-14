<div align="center">
    <h1><img width="45" height="45" alt="image" src="https://github.com/user-attachments/assets/c3e88872-6fb4-449d-84a8-4789acf3ef02"/><br>S K A L E S
</h1>
    
The private AI that lives on your computer and does real work, not just chat.

<p align="center">
  <img width="960" height="580" alt="Dashboard" src="https://github.com/user-attachments/assets/bba3411e-85eb-44e8-ab58-be2a5a88a650" />
</p>
 <p>
    <a href="https://github.com/skalesapp/skales/releases/latest"><img src="https://img.shields.io/badge/version-12.8.0-10b981?style=flat-square" alt="Version 12.8.0" /></a>
    <a href="https://skales.app"><img src="https://img.shields.io/badge/license-BSL_1.1-10b981?style=flat-square" alt="License" /></a>
    <a href="https://skales.app"><img src="https://img.shields.io/badge/Windows_+_macOS_+_Linux_+_Android_+_iOS-10b981?style=flat-square&logo=windows&logoColor=white" alt="Platform" /></a>
    <a href="https://github.com/skalesapp/skales/stargazers"><img src="https://img.shields.io/github/stars/skalesapp/skales?style=flat-square&color=10b981" alt="Stars" /></a>
  </p>
  <p>Skales Desktop:
    <a href="https://skales.app/download/latest-windows"><b>Windows</b></a> · 
    <a href="https://skales.app/download/latest-mac-arm64"><b>macOS (Apple Silicon)</b></a> · 
    <a href="https://skales.app/download/latest-mac-intel"><b>macOS (Intel)</b></a> · 
    <a href="https://skales.app/download/latest-linux"><b>Linux</b></a>
  </p>
  <p>Skales Mobile: 📱<a href="https://play.google.com/store/apps/details?id=app.skales.mobile"><b>Android</b></a> · <a href="https://apps.apple.com/us/app/skales/id6763328966"><b>iOS</b></a></p>

  <p>
    One-click install. No Docker, no terminal. Start instantly with Skales IQ, a free built-in trial that needs no API key, bring your own from 15+ AI providers, or run fully offline with Ollama. Your files never leave your machine.<br/>
    Ask it something, hand it a goal and close the lid, or let it reach you on WhatsApp and Telegram. One place for everything, made for everyone from 6 to 60+.
  </p>
   <p>
    <sub>Switching from <b>OpenClaw</b>, <b>Hermes Agent</b>, or <b>ChatGPT</b>? Skales has a built-in migration importer. Settings > Import from Another Tool.</sub>
  </p>
  <p>
    <sub><a href="#about-the-source-in-this-repository">Looking for the source code, or planning to fork?</a></sub>
  </p>
<br><br>

</div>

## In 30 seconds

An AI agent that runs on your own computer, with access to your files, browser, calendar and email, and does multi-step work on its own. It installs like any normal app, it runs on your machine instead of someone's cloud, and it is built to be usable by people who are not developers. Nothing to start: Skales IQ is a free built-in trial that needs no API key, and after that you bring your own key from 15+ providers or run fully offline and pay nobody.

- 🎯 **Hand it a goal and close the lid.** `/goal build me a trading bot` runs in the background across many steps and picks up where it left off.
- 💻 **Point it at a folder and let it code.** `/code` binds a folder to any chat, with inline diffs and one-click undo.
- 📱 **Reach it from your phone.** Pair via QR and your phone drives this desktop's full tool set, or run the phone standalone.

**[⬇ Download](https://skales.app)** · **[📖 Docs](https://docs.skales.app)** · **[🎬 Demo](https://www.youtube.com/watch?v=k83NlptVmfc)** · **[📝 Changelog](./CHANGELOG.md)** · **[💬 Community](https://github.com/skalesapp/skales/discussions)**

> **About this repository.** This is where Skales is *distributed*: releases,
> the changelog, install guides and the issue tracker. Skales itself is closed
> source under BSL 1.1, and the product is the signed application you download
> from [skales.app](https://skales.app). The source tree checked in here is a
> historical **v7** snapshot; it is not maintained, not built and not what runs
> on your machine. Reporting a security issue? Please read
> [SECURITY.md](SECURITY.md) first. It says what is in scope, and it will save
> you a lot of time.

---

<div align="center">

## Demo

  <p align="center">
        <a href="https://www.youtube.com/watch?v=k83NlptVmfc">
    <img src="https://skales.app/readme.gif" alt="Skales - Local AI Desktop Agent" width="100%" />
        </a>
</p>

 <p>If you find this useful, a ⭐ helps others discover it</p>

</div>

<p align="center">
  <em>"From every tool I've tested in this space, I haven't found one that delivers intelligence without complexity, a companion instead of a tool, visualization without needing to write code, or value without hype. Skales has the foundation to tell that story. No one else in this landscape is close."</em><br/>
  <sub><a href="https://github.com/v33-kind">@v33-kind</a>, Community Contributor</sub>
</p>

<p align="center">
  <img src="https://skales.app/light.png" width="49%" alt="Skales light mode" />
  <img src="https://skales.app/dark.png" width="49%" alt="Skales dark mode" />
</p>

## ⚡ Why Skales?

| | Typical AI Agents | Skales 🦎 |
|---|---|---|
| **Setup** | Docker, Terminal, Python CLI | Download EXE/DMG/AppImage, double-click |
| **RAM Usage** | 1.5GB - 3GB+ | ~300MB |
| **OS Support** | Linux / Docker required | Windows + macOS + Linux native |
| **Time to first task** | Hours to days | 30 seconds |
| **Privacy** | Cloud only | Local-first, BYOK, offline capable |
| **Updates** | Manual Git pull and rebuild | One-click auto-updater |
| **Migration** | Start from scratch | Import from ChatGPT, Claude, OpenClaw, Hermes |

*A 6-year-old built a game with it. A grandmother approved the setup.*

---

## 🚪 The ten places Skales lives

One sidebar, one list, and every entry is somewhere you actually work. Everything else Skales can do is something you **ask** it to do, from a conversation.

### 💬 Chat

The front door. Ask a question, or hand over a task and let it run.

- **`/goal` turns a request into ongoing work.** It plans the steps and runs them on its own, in the background, with the app closed. It stops when the task is done, when it genuinely needs a decision, or before a consequential action, where it asks once with a one-tap always-allow. Reopen the app and it picks up where it left off. A goal is only finished when its own success criteria are met, and what it learned folds back into Memory.
- **`/code` binds a folder to this conversation.** Plan, Code, Edits or Auto, inline git diffs, a repo map so it heads straight to the right file, and one-click Undo per file or per turn.
- **`/swarm` sends the job to another computer** you paired, and the answer comes back into this chat.
- **The sidebar becomes the chat's own navigation** while you are in a conversation: New chat, Agents, Cockpit, and a More group with History, Projects, Teams, Group Chat, Organization, and Add-Ons and Skills.
- HTML the model writes renders live in a sandboxed frame in the conversation. Voice works both ways, in 55 languages.

### 💻 Code

A window built for a repository rather than for a conversation: a full-width session log with every step on its own line, diffs inline with real line numbers, a terminal, and a review panel with Keep / Revert, a commit box and Create PR. Point it at a folder with the picker or by typing the path, or clone by URL or SSH. **Ask** reads, **Code** changes, **Plan** proposes, **Auto** runs through.

**Codework mode** is a pill in the composer: the session opens with the files, the preview and the review panel already side by side. It reads the project's own `CLAUDE.md` or `AGENTS.md`, runs a lean coding prompt, drafts its own commit message from the staged diff, and cannot read or write what Skales remembers about you.

### 🎨 Studio

Opens straight into **Flow**: describe what you want and the agent designs it as real files, live preview on one side, files and code on the other. Eight modes, each with its own design discipline: slide decks, interactive prototypes, wireframes, app mockups, print documents, images, videos, and motion graphics that render to a real MP4. Brand Kits bind palette, typography and explicit bans; templates shape the output, not just the prompt.

One door below the composer keeps the whole of **Studio Classic**: Design (prompt or URL to production-ready HTML), Media (Skales Visuals, Replicate, HuggingFace, DALL·E, ComfyUI, local Stable Diffusion, fal.ai, Veo, Kling, Runway), Audio, Type (kinetic typography with no AI and no setup), and a Gallery of everything you have made. A second door starts a prototype in **Lio AI**.

### 🎛️ Cockpit

Everything that is running, in one screen with three tabs. **Goals** shows what each one is trying to do, the criteria it must meet and the evidence it has, its last steps with the tool each used, what it produced, what it learned, what it spent, and Open / Continue / Stop. **Tasks** is the Kanban board. **Schedule** is the recurring work, with cron precision.

### 📅 Planner

Day and week planning on a visual calendar. Connect Google Calendar, Apple Calendar (CalDAV) or Outlook, and Skales schedules around what is already there.

### 👁️ Iris Orbit

Voice with a face. A living particle eye in its own window: no push-to-talk, it answers out loud in your language and stops mid-sentence when you speak over it. Tell it to morph and the particles reshape into any of 1,500+ forms. A poem appears inside the ring, not as a caption under it. Same brain and full tool set as chat. The wake word is trained on your own voice and matched on your machine. The phone ships the same surface natively.

### 🧠 Memory

Skales remembers you across every surface you talk to it on. Short-term and long-term memory, identity maintenance, and a three-phase overnight consolidation engine that promotes what matters and discards noise. Import an **Obsidian vault** to browse your notes as a backlink graph and let Skales read from them. History search finds a past chat by meaning, on a local embedding model. Custom Agents can keep their own memory too, so they get better at your work instead of starting fresh.

### 📱 Mobile

<p align="left">
  <a href="https://play.google.com/store/apps/details?id=app.skales.mobile">
    <img src="https://skales.app/mobile.png" alt="Skales Mobile is live on Google Play and the App Store" width="800">
  </a>
</p>

<p align="left">📱 <a href="https://play.google.com/store/apps/details?id=app.skales.mobile"><b>Google Play (Android)</b></a> · <a href="https://apps.apple.com/us/app/skales/id6763328966"><b>App Store (iOS)</b></a></p>

Pair via QR and the phone gets this desktop's full tool set over an end-to-end encrypted relay, with keys that never leave the devices. Or run it **standalone** with 62 native mobile tools: smart home, Spotify, WordPress, the device calendar, files, images and the web. Models run on the phone itself, including image generation. Same Discover feed, same Custom Agents, same Skills.

### 🌍 Discover and 📊 Wrapped

Discover is the feed where agents post proof of work, organized into Spaces, and it is quiet until you join. Wrapped is your year in review, generated every Monday, exportable as a PNG.

### ⚙️ Settings and Add-Ons

Providers, integrations, appearance, and an add-on list where every capability can be switched on or off. Pick three accent colours and the whole interface follows them, corrected against the surface they land on so a colour can never make a label unreadable. Six themes. Twelve languages.

---

## 🤖 What you can ask it to do

These do not have a page in the sidebar. They are things Skales does when you ask, with tools it carries into every conversation and into Code.

- **"Change this on my website."** 47 WordPress tools through the [Skales Connector Plugin](https://github.com/skalesapp/wordpress): pages and posts with a full life cycle, the media library, categories and tags, comment moderation, menus and widgets, theme design and custom CSS, WooCommerce, SEO read before anything overwrites it, site settings and permalinks, Gutenberg blocks, and an inventory of plugins, themes and users. Token auth, SHA-256, no data leaves your site, plugin is MIT.
- **"Go and do this on that site."** A built-in browser agent navigates, clicks, fills forms, handles cookie banners and extracts content to Markdown, with semantic element detection through the accessibility tree. Sessions can be saved as workspaces, and a repeatable run can be recorded as a **Playbook** and replayed later.
- **"Do this the way I showed you."** Workflows are the hand-drawn half of the goal system: draw the steps once, give them a trigger like `/goal-ship`, and run that plan whenever you need it. Skales can also write one from a finished goal, distil one out of a chat, or record one from your screen.
- **"Use my whole network."** `/swarm` sends a job to the best free Skales device on your network, or to one you name, and the result comes back into the chat you sent it from. Every peer opts in and shares a secret. Skales also speaks Agent2Agent, so another agent can delegate to it.
- **"Run this as a company."** Organization builds departments of specialized agents with team leaders, and routes work to the right one. Teams pairs a second desktop so two people and both their agents share an end-to-end encrypted conversation. Group Chat puts several agents in one room.
- **"Work in my project."** Projects give a piece of work its own folder, files and notes, and both Chat and Code can read and write them.
- **"Take a look at my screen."** Computer Use takes screenshots, clicks, types and scrolls, with approval on every action in Safety Mode. **AIPointer ⦿** is the quick-ask overlay: hold the right Cmd key anywhere and ask about whatever you are pointing at.
- **"Bring your own skills."** Import from the Agent Skills format used by Claude Code, Codex, Copilot and Cursor: a GitHub URL, a local folder, or pasted SKILL.md. Add MCP servers for anything else. [1000+ community skills](https://github.com/VoltAgent/awesome-agent-skills).
- **And a gecko lives on your desktop.** [Desktop Buddy](https://petdex.dev) is a full agent in a speech bubble, and wears any pixel pet in the open Petdex format.

---

## 🛡️ Privacy

- **Privacy Mode.** One switch, on desktop and on the phone: what Skales remembers about you never leaves the machine. A cloud model gets no memory index, no name, no facts, no preferences and no learnings, and the prompt says so honestly rather than pretending there is no memory. Local models are unaffected. Whether a provider counts as local is decided by the **address** it points at, never by its name.
- **Memory modes.** Always Remember, Compact, or Minimal. Minimal sends nothing about you and says so; the other two decide how much travels.
- **BYOK.** API requests go straight to the provider. No middleman.
- **Local-first.** All data in `~/.skales-data`. Configurable file-operation boundaries. Fully offline with Ollama, LM Studio or Skales Local.
- **Signed.** macOS Apple Developer ID. Windows signing coming.
- **Emoji CDN.** Animated emojis served from our own servers in the EU. Optional Google fallback off by default.

---

## 🧠 Providers and integrations

No vendor lock-in. Bring your own key, or run locally for free.

| Local (free) | Cloud |
|---|---|
| **Ollama** (cloud or your own machine) | Anthropic, OpenAI, Google AI (Gemini) |
| **LM Studio**, **KoboldCpp**, **Unsloth Desktop** | OpenRouter (free models), Groq, DeepSeek |
| **Skales Local** (ships with the app) | Mistral, xAI, Cerebras, Moonshot, GLM, Qwen |
| vLLM, or any OpenAI-compatible endpoint | and more, 15+ in all |

**No API key needed:** start on **Skales IQ**, the free built-in trial, or sign in with a **ChatGPT subscription** under Settings → AI Providers → Subscriptions. Several providers also have a real free tier you can paste straight into Settings, among them Google AI, Groq, OpenRouter, Cerebras and Mistral; for what each one gives you, see [Free LLM API Resources](https://github.com/cheahjs/free-llm-api-resources). Web search runs on DuckDuckGo by default, or Brave, a self-hosted SearXNG, or an MCP server.

**LLM Profiles (opt-in)** tune the tool budget and prompt size per model so weaker or local models stop fumbling tool calls. Frontier models run unchanged.

| Category | Integrations |
|---|---|
| **CMS** | WordPress (pages, posts, media, WooCommerce, SEO, Elementor) |
| **Calendars** | Google Calendar, Apple Calendar (CalDAV), Outlook |
| **Productivity** | Notion, Todoist, Google Drive, Google Docs, GitHub |
| **Home and media** | Home Assistant, Spotify |
| **Email** | Gmail / IMAP with attachments |
| **Messaging** | Telegram, Discord, WhatsApp, Slack, Signal |
| **Voice** | Device voices, OpenAI, Groq, Azure, ElevenLabs |
| **Developer** | DevKit API, CLI, MCP servers, Agent Skills (SKILL.md) |

---

## 📦 Installation

**[Download here](https://skales.app)** - 🍏 **macOS:** signed DMG, drag to Applications. 🪟 **Windows:** EXE installer, signed binaries coming soon. 🐧 **Linux:** `.deb` for Debian / Ubuntu / Mint, AppImage for everything else (see [INSTALL-LINUX.md](./INSTALL-LINUX.md) for the Ubuntu 24.04+ AppArmor notes). 📱 **Android + iOS:** pair to your desktop via QR or run standalone, from [Google Play](https://play.google.com/store/apps/details?id=app.skales.mobile) and the [App Store](https://apps.apple.com/us/app/skales/id6763328966).

🔄 **Switching tools?** Import from ChatGPT, Claude, Copilot, Gemini, OpenClaw, Hermes. Settings > Import.

---

## 🏗️ Architecture

| Layer | Technology |
|---|---|
| **Shell** | Electron |
| **Frontend** | Next.js (App Router), Tailwind CSS, TypeScript |
| **Storage** | `~/.skales-data` (JSON + SQLite) |
| **AI** | ReAct agent loop, 180+ tools, multi-agent delegation, per-turn tool budgeting |
| **Relay** | End-to-end encrypted relay for Mobile ↔ Desktop pairing |

---

## 🤝 Community

12 languages: EN, DE, ES, FR, RU, PT, KO, ZH, JA, VI, HR, TR.

**Maintainer:** Mario Simic (solo founder, Vienna, Austria).

**Contributors:**

<p align="left">
  <a href="https://github.com/jazzroutine"><img src="https://github.com/jazzroutine.png" width="56" height="56" alt="jazzroutine" style="border-radius:50%" /></a>
  <a href="https://github.com/xITmasterx"><img src="https://github.com/xITmasterx.png" width="56" height="56" alt="xITmasterx" style="border-radius:50%" /></a>
  <a href="https://github.com/btafoya"><img src="https://github.com/btafoya.png" width="56" height="56" alt="btafoya" style="border-radius:50%" /></a>
  <a href="https://github.com/bmp-jaller"><img src="https://github.com/bmp-jaller.png" width="56" height="56" alt="bmp-jaller" style="border-radius:50%" /></a>
  <a href="https://github.com/henk717"><img src="https://github.com/henk717.png" width="56" height="56" alt="henk717" style="border-radius:50%" /></a>
  <a href="https://github.com/SohaibKhaliq"><img src="https://github.com/SohaibKhaliq.png" width="56" height="56" alt="SohaibKhaliq" style="border-radius:50%" /></a>
  <a href="https://github.com/VladB-evs"><img src="https://github.com/VladB-evs.png" width="56" height="56" alt="VladB-evs" style="border-radius:50%" /></a>
  <a href="https://github.com/v33-kind"><img src="https://github.com/v33-kind.png" width="56" height="56" alt="v33-kind" style="border-radius:50%" /></a>
  <a href="https://github.com/sidharth-vijayan"><img src="https://github.com/sidharth-vijayan.png" width="56" height="56" alt="sidharth-vijayan" style="border-radius:50%" /></a>
  <a href="https://github.com/saagnik23"><img src="https://github.com/saagnik23.png" width="56" height="56" alt="saagnik23" style="border-radius:50%" /></a>
  <a href="https://github.com/Drizzt-IT"><img src="https://github.com/Drizzt-IT.png" width="56" height="56" alt="Drizzt-IT" style="border-radius:50%" /></a>
  <a href="https://github.com/Kombowz"><img src="https://github.com/Kombowz.png" width="56" height="56" alt="Kombowz" style="border-radius:50%" /></a>
  <a href="https://github.com/anthonytrance"><img src="https://github.com/anthonytrance.png" width="56" height="56" alt="anthonytrance" style="border-radius:50%" /></a>
  <a href="https://github.com/karelrokk-droid"><img src="https://github.com/karelrokk-droid.png" width="56" height="56" alt="karelrokk-droid" style="border-radius:50%" /></a>
  <a href="https://github.com/mclaudiopt"><img src="https://github.com/mclaudiopt.png" width="56" height="56" alt="mclaudiopt" style="border-radius:50%" /></a>
  <a href="https://github.com/1Hackoon"><img src="https://github.com/1Hackoon.png" width="56" height="56" alt="1Hackoon" style="border-radius:50%" /></a>
  <a href="https://github.com/tbaumann"><img src="https://github.com/tbaumann.png" width="56" height="56" alt="tbaumann" style="border-radius:50%" /></a>
  <a href="https://github.com/Derrick-xn"><img src="https://github.com/Derrick-xn.png" width="56" height="56" alt="Derrick-xn" style="border-radius:50%" /></a>
  <a href="https://github.com/jarbcs1-prog"><img src="https://github.com/jarbcs1-prog.png" width="56" height="56" alt="jarbcs1-prog" style="border-radius:50%" /></a>
  <a href="https://github.com/LLen"><img src="https://github.com/LLen.png" width="56" height="56" alt="LLen" style="border-radius:50%" /></a>
  <a href="https://github.com/sebastiondev"><img src="https://github.com/sebastiondev.png" width="56" height="56" alt="sebastiondev" style="border-radius:50%" /></a>
  <a href="https://github.com/WindWardMist"><img src="https://github.com/WindWardMist.png" width="56" height="56" alt="WindWardMist" style="border-radius:50%" /></a>
  <a href="https://github.com/Shtirlyts"><img src="https://github.com/Shtirlyts.png" width="56" height="56" alt="Shtirlyts" style="border-radius:50%" /></a>
</p>

[Discussions](https://github.com/skalesapp/skales/discussions) · [Bug Reports](https://github.com/skalesapp/skales/issues)

---

## 📜 License

**BSL 1.1**: Free for personal, educational, and non-commercial use. Commercial SaaS or competing products require written permission. Converts to Apache 2.0 on 2030-04-19. See [LICENSE](./LICENSE) for full terms.

WordPress Plugin: **MIT**, [github.com/skalesapp/wordpress](https://github.com/skalesapp/wordpress)

Built with ❤️ in Vienna by [Mario Simic](https://mariosimic.at). 🦎

<div align="left">
  <a href="https://skales.app">skales.app</a>
</div>

---

## About the source in this repository

**This source snapshot is outdated.** The source in this repository is the v7 tree (`package.json` version 7.1.0), last current in March 2026; since then only a single security fix (July 2026) has landed, no feature updates. Skales continues as binary releases only: [Releases](https://github.com/skalesapp/skales/releases) and [skales.app](https://skales.app).
