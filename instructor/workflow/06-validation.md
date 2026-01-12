# Phase 6: Validation

**Goal:** Test and verify the workshop works correctly.

**Reference:** For testing details, see `../07-testing-and-validation.md`

## Step 6.1: Structural Validation

Verify the directory structure:

- [ ] All directories follow naming conventions (`XX.name`)
- [ ] All problem/solution pairs have matching numbers and names
- [ ] All README.mdx files exist
- [ ] All FINISHED.mdx files exist
- [ ] No missing or extra files

## Step 6.2: Code Validation

For each step:

- [ ] Problem code runs without crashing
- [ ] Solution code runs without errors
- [ ] Tests pass (if tests exist)
- [ ] No TypeScript errors
- [ ] No linting errors

Run validation commands:

```bash
npm run typecheck
npm run lint
npm test
```

## Step 6.3: Content Validation

For each README.mdx:

- [ ] Uses correct emoji characters
- [ ] Instructions are clear and complete
- [ ] Code examples are correct
- [ ] All links work

## Step 6.4: Diff Validation

For each problem/solution pair:

- [ ] Diff is focused and readable
- [ ] Only intended changes appear
- [ ] Diff clearly demonstrates the learning objective
- [ ] No overwhelming number of changes

## Step 6.5: Run the Workshop

Start the workshop app and walk through as a learner:

```bash
npm run dev
```

1. Navigate through all exercises
2. Attempt each problem WITHOUT looking at the solution first
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
- Walked through as a learner - everything works

Ready for review!
```

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Exercise too long | Split into multiple exercises or reduce steps |
| Diff too large | Break step into smaller steps |
| Instructions unclear | Add more guidance, hints, and examples |
| Code doesn't work | Test solution first, then create problem from it |
| Difficulty spike | Add intermediate step or move content later |
