# Validation and quality (agent must prove it works)

This is the acceptance gate. A workshop is not “done” when files exist — it’s done when a learner can complete it.

## What must be validated

For every exercise and step:

- the workshop app can load instructions (no broken MDX)
- “Set to playground” works for problem and solution
- the dev server (if any) starts
- tests (if present) run and pass in the solution
- the problem is meaningfully incomplete (tests fail or behavior is wrong)
- diffs are helpful (small, focused, not noisy)

## Run locally via CLI (baseline)

Most Epic workshops ship scripts like:

- `npm run setup`
- `npm start` / `npm run dev` (usually delegates to `npx --prefix ./epicshop epicshop start`)

The agent should use these to sanity check:

- install succeeds
- workshop app boots
- at least one representative exercise step runs

## Validate “as a learner” using the Epic Workshop MCP server

Epic Workshops have an MCP server designed to help learners inside a workshop repo:

- package: `@epic-web/workshop-mcp`
- typical MCP server name: `epicshop`

### MCP server configuration (Cursor example)

```json
{
	"mcpServers": {
		"epicshop": {
			"command": "npx",
			"args": ["-y", "@epic-web/workshop-mcp@latest"]
		}
	}
}
```

### Critical requirement

Run your editor/assistant with the **workshop repo as the working directory**, so the MCP server can find:

- `package.json#epicshop`
- `exercises/**`
- `playground/`

## MCP tools the agent should use for validation

The MCP server exposes tools the agent can call to simulate a learner moving through the workshop:

- `login`: login to Epic (optional; enables progress tracking + transcripts if available)
- `logout`
- `get_workshop_context`: overview of workshop structure + top-level instructions
- `get_exercise_context`: context for a single exercise
- `get_exercise_step_context`: context for a single step (problem+solution instructions)
- `set_playground`: set playground to next step or a specific exercise/step/type
- `open_exercise_step_files`: open the important files for the current step in the editor
- `get_exercise_step_progress_diff`: diff between the user’s playground work and the solution
- `get_diff_between_apps`: diff between any two apps (by name/path)
- `view_video`: view an embedded Epic video URL (useful for launched workshops)
- `update_progress`: mark a lesson/step as complete (when using progress tracking)
- `get_user_info`, `get_user_access`, `get_user_progress`
- `get_what_is_next`: the best “driver” tool for linear navigation
- `get_quiz_instructions`: helper for using the quiz prompt flow

### Recommended validation workflow (agent)

1. Call `get_workshop_context` and verify the workshop outline matches the intended scope.
2. Call `set_playground` with no args repeatedly to ensure progression works.
3. For each step:
   - call `get_exercise_step_context` and verify instructions are present
   - call `open_exercise_step_files` and ensure file references exist
   - check `get_exercise_step_progress_diff` after making expected changes in `playground/`
4. Confirm that the diff is small and that acceptance criteria are achievable without “guesswork.”

## Quality checklists (what “good” means)

### Instruction quality

- Clear acceptance criteria
- Explicit “where to work”
- Explains *why* (not just *what*)
- Notes at least one common pitfall for tricky steps

### Step delta quality

- Problem → solution diff is focused
- No unrelated refactors
- No massive dependency churn between steps

### Test/feedback quality

- Learners have a reliable way to know they’re done
- Failures point to the right area (not cryptic)

