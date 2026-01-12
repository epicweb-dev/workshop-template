# Exercise authoring (steps, tests, and “set to playground”)

This guide is for producing workshop content that is **cohesive, iterative, and easy to validate**.

## Authoring loop (per exercise)

For exercise `NN.some-title`:

1. Write `exercises/NN.some-title/README.mdx` (intro).
2. Implement step 01:
   - create `01.problem.step-name/` app
   - create `01.solution.step-name/` app
   - write both `README.mdx` files
   - add tests (or another verification mechanism)
3. Repeat for steps 02..N.
4. Write `exercises/NN.some-title/FINISHED.mdx` (outro + reflection).
5. Validate the entire exercise in the workshop app (and via MCP tools).

## Step structure (problem vs solution)

### Problem directory responsibilities

The problem app should:

- include everything required to run
- contain a **focused gap** aligned to the step objective
- fail tests (or visibly be incorrect) in a way learners can fix

### Solution directory responsibilities

The solution app should:

- implement the objective cleanly
- pass tests
- avoid unrelated refactors (keep the diff small)

## Writing good step instructions (README.mdx)

### Problem README.mdx should include

- **Context**: why this change matters.
- **Task**: what to implement.
- **Constraints**: what not to do / what to preserve.
- **Acceptance criteria**: how learners know they’re done.
- **Where to work**: pointers using `<InlineFile />` when helpful.

### Solution README.mdx should include

- **What changed** (conceptually).
- **Why it works**.
- Optional: alternatives, tradeoffs, and “watch out for this next time.”

## Tests and verification

Use tests to give learners fast feedback.

The workshop app shows the test tab when:

- the app has a `test` script in `package.json`, OR
- there are `*.test.*` files in the app root (compiled and run in-browser)

### Simple app tests

For “simple” apps, prefer in-browser tests using:

- `@epic-web/workshop-utils/test` (exports `testStep`, `expect`, and `dtl`)

### Project app tests

For “project” apps, prefer:

- unit tests for pure logic
- e2e tests (e.g. Playwright) when the step objective is a user flow

## Diffs: keep them helpful

The diff tab is a core “unblocker.”

Best practices:

- keep steps small so the diff is readable
- avoid formatting-only changes
- avoid changing generated or irrelevant files
- consider `epicshop/.diffignore` if certain files always create noise

## Playground copy hooks (advanced)

If you need custom behavior before/after “Set to playground,” you can add:

- `epicshop/pre-set-playground.js`
- `epicshop/post-set-playground.js`

These can exist:

- at the workshop root, or
- inside an exercise directory (overrides the root hook)

They receive env vars like:

- `EPICSHOP_PLAYGROUND_SRC_DIR`
- `EPICSHOP_PLAYGROUND_DEST_DIR`
- `EPICSHOP_PLAYGROUND_WAS_RUNNING`
- `EPICSHOP_PLAYGROUND_IS_STILL_RUNNING` (post only)

Use this sparingly; hooks increase complexity.

