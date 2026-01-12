# Agent brief template (copy/paste for instructors)

Use this prompt to instruct an agent to generate a complete Epic Workshop on a topic.

## Prompt

### Context

You are building an **Epic Workshop** repository using the Epic Workshop format.

You must:

- scope the topic appropriately for a workshop
- design a cohesive set of exercises with small deltas
- generate exercises/steps in the correct directory structure
- write all required `README.mdx`/`FINISHED.mdx` files
- add tests or other verification for each step
- validate by running through the workshop using the **Epic Workshop MCP server tools**

### Inputs

- **Topic**: <PUT TOPIC HERE>
- **Audience**: <BEGINNER | INTERMEDIATE | ADVANCED>
- **Timebox**: <e.g. 2 hours / 4 hours / 1 day>
- **Assumed prerequisites**:
  - <list>
- **Target outcomes** (3–7 bullets):
  - <list>
- **Preferred stack/runtime** (if any):
  - <e.g. React, Node, Remix, Cloudflare Workers, etc.>
- **Constraints**:
  - All filenames must be lower-kebab-case.
  - Keep problem→solution diffs small and focused.

### Repository starting point

Start from an existing template:

- clone/copy `workshop-template/` into a new repo directory
- update root `package.json#name` and `package.json#epicshop` metadata
- ensure `npm run setup` and `npm start` work

### Deliverables (must produce all)

1. **Workshop plan** (before writing code):
   - title + subtitle
   - outcomes
   - exercise list with step titles and acceptance criteria
   - app type per exercise (simple vs project)
   - tests plan per step
2. **Workshop implementation**:
   - correct `exercises/` structure
   - all MDX instructions written
   - problem/solution apps created for each step
   - tests (or verification) for each step
3. **Validation proof**:
   - demonstrate the workshop can be navigated using the Epic Workshop MCP tools:
     - `get_workshop_context`
     - `set_playground`
     - `get_exercise_step_context`
     - `open_exercise_step_files`
     - `get_exercise_step_progress_diff`
     - `get_what_is_next`
   - ensure at least one full exercise is completable end-to-end

### Working agreement (iteration)

Work in an iterative loop:

- implement **exercise 01 fully**, validate it, then proceed
- do not generate the entire workshop without intermediate validation
- when you discover missing prerequisites or scope issues, adjust the plan and continue

### Tone and instruction style

Write learner instructions that include:

- what to do
- why it matters
- where to work (use `<InlineFile />` when helpful)
- acceptance criteria
- at least one helpful tip or gotcha when appropriate

Now begin by producing the **Workshop plan** only.

