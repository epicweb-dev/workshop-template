# Workshop template checklist (repo-level “definition of done”)

Use this as a final checklist when cloning `workshop-template/` and generating a new workshop.

## Required repo contents

- `README.md` includes:
  - prerequisites
  - setup instructions using `epicshop` (e.g. `npx --yes epicshop@latest add <repo>`)
  - how to start (`npm start`)
- root `package.json` includes:
  - `name` (repo name)
  - `private: true`
  - `epicshop.title` (required)
  - `epicshop.githubRoot` or `epicshop.githubRepo` (required)
  - scripts:
    - `start` (typically `npx --prefix ./epicshop epicshop start`)
    - `setup` (typically `node ./epicshop/setup.js`)
    - `lint`, `typecheck` (as applicable)
- `epicshop/` directory exists with its own `package.json` and `setup.js`
- `exercises/` directory exists with:
  - `README.mdx`
  - `FINISHED.mdx`
  - at least one exercise folder with at least one step pair

## Exercise completeness

For each exercise:

- `README.mdx` intro exists
- `FINISHED.mdx` outro exists
- each step has:
  - `NN.problem.*` with `README.mdx`
  - `NN.solution.*` with `README.mdx`
  - runnable app files

## Config hygiene

- `epicshop.subtitle` set (recommended)
- `epicshop.instructor` set (recommended)
- `epicshop.product.host` and `.slug` set for launched workshops (required for progress tracking)
- `epicshop.stackBlitzConfig` set or explicitly disabled (`null`) where unsupported
- `epicshop.testTab.enabled` set appropriately
- `epicshop.initialRoute` set if the app should load a non-`/` route

## Diff hygiene

- diffs between steps are readable and focused
- add `epicshop/.diffignore` only if learners would otherwise see noise

## CI baseline (recommended)

A typical `validate.yml`:

- checks out code (or uses `epicshop add <repo>` into a temp directory)
- runs `npm run typecheck`
- runs `npm run lint`
- (optionally) runs tests

## Deployment readiness (optional)

If deploying the workshop:

- set `EPICSHOP_DEPLOYED=true` in deployed env
- ensure `epicshop.githubRoot` points to the correct branch/path so file links work

