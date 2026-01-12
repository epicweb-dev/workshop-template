# Phase 6: Validation

**Goal:** Final testing and verification of the complete workshop.

**Reference:** For testing details, see `../07-testing-and-validation.md`
**Reference:** For ongoing verification, see `07-verification.md`

## Pre-Validation: Ensure Clean State

Before final validation, ensure all fixes have been applied:

```bash
# Auto-fix configs
node ./epicshop/fix.js

# Format all files
npm run format

# Fix lint issues
npm run lint -- --fix
```

## Step 6.1: Structural Validation

Verify the directory structure:

- [ ] All directories follow naming conventions (`XX.name`)
- [ ] All problem/solution pairs have matching numbers and names
- [ ] All README.mdx files exist
- [ ] All FINISHED.mdx files exist
- [ ] No missing or extra files

Use the MCP server to get an overview:

```
get_workshop_context(workshopDirectory: "/path/to/workshop")
```

## Step 6.2: Diff Validation

For each problem/solution pair, verify focused diffs:

```
get_diff_between_apps(
  workshopDirectory: "/path/to/workshop",
  app1: "01.01.problem",
  app2: "01.01.solution"
)
```

Check:
- [ ] Only intended changes appear
- [ ] No formatting differences
- [ ] No config file changes
- [ ] Diff is readable (< 30 lines ideal)

For linear exercises, also check step-to-step diffs:

```
get_diff_between_apps(
  app1: "01.01.solution",
  app2: "01.02.problem"
)
```

## Step 6.3: Code Validation

Run validation commands:

```bash
npm run typecheck
npm run lint
npm test  # if tests exist
```

For each step verify:
- [ ] Problem code runs without crashing
- [ ] Solution code runs without errors
- [ ] Tests pass (if tests exist)

## Step 6.4: Content Validation

For each README.mdx:

- [ ] Uses correct emoji characters
- [ ] Instructions are clear and complete
- [ ] Code examples are correct
- [ ] File references are valid

Use MCP to review content:

```
get_exercise_context(
  workshopDirectory: "/path/to/workshop",
  exerciseNumber: 1
)
```

## Step 6.5: Run the Workshop

Start the workshop app and walk through as a learner:

```bash
npm run dev
```

1. Navigate through all exercises
2. Attempt each problem WITHOUT looking at the solution
3. Use the diff tab to compare your work
4. Run tests if available
5. Verify everything functions correctly

This helps identify:
- Unclear instructions
- Missing context
- Difficulty spikes
- Broken code

## Final Checklist

### Structure
- [ ] All directories correctly named
- [ ] All required files present
- [ ] package.json properly configured

### Code
- [ ] All problem code runs
- [ ] All solution code runs
- [ ] All tests pass
- [ ] No TypeScript errors
- [ ] No linting errors

### Diffs
- [ ] All problem→solution diffs are focused
- [ ] All step→step diffs are minimal
- [ ] No formatting-only changes
- [ ] No config changes in diffs

### Content
- [ ] All READMEs written
- [ ] Emoji characters used correctly
- [ ] Instructions are clear
- [ ] Links work

### Experience
- [ ] Difficulty progresses smoothly
- [ ] Each step is completable in 15-30 min
- [ ] Workshop can be completed in target time

## Completion

Once validation passes, report to the instructor:

```
The workshop is complete and validated:

- [X] exercises with [Y] total steps
- All code runs without errors
- All tests pass
- All diffs are focused and minimal
- Walked through as a learner - everything works

Ready for review!
```

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Formatting in diffs | Run `npm run format` on all files |
| Config files in diffs | Run `node ./epicshop/fix.js` |
| Exercise too long | Split into multiple exercises or reduce steps |
| Diff too large | Break step into smaller steps |
| Instructions unclear | Add more guidance, hints, and examples |
| Code doesn't work | Test solution first, then create problem from it |
| Difficulty spike | Add intermediate step or move content later |
