# Verification Guide

**Goal:** Verify your work as you go to catch issues early and ensure minimal diffs between steps.

## Key Principle: Minimal Diffs

A core goal of Epic Workshops is **minimal, focused diffs** between problem and solution. Learners should see only the changes relevant to the learning objective—nothing extra.

## Helper Scripts

Always run these after creating/modifying exercises:

```bash
# Auto-fix tsconfig.json and package.json name properties
node ./epicshop/fix.js

# Format all files consistently
npm run format

# Fix lint issues
npm run lint -- --fix
```

Run these **before** checking diffs to prevent formatting/config noise.

## Using the epicshop MCP Server

The epicshop MCP server provides tools to verify your work. These are the most useful for workshop creation:

### `get_diff_between_apps`

**Primary verification tool.** Shows the git diff between any two apps.

```
App ID format: {exerciseNumber}.{stepNumber}.{type}
Examples: 01.01.problem, 01.01.solution, 02.03.problem
```

Use this to verify:
- Diff between problem and solution is focused
- Diff between consecutive steps is minimal
- No unintended changes crept in

**Example usage:**
```
get_diff_between_apps(
  workshopDirectory: "/path/to/workshop",
  app1: "01.02.problem",
  app2: "01.02.solution"
)
```

### `get_workshop_context`

Get an overview of all exercises and steps. Useful for verifying the structure matches your plan.

```
get_workshop_context(workshopDirectory: "/path/to/workshop")
```

### `get_exercise_context`

Get detailed context for a specific exercise including all step instructions. Verify your README content is complete.

```
get_exercise_context(
  workshopDirectory: "/path/to/workshop",
  exerciseNumber: 1
)
```

### `get_exercise_step_context`

Get instructions for a specific step. Useful for reviewing individual problem/solution content.

```
get_exercise_step_context(
  workshopDirectory: "/path/to/workshop",
  exerciseNumber: 1,
  stepNumber: 2
)
```

## Verification Checklist

After creating each exercise step:

### 1. Check the Problem → Solution Diff

```
get_diff_between_apps(app1: "XX.YY.problem", app2: "XX.YY.solution")
```

Verify:
- [ ] Only intended changes appear
- [ ] No formatting-only changes (run formatter first)
- [ ] No unrelated file changes
- [ ] Diff is readable (ideally < 30 lines of actual changes)

### 2. Check Step → Step Diff (for linear exercises)

```
get_diff_between_apps(app1: "XX.01.solution", app2: "XX.02.problem")
```

Verify:
- [ ] Minimal changes between steps
- [ ] Only new TODO comments and setup for next task
- [ ] Previous solution code is preserved

### 3. Run Formatting and Linting

Before checking diffs, ensure consistent formatting:

```bash
npm run format
npm run lint -- --fix
```

This prevents formatting differences from cluttering diffs.

### 4. Run the Fix Script

The `epicshop/fix.js` script auto-updates:
- `tsconfig.json` references
- `package.json` name properties

```bash
node ./epicshop/fix.js
```

Run this after creating new exercise directories to ensure consistent configuration.

### 5. Verify Code Runs

For each step:
- [ ] Problem code runs without crashing
- [ ] Solution code runs without errors
- [ ] Tests pass (if applicable)

```bash
npm run typecheck
npm run lint
npm test  # if tests exist
```

## Common Diff Problems

### Problem: Formatting differences in diff

**Cause:** Inconsistent formatting between problem and solution.

**Fix:** Run `npm run format` on both before comparing.

### Problem: Config file changes in diff

**Cause:** Different tsconfig or package.json settings.

**Fix:** Run `node ./epicshop/fix.js` to normalize configs.

### Problem: Too many files changed

**Cause:** Created files from scratch instead of copying.

**Fix:** Copy from previous step and modify only what's needed.

### Problem: Unrelated code changes

**Cause:** "Improving" code while creating the step.

**Fix:** Only change what the learning objective requires. Save improvements for a dedicated refactoring step if needed.

## Verification Workflow

For each exercise step:

1. **Create the step** (copy from previous, modify)
2. **Run fix script** (`node ./epicshop/fix.js`)
3. **Run formatter** (`npm run format`)
4. **Check diff** (`get_diff_between_apps`)
5. **Fix any issues** found in diff
6. **Verify code runs** (typecheck, lint, test)
7. **Move to next step**

## Using Diffs to Improve

If a diff is too large:

1. **Split the step** - Break into multiple smaller steps
2. **Move setup earlier** - Put boilerplate in a previous step
3. **Use Kellie** - Have "co-worker" do setup work that learners don't need to see

If a diff has unrelated changes:

1. **Revert unrelated changes** - Keep focus on the objective
2. **Create separate step** - If changes are valuable, make them their own step
3. **Check your source** - Make sure you copied from the right previous step
