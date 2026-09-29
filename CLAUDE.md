# CLAUDE.md — bonkers-ui

`bonkers-ui` is the React 19 + Tailwind v4 component library (design system) of bonkers.ie. It is published to npm with this file included.

**How to read this file**
- If you found this file at `node_modules/bonkers-ui/CLAUDE.md`, you are in a **consuming project**. Read Parts 1–3. Ignore Part 4.
- If you are in the `bonkers-ui` repo itself, all parts apply.

---

## Part 1 — Using bonkers-ui in a project

### Setup (required once per consuming project)

1. Peer deps: `react`, `react-dom`, `tailwindcss@^4`, `classnames`, `@fortawesome/fontawesome-svg-core`, `@fortawesome/react-fontawesome`, and the FontAwesome icon packs you use.
2. Tailwind v4 build plugin: `@tailwindcss/vite` (Vite) or `@tailwindcss/postcss` + `postcss` (Next.js).
3. In the app's CSS entry point (for example `src/app/globals.css`):
   ```css
   @import 'bonkers-ui/theme';
   @source "../node_modules/bonkers-ui";   /* path is relative to this CSS file */
   ```
   Without `@source`, Tailwind never scans the library's class names and components render unstyled.
4. `tsconfig` → `"moduleResolution": "Bundler"` (or `NodeNext`) so the subpath exports resolve.
5. FontAwesome: `UiIcon` accepts an `IconProp`. Pass icon objects (`faCheck`), **or** register icons with `library.add(...)` if you use array/string names like `["fas", "chevron-down"]`. `UiAccordionInfoDropdown` uses `["fas", "chevron-down"]` internally, so register `faChevronDown` if you use it.

### Imports

Prefer per-component subpaths. They are tree-shakeable, and each component's CSS module is injected automatically:

```tsx
import { UiButton, EButtonTypes, EButtonSizes } from "bonkers-ui/UiButton";
import { UiTypography, ETypographySizes, ETextWeight, EColors } from "bonkers-ui/UiTypography";
import { ESize } from "bonkers-ui/types/sizing";
import { EColors } from "bonkers-ui/types/colors";
import { EJustify } from "bonkers-ui/types/align";
```

A barrel import (`import { UiButton } from "bonkers-ui"`) also works.

All variant props are **TypeScript enums**, so always pass the enum member (`kind={EButtonTypes.PRIMARY_BRAND}`), never a string literal. TS rejects string literals for enum-typed props.

### Tailwind in consuming projects: the theme REPLACES Tailwind defaults

`bonkers-ui/theme` resets Tailwind's default colour, spacing and font-size scales (`--color-*: initial`, `--spacing-*: initial`, `--text-*: initial`). The only tokens that exist are the ones below.

- ❌ Do not use `p-4`, `mt-2`, `gap-6`, `text-base`, `bg-gray-100`, `text-red-500`, `bg-blue-600`.
- ✅ Use the named tokens instead: `p-sm`, `mt-xxs`, `gap-md`, `text-md`, `bg-secondary-alt-200`, `text-error`, `bg-primary-600`.

**Spacing.** Applies to `p-*`, `m-*`, `gap-*`, `size-*`, `w-*`, `h-*`, `min-/max-w-*`, `min-/max-h-*`, `inset`, and so on:

| token | `zero`/`0` | `min` | `xxxs` | `xxs` | `xs` | `sm` | `smd` | `md` | `lg` | `xl` | `xxl` | `xxxl` | `xxxxl` | `xxxxxl` |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| px | 0 | 1 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64 | 80 | 120 |

Fractions (`w-1/2`), `w-full` and arbitrary values (`h-[30px]`) still work.

**Font sizes:** `text-xxs` 10 · `text-xs` 12 · `text-sm` 14 · `text-md` 16 · `text-lg` 18 · `text-xl` 20 · `text-2xl` 24 · `text-3xl` 28 · `text-4xl` 32 · `text-5xl` 40 (px).

**Colours** (use with `text-`, `bg-`, `border-`, `ring-`, `outline-`, and so on). A bare name such as `bg-primary` means shade 500.

| palette | shades | role |
|---|---|---|
| `primary` | 50 100 200 300 400 500 600 700 800 900 | brand green (600 = main CTA) |
| `primary-alt` | 300–700 | teal/alt green |
| `secondary` | 300–700 | dark navy, main text colour |
| `secondary-alt` | 200–700 | neutral greys: borders (600), disabled (300), backgrounds (200) |
| `accent` | 300–700 | purple accent |
| `accent-alt` | 300–700 | yellow accent |
| `warning` | 300–700 | orange |
| `error` | 100–700 | red |
| base | `white` `black` `current` `transparent` | |

Other tokens: shadows `shadow-size-md`, `shadow-border-primary`, `shadow-border-secondary`, `shadow-border-primary-600/700`; backdrop blur `backdrop-blur-{min,xs,sm,md,lg,xl,2xl}`; base font `museo-sans`.

Styling rules that apply to consumers too: no `!important` utilities, and use `cx()` from `classnames` for conditional classes.

---

## Part 2 — Component reference

Notation: `prop: Type = default`. `?` = optional. Every component also accepts `className`. "Native attrs" means the extra HTML attributes are spread onto the underlying element.

### Shared enums (`bonkers-ui/types/*`)
- `ESize` (`types/sizing`): `AUTO ZERO MIN XXXS XXS XS SM MD LG XL XXL XXXL XXXXL XXXXXL`, which map to the spacing tokens above. Used by `UiIcon` and `UiIconBadge`.
- `EColors` (`types/colors`, also re-exported from `UiTypography` and `UiStars`): `WHITE BLACK TRANSPARENT CURRENT`, then `PRIMARY`, `PRIMARY_50…PRIMARY_900`, `PRIMARY_ALT[_300…700]`, `SECONDARY[_300…700]`, `SECONDARY_ALT[_200…700]`, `ACCENT[_300,_500…700]`, `ACCENT_ALT[_300…700]`, `WARNING[_300…700]`, `ERROR[_100…700]`. Components map these to `text-*` classes.
- `EJustify` (`types/align`): `START END CENTER BETWEEN AROUND EVENLY`.

### Typography
**`UiTypography`** (`bonkers-ui/UiTypography`) is polymorphic. Use it for all text.
- `tag?: keyof JSX.IntrinsicElements = "p"`. Native attrs for that tag are accepted, for example `tag="label" htmlFor`.
- `size?: ETypographySizes`: `XXS`(10) `XS`(12) `SM`(14) `MD`(16) `LG`(18) `XL`(20) `XXXL`(28) `XXXXL`(32) `XXXXXL`(40). `XXL`(24) is **deprecated**.
- `weight?: ETextWeight`. ⚠ The names are shifted: `LIGHT`→300, `REGULAR`→500 (`font-medium`), `SEMI_BOLD`→700 (`font-bold`), `BOLD`→900 (`font-black`).
- `color?: EColors` · `align?: ETextAlign` (`LEFT CENTER RIGHT`) · `textTransform?: ETextTransform` (`LOWERCASE UPPERCASE CAPITALIZE NONE`) · `underline?: boolean`
- `lineHeight?: boolean = false`. ⚠ The default is `leading-none`. Pass `lineHeight` for readable multi-line text, which applies the size-tuned line height. `lineHeightLegacy` gives `leading-normal`.

### Actions
**`UiButton`** (`bonkers-ui/UiButton`) is polymorphic through `tag`, for example `<UiButton tag="a" href="/x">`. Native attrs of the tag are accepted.
- `kind?: EButtonTypes = PRIMARY_BRAND`: `{PRIMARY|SECONDARY|TERTIARY}_{BRAND|ACCENT|NEUTRAL|DESTRUCTIVE|INVERSE}`. PRIMARY is filled, SECONDARY is outlined, TERTIARY is a text link. INVERSE is for dark backgrounds.
- `size?: EButtonSizes = MEDIUM`: `XSMALL SMALL MEDIUM LARGE`
- `weight?: EButtonWeight = BOLD`: `DEFAULT BOLD`
- `fullWidth?: boolean = false` (otherwise `w-fit`) · `disabled?: boolean`
- It is a flex container with `gap-xs`, so put icons directly in `children`.

### Form controls
**`UiInputText`** (`bonkers-ui/UiInput`) is the full text field: title, subtitle, info slot, input and status message. It forwards `ref`.
- `id: string` (**required**) · `title?`, `subtitle?`, `infoComponent?: ReactNode` · `statusMessage?: string | ReactElement`
- `kind?: EInputKind`: `DEFAULT ERROR SUCCESS WARNING` (border and status colour) · `size?: EInputSize = MEDIUM`: `SMALL MEDIUM`
- `preIcon?`, `postIcon?: ReactNode` · plus native `<input>` attrs
- The same export also provides these building blocks: `UiInputBase` (bare input, same props minus the titles), `UiInputTitled` (title/subtitle wrapper, `children`), and `UiInputStatusMessage` (`kind?`, `size?: ETypographySizes = SM`; it animates in when `children` is non-empty).
- ⚠ There is **no `UiInput` export**. Use `UiInputText` or `UiInputBase`.

**`UiInputTextArea`** (`bonkers-ui/UiInputTextArea`): `id: string` (required), `kind?: EInputKind` (import from `bonkers-ui/UiInput`), `statusMessage?`, `preIcon?`, `postIcon?`, plus native `<textarea>` attrs. The default is `rows={3}`. Enter does not propagate, so it won't submit forms.

**`UiSelect`** (`bonkers-ui/UiSelect`) is a native `<select>`. Pass `<option>`s as `children`.
- `heading?: string` · `subLabel?: string` · `placeholder?: string` (rendered as a hidden, disabled `value=""` option) · `statusMessage?`
- `kind?: EInputKind` · `size?: ESelectSize = MD`: `SM MD` · `prefixIcon?`, `postfixIcon?: ReactNode` (the default postfix is a chevron)
- `value?` / `defaultValue?` · `onChange?(event)` · plus native `<select>` attrs. The component also keeps internal state, so both controlled and uncontrolled use work.

**`UiCheckbox`** (`bonkers-ui/UiCheckbox`): `children` is the label.
- `checked?` · `onChange?(checked: boolean)`, which passes a **boolean, not an event** · `value?`, `name?`, `disabled?`
- `size?: ECheckboxSize = MD`: `SM MD` · `justify?: EJustify = START` · `invertOrder?: boolean` (box after the label) · `align?: ECheckboxALign = CENTER` (`TOP CENTER BOTTOM`; vertical alignment of the box against multi-line labels; import from `bonkers-ui/components/UiCheckbox/_types.js`)

**`UiToggle`** (`bonkers-ui/UiToggle`) is a switch. `children` is the label.
- Controlled: `checked` or `value: boolean`. Uncontrolled: `defaultChecked`. `onChange?(checked: boolean)`.
- `disabled?` · `invertOrder?` · `justify?: EJustify = START` · full width by default

**`UiRadio`** (`bonkers-ui/UiRadio`) is a classic radio. `children` is the label.
- `name: string`, `value: string`, `onChange(value: string)` (**required**) · `checked?` · `disabled?` · `invertOrder?` · `justify?: EJustify`

**`UiPlainRadio`** (`bonkers-ui/UiPlainRadio`) is a card-style radio: a bordered box with a radio dot, the label, and an optional `subHeader?: string`.
- Same required props as `UiRadio` (`name`, `value`, `onChange(value)`) · `checked?` · `disabled?`

**`UiRadioFancy`** (`bonkers-ui/UiRadioFancy`) is a card radio with a round green icon bubble.
- `value: string`, `onChange(value)`, `children` (**required**) · `active?: boolean` (⚠ this is the checked state, not `checked`) · `icon?: IconProp` · `subHeader?` · `disabled?`
- `radioType?: ERadioTypes = DEFAULT`: `DEFAULT` (icon beside the text) or `COMPACT` (icon above the text)
- `name?: string`: pass the same `name` to every option in a group so arrow-key navigation works. Other native `<input>` attrs are forwarded.

**`UiInputRange`** (`bonkers-ui/UiInputRange`) is a slider. It is controlled only.
- `value: number`, `min`, `max`, `step: string | number`, `onChangeHandler(value: number)` (all **required**) · `disabled?`

**`UiTabs`** (`bonkers-ui/UiTabs`) is a pill-style segmented control.
- `tabs: string[]` · `tabsModel: string` (selected tab) · `onTabChange(tab)` · `name?: string` (radio group name; auto-generated if omitted)

### Feedback and status
**`UiAlert`** (`bonkers-ui/UiAlert`): `kind?: EAlertTypes = PRIMARY` (`PRIMARY SECONDARY ERROR WARNING`) · `icon?: IconProp` · `noBorder?: boolean` · `children`.

**`UiSnackbar`** (`bonkers-ui/UiSnackbar`) is a toast. You own the list/stack and its positioning.
- `id: string`, `title: ReactNode` (required) · `children?` (body) · `preIcon?`, `postIcon?` (for example a close button)
- `kind?`: `"secondary"` (default), `"default"` (white), `"primary"`, `"warning"`, `"error"` · `duration?` in ms: `5000`, `10000`, or `Infinity` (default; no progress bar) · `pauseOnHover? = true`
- ⚠ `onClickAction` is called **when the timer runs out**, so use it to start the dismissal. `isDismissed` + `onDismissAction(id)` fires on the element's `animationend`, so it only works if you apply an exit animation class when `isDismissed` is true.
- ⚠ `ESnackbarTypes` and `ESnackbarDuration` are not exported from the entry point. Import them from `bonkers-ui/components/UiSnackbar/_types.js`. Note that `duration` is enum-typed.

**`UiProgress`** (`bonkers-ui/UiProgress`): `min`, `max`, `current: number` · `progressText?: string` (shown below the bar).

**`UiSkeleton`** (`bonkers-ui/UiSkeleton`): `kind: ESkeletonKind` (`RESULT_CARD`, `RESULT_CARD_MOBILE`) is a loading placeholder for comparison result cards.

**`UiNavigationSteps`** + **`UiNavigationStep`** (`bonkers-ui/UiNavigationSteps`) is a multi-step progress bar for funnels.
```tsx
<UiNavigationSteps initialStepId={currentId} complete={false}>
  <UiNavigationStep id="details" name="Your details" onClick={() => go("details")} icon={<UiIcon name={faCheck} />} />
  <UiNavigationStep id="quote" name="Quote" subSteps={[{ id: "q1", name: "A" }, { id: "q2", name: "B" }]} />
</UiNavigationSteps>
```
- `initialStepId` is the **current** step (or sub-step) id. Change it to navigate. Earlier steps show as complete.
- Step `icon` is shown when the step is complete (for example a check). Only completed and active steps are clickable. Steps must be **direct children**, because the parent injects `order`, `isActive` and `isComplete`.

### Display
**`UiIcon`** (`bonkers-ui/UiIcon`) wraps `FontAwesomeIcon`: `name: IconProp` (required) · `size?: ESize` (sets `size-*`).

**`UiIconBadge`** (`bonkers-ui/UiIconBadge`) is a round coloured bubble around an icon (`children`).
- `size?: ESize.SM | MD | LG | XL = MD` · `kind?: EIconBadgeKind = PRIMARY`: `PRIMARY SECONDARY WARNING ERROR AI` · `colorType?: "colorful" (default) | "flat"`

**`UiNotificationBadge`** (`bonkers-ui/UiNotificationBadge`) is a counter dot. ⚠ It is `position: absolute`, so the parent needs `relative`.
- `children` (count) · `kind?` `"error"` (default, red) | `"primary"` · `size?` `"default"` | `"lg"` · `offset?` `"default"` (top-right), `"offset-top-left"`, `"offset-bottom-right"`, `"offset-bottom-left"`. These enums are not re-exported; import them from `bonkers-ui/components/UiNotificationBadge/_types.js`.

**`UiPills`** (`bonkers-ui/UiPills`) is a small label or tag.
- `kind?: EBadgeKind = PRIMARY`: `PRIMARY ERROR WARNING ACCENT PRIMARY_ALT SECONDARY ACCENT_ALT` · `size?: EBadgeSize = SMALL`: `SMALL MEDIUM LARGE`
- `icon?: IconProp` · `rounded?` (full pill) · `fullWidth?` · `justifyCenter?`

**`UiStars`** (`bonkers-ui/UiStars`) is a rating display. It supports fractions, for example `starsFilled={3.5}`.
- `starsFilled?: number = 0` · `count?: number = 5` · `size?: EStarsSize = MD`: `SM MD LG` · `color?: EColors = PRIMARY` · `showOutline? = true` · `name?: string` (⚠ must be unique per instance on the page, because it is used for SVG clip-path ids)

**`UiBerRank`** (`bonkers-ui/UiBerRank`) is the Irish BER energy-rating badge.
- `rank: number | "${number}"` (index into `dictionary`) · `dictionary: { text: string; color: string }[]` (`color` is a Tailwind text-colour class) · `size?: EBerSize = SMALL`: `SMALL MEDIUM`

**`UiProductCard`** (`bonkers-ui/UiProductCard`): `title?`, `subtitle?`, `header?: ReactNode` · `badgeText?: string` (yellow pill on the top-right corner).

**`UiList`** + **`UiListItem`** (`bonkers-ui/UiList`)
- `UiList`: `size?: EListItemSize = SM` (`XS SM MD`, text size) · `spacing?: EListItemSpacing = DEFAULT` (`DEFAULT COMPACT`) · vertical by default
- `UiListItem`: `children` · `prefix?: ReactNode` (bullet/icon, aligned to the first line) · `space?: EListItemSpacing`

**`UiTable`**, `UiTableRow`, `UiTableCell` (`bonkers-ui/UiTable`)
- `UiTable`: `kind?: ETableKind = SECONDARY_INVERTED` (`DEFAULT` = no stripes, `SECONDARY` = odd rows striped, `SECONDARY_INVERTED` = even rows striped) · `header?: ReactNode` (rendered in `<thead>`) · rows go in `children`
- `UiTableCell`: `align?: ETextAlign` · `weight?: ETextWeight` · `subText?: ReactNode` · `lineHeight?`. The first cell in a row is left-aligned and the last is right-aligned automatically.

**`UiAccordion`** (`bonkers-ui/UiAccordion`) is a compound component:
```tsx
<UiAccordion type={EAccordionType.SINGLE} defaultValue={["a"]} handleTrigger={(id) => {}}>
  <UiAccordionItem id="a">
    <UiAccordionItem.Trigger>{(isOpen) => <span>Title {isOpen ? "−" : "+"}</span>}</UiAccordionItem.Trigger>
    <UiAccordionItem.Content>Body</UiAccordionItem.Content>
  </UiAccordionItem>
</UiAccordion>
```
- `type?: EAccordionType = SINGLE` (`SINGLE` keeps only one open; `MULTI` allows many) · `defaultValue?: string[]` (ids open initially) · `Trigger` children can be a node or `(isOpen) => node`
- `UiAccordionInfoDropdown` is a ready-made "What's this?" disclosure: `title: string`, `children` (body), `id?`, `prefix?`/`postfix?: (isOpen) => ReactNode`.

---

## Part 3 — Composition patterns and pitfalls

- For a form field with a label and a validation message, use `UiInputText` with `kind={EInputKind.ERROR}` and `statusMessage="…"`. The same `kind` + `statusMessage` pair works on `UiSelect` and `UiInputTextArea`.
- For a link that looks like a button, use `<UiButton tag="a" href="…">`. With Next.js, use `<UiButton tag={Link} href="…">`.
- Callbacks differ between components. `UiCheckbox` and `UiToggle` call `onChange(boolean)`, `UiRadio`, `UiPlainRadio` and `UiRadioFancy` call `onChange(value: string)`, and `UiSelect` calls `onChange(event)`. `UiInputRange` uses `onChangeHandler(number)`.
- Put text in `UiTypography` rather than raw `<p className="text-sm">`. That keeps the size and line height consistent.
- Several enums are not re-exported from a component's entry point: `ESnackbarTypes`, `ESnackbarDuration`, `EBadgeOffset`, `EBadgeSizes`, `EBadgeTypes`, `EIconBadgeColorType`, `ECheckboxALign`, `EListItemDirection`. Deep-import them from `bonkers-ui/components/<Component>/_types.js`. If that fails to resolve, it's a library gap, so ask for it to be exported instead of working around it with casts.

---

## Part 4 — Developing bonkers-ui (this repo only)

### Commands (Bun)
```bash
bun run i        # install (frozen lockfile); plain `bun i` is bun's built-in install and skips --frozen-lockfile
bun dev          # Storybook → http://localhost:6006
bun run build    # tsc + vite build → dist/; plain `bun build` is bun's own bundler, not this script
bun lint         # eslint --fix src/**/*.{ts,tsx}
bun lint:style   # prettier --check src/**/*.{css,scss}
bun typecheck    # tsc -p tsconfig.app.json --noEmit (root tsconfig is solution-style and checks nothing on its own)
bun pack         # build + postbuild + npm pack into repo root (local testing)
```
Pre-commit (husky + lint-staged) runs eslint --fix and typecheck on staged TS, and prettier on staged CSS. There are no unit tests. Verify changes in Storybook.

### Build and publish
- Vite library mode, ES only. **Every `src/components/*/*.{ts,tsx}` and `src/_types/*.ts` file is its own entry** (not `preserveModules`). That gives per-component tree-shaking and lets `vite-plugin-lib-inject-css` attach each `*.module.css` to its component. `vite-plugin-dts` emits the types.
- Externals: react, react/jsx-runtime, tailwindcss, classnames, the FontAwesome core packages. If you add a new runtime dependency, add it to `rollupOptions.external` in `vite.config.ts` and to `peerDependencies`.
- `postbuild.ts` copies `package.json`, `bonkers.css`, `eslint.config.mjs`, `README.md`, `LICENCE` and `CLAUDE.md` into `dist/`. `dist/` is the published package root, which is why the `exports` paths in `package.json` have no `dist/` prefix.
- Merging to `master` makes CI run `publish.ts`: it reads the current npm version, bumps the patch version, and publishes (needs `NPM_AUTH_TOKEN`).
- **Keep this file current**: this file is published with the package and consuming projects rely on it. When you add or change a component, prop, enum or token, update Part 2 in the same PR.

### Adding a component
`src/components/UiThing/` contains:
- `UiThing.tsx`: the component; props type named `TUiThingProps` or `IUiThing`
- `_types.ts`: enums, prefixed `E…`
- `index.ts`: re-exports the component and **all** public enums/types
- `UiThing.module.css`: only if Tailwind can't express it
- `UiThing.stories.tsx`: Storybook

Then add `export * from "./components/UiThing";` to `src/index.ts`, and document the component in Part 2 above.

### Code conventions
- Variant styling uses **class maps keyed by enum**. See `typeClasses` and `sizeClasses` in `UiButton.tsx`. Merge classes with `cx()` (classnames). Add a stable `ui-<name>` class on the root element. Accept and merge `className` last.
- Polymorphism uses a `tag` prop (`UiButton` with `React.ElementType`, `UiTypography` with intrinsic elements).
- Use only theme tokens (see Part 1). Tailwind defaults are disabled. Tokens live in `bonkers.css` (`:root` values plus a `@theme` mapping). There is no `tailwind.config`.
- ESLint: tabs, double quotes, `max-len` 120 (strings exempt), spaces inside JSX braces (`{ value }`), multiline ternaries, one property per line in multi-property objects, no `!important` Tailwind classes, and one Tailwind class per line when a class string wraps (print width 140). `no-explicit-any` is only a warning.
- Components are client-side React (hooks and refs). Forward `ref` on input-like components (`React.forwardRef`), as `UiInputBase` does.

### Git
- **Claude: never create commits, branches, or pushes in this repo.** Leave all changes uncommitted in the working tree for the developer to review and commit themselves, even when a task seems to call for it.
- Base branch: `develop`. Branches: `feature/<name>` or `hotfix/<name>`, optionally prefixed with a ticket (`feature/E-0071-icon-badge-update`).
- Commits: `update(<file>): msg`, `fix(<file>): msg`, `add(<file>): msg`.
- Merge `develop` into the feature branch (don't rebase), open a PR to `develop`, review on the Storybook staging site (https://bonkers-ie.github.io/bonkers-ui), then open a PR from `develop` to `master` to release.
