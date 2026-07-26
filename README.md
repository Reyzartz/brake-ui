# brake-ui

Sharp, clean React components. Built on React 19, Tailwind CSS v4 and
`class-variance-authority`, with an `oklch` token system and attribute-driven
dark mode.

Extracted from [ghost-click](https://github.com/Reyzartz/ghost-click).

## Install

Distributed as a git dependency — no registry involved. `dist/` is committed, so
no build step runs on install.

```sh
bun add github:Reyzartz/brake-ui#v0.1.0
# or: npm i github:Reyzartz/brake-ui#v0.1.0
```

Peer dependencies you must already have: `react`, `react-dom`, `lucide-react`.

## Use

```tsx
// Once, at your app entry (or in your Tailwind entry CSS):
import "brake-ui/theme.css";

import { Button, Card, Text } from "brake-ui";

<Card variant="selected" hover>
  <Text variant="h3">Hello</Text>
  <Button color="primary">Go</Button>
</Card>;
```

`theme.css` pulls in Tailwind itself (`@import "tailwindcss"`) plus every design
token, so it is the only stylesheet you need. It also carries an
`@source "./index.js"` directive — Tailwind v4 skips `node_modules` during
automatic source detection, and this makes it scan the bundled components so
their classes survive. No configuration needed on your side.

## Theming

Components contain **zero** `dark:` classes. Dark mode is a CSS-variable swap
driven by a `data-theme` attribute on any ancestor:

```ts
document.documentElement.dataset.theme = "dark"; // or delete for light
```

Override any token the same way you'd override a Tailwind theme value — every
color, radius, shadow and type scale is a custom property in `@theme`. See
[`src/styles/theme.css`](src/styles/theme.css) for the full list.

Inter is first in `--font-sans` but is **not** bundled. Load it yourself if you
want it; otherwise the system sans stack applies.

## Components

`Alert` · `Badge` · `Button` · `Card` · `ConfirmActionButton` · `Divider` ·
`Dropdown` · `Icon` · `InfoPopover` · `Input` · `Kbd` · `Modal`
(`ModalHeader`/`ModalBody`/`ModalFooter`) · `Select` · `Text` · `Textarea` ·
`Toggle`

Every component and every prop type is exported from the package root.

### Shadow DOM

`Modal` renders in place with a high `z-index` rather than through a portal, and
`Dropdown`/`InfoPopover` attach their outside-click listeners to `document`.
This is deliberate: it's what lets them work inside a shadow root (ghost-click
injects its UI into arbitrary pages). If you need portal behaviour, wrap them.

`Toggle` is controlled-only — its track and thumb read `props.checked`, so pass
both `checked` and `onChange`.

## Develop

```sh
bun install
bun run storybook     # localhost:6006, with a light/dark toolbar toggle
bun run type-check
bun run lint
bun run build         # dist/index.js + dist/*.d.ts + dist/theme.css
```

Storybook is the acceptance test — there is no unit test suite. Walk the stories
in both themes before tagging.

### Releasing

`dist/` is committed on purpose, so a release is:

```sh
bun run build
git commit -am "release: v0.1.0"
git tag v0.1.0 && git push --tags
```

Consumers then bump the ref in their `package.json`.
