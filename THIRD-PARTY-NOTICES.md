# Third-Party Notices

Skales bundles content from third-party open-source projects. Each is used under
its own license, reproduced below. This file satisfies the attribution
requirement of those licenses; in addition, every bundled item carries its
author, source, and license inline (in the app UI and in each file's metadata).

---

## Built-in Agent Skills — mattpocock/skills

The built-in Agent Skills library bundled with Skales adapts skills from
**mattpocock/skills** (https://github.com/mattpocock/skills), used under the
MIT License. Each skill's `SKILL.md` frontmatter records `author: Matt Pocock`,
`source: mattpocock/skills`, and `license: MIT`.

The upstream `deprecated/` and `in-progress/` buckets are not bundled (upstream
marks them as unshipped), and `setup-matt-pocock-skills` is omitted (it scaffolds
a repo layout specific to the upstream distribution, not applicable in Skales).

```
MIT License

Copyright (c) 2026 Matt Pocock

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Design Style-Packs — VoltAgent/awesome-design-md

The design style-packs bundled with Skales adapt DESIGN.md styleguides from
**VoltAgent/awesome-design-md**
(https://github.com/VoltAgent/awesome-design-md), used under the MIT License.
Each pack is presented in the UI as an "inspired by" aesthetic reference with
its source (VoltAgent/awesome-design-md) and license (MIT). Packs carry no
logos or trademarks; Skales renders none, and honouring any brand's trademark
rights is the user's responsibility.

```
MIT License

Copyright (c) 2026 VoltAgent

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Bundled typefaces - Inter, Space Grotesk, DM Sans, JetBrains Mono

Skales bundles four typefaces, each used under the
**SIL Open Font License 1.1**. They are shipped with the app rather than fetched
at runtime so a packaged, offline install renders the real type instead of a
system fallback, and so no page load reaches a font CDN.

- **Inter** (https://github.com/rsms/inter), Copyright (c) 2016 The Inter Project Authors
- **Space Grotesk** (https://github.com/floriankarsten/space-grotesk), Copyright (c) 2020 Florian Karsten
- **DM Sans** (https://github.com/googlefonts/dm-fonts), Copyright (c) 2014-2024 Colophon Foundry, Jonny Pinhorn, Indian Type Foundry
- **JetBrains Mono** (https://github.com/JetBrains/JetBrainsMono), Copyright (c) 2020 The JetBrains Mono Project Authors

The subset files are the ones Google Fonts serves, unmodified; only the file
names differ. The OFL permits bundling and redistribution with the application;
none of the fonts is sold on its own, and no Reserved Font Name is used for a
modified version.

```
SIL OPEN FONT LICENSE Version 1.1

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide development
of collaborative font projects, to support the font creation efforts of academic
and linguistic communities, and to provide a free and open framework in which
fonts may be shared and improved in partnership with others.

The OFL allows the licensed fonts to be used, studied, modified and redistributed
freely as long as they are not sold by themselves. The fonts, including any
derivative works, can be bundled, embedded, redistributed and/or sold with any
software provided that any reserved names are not used by derivative works. The
fonts and derivatives, however, cannot be released under any other type of
license. The requirement for fonts to remain under this license does not apply to
any document created using the fonts or their derivatives.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining a copy of
the Font Software, to use, study, copy, merge, embed, modify, redistribute, and
sell modified and unmodified copies of the Font Software, subject to the
following conditions:

1) Neither the Font Software nor any of its individual components, in Original or
Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy contains the
above copyright notice and this license. These can be included either as
stand-alone text files, human-readable headers or in the appropriate
machine-readable metadata fields within text or binary files as long as those
fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font Name(s)
unless explicit written permission is granted by the corresponding Copyright
Holder. This restriction only applies to the primary font name as presented to
the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font Software
shall not be used to promote, endorse or advertise any Modified Version, except
to acknowledge the contribution(s) of the Copyright Holder(s) and the Author(s)
or with their explicit written permission.

5) The Font Software, modified or unmodified, in part or in whole, must be
distributed entirely under this license, and must not be distributed under any
other license. The requirement for fonts to remain under this license does not
apply to any document created using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR
OTHER RIGHT. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL,
OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER
DEALINGS IN THE FONT SOFTWARE.
```

---

## Local speech — sherpa-onnx, Whisper, and the Piper voices

Skales Local's on-device speech is built on **sherpa-onnx**
(https://github.com/k2-fsa/sherpa-onnx), used under the Apache License 2.0. The
`sherpa-onnx-node` package and its platform binaries are shipped unmodified,
except for one packaging repair: `install_name_tool -add_rpath @loader_path` is
applied to `sherpa-onnx.node` on macOS, because the published binary carries the
build machine's own directory as its only rpath and cannot otherwise find the
libraries beside it. No source is changed.

Speech to text uses **Whisper** (https://github.com/openai/whisper), MIT
licensed in both code and weights, in the int8 ONNX conversions published by the
sherpa-onnx project.

Text to speech uses **Piper voices** for most languages, a **Coqui VITS** model
for Croatian and an **icefall VITS** model for Chinese. A note on the Piper ones,
because the distinction is load-bearing: Piper's own code (OHF-Voice/piper1-gpl)
is licensed GPL-3.0 and is **not** linked, imported, vendored or shipped by
Skales. What Skales downloads is the voice files (`.onnx`), which are read by
sherpa-onnx.

Each voice carries its own licence, recorded per entry in the model catalogue
and shown on the model card in Settings before the download starts. The licences were read out of each
published archive rather than taken from a list of recommended voices, and that
mattered in both directions: six candidate voices were EXCLUDED on those grounds
(three are CC-BY-NC-SA, two declare no licence at all, one is research-only) and
one - the Croatian voice - was very nearly excluded for the opposite reason, its
sherpa packaging carrying no licence file while the Coqui manifest it is built
from and its author's own model card both state BSD-3-Clause.

No model files are bundled with the application. They are downloaded, on
request, from the upstream release the catalogue names, directly to the user's
machine.
