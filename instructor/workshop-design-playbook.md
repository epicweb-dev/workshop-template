# Workshop design playbook (scope → research → outline → steps)

This is the “front-loaded planning” section. If the planning is weak, the workshop will be incoherent even if the code is correct.

## The quality bar (what “great” looks like)

A great Epic Workshop:

- **Teaches one coherent set of skills** (not “everything about X”).
- Has a **linear progression** where each step builds directly on the previous one.
- Uses **tiny deltas** between problem → solution so the diff tab is helpful.
- Gives learners **fast feedback** (tests, visible UI behavior, or verifiable output).
- Includes **just enough scaffolding** so learners do the learning, not boilerplate.
- Provides **good instructions** (what/why/how, common pitfalls, and what “done” looks like).

## Step 0: Instructor inputs (what the agent needs from you)

Before any code generation, the agent must produce and get agreement on:

- **Audience**: beginner/intermediate/advanced; what they already know.
- **Prereqs**: minimum required knowledge + environment constraints.
- **Timebox**: total duration and desired # of exercises.
- **Core outcomes** (3–7 bullets): what learners can do at the end.
- **Capstone artifact**: what learners will have built by the end.
- **Non-goals**: explicitly what won’t be covered.

## Step 1: Scope the workshop into a “single project”

Pick a project that naturally forces the concepts:

- If you’re teaching **forms**: choose a form-heavy app with realistic constraints.
- If you’re teaching **performance**: choose a UI with measurable perf bottlenecks.
- If you’re teaching **MCP**: choose a server with a clear tool/resource surface.

Avoid “toy apps” unless the workshop is explicitly fundamentals-level.

## Step 2: Build a concept map and dependency chain

Write down:

- **Concepts** to teach
- **Dependencies** between them (“you must understand A before B”)
- **Common misconceptions** you want to flush out

Then order concepts by dependency, and cluster into exercises.

## Step 3: Design exercises (macro-structure)

Each exercise should have:

- **Title**: a user-centered capability, not an implementation detail.
- **Goal**: what the learner achieves.
- **Why**: why this matters in real projects.
- **New constraints**: what got harder compared to last exercise.

Recommended cadence:

- **5–10 exercises** for a medium workshop
- **2–6 steps** per exercise

## Step 4: Design steps (micro-structure)

Each step must be a small, testable delta.

For each step, define:

- **Problem state**: what is missing/broken.
- **Acceptance criteria**: objective “done” conditions.
- **Hints**: where to look + common gotchas.
- **Solution delta**: what changes from problem to solution.

### “Small delta” rule of thumb

If the diff between problem and solution feels like “a new feature,” split it into multiple steps.

## Step 5: Choose app type per exercise/step

- Use **simple apps** for:
  - early fundamentals
  - UI-only steps
  - minimal dependencies
- Use **project apps** for:
  - realistic full-stack flows
  - databases/auth
  - multi-file apps with routing/build tooling

## Step 6: Plan the instructor narrative and tone

Many Epic Workshops use a light narrative voice (“Product Manager explains user needs”) plus occasional “helper” characters.

This is optional, but helps with:

- motivation (“why”)
- pacing
- reducing dry instruction blocks

## Step 7: Produce the workshop outline artifact

Before generating code, the agent must output:

- Workshop title + subtitle
- 3–7 outcomes
- A numbered list of exercises, each with:
  - goal
  - list of steps (titles)
  - per-step acceptance criteria
  - app type (simple vs project)
  - tests plan (how learners verify)

This outline becomes the “contract” the agent implements.

## Step 8: Generate in an iterative loop

The agent should build:

1. **Exercise 01 fully** (including tests + README.mdx + FINISHED.mdx).
2. Validate it end-to-end.
3. Repeat for exercise 02, etc.

Do **not** generate the entire workshop in one pass without validation.

