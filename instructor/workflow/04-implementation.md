# Phase 4: Implementation

**Goal:** Create the code for each exercise step (solution first, then problem).

**Reference:** For exercise writing patterns, see `../04-writing-exercises.md`
**Reference:** For emoji usage in code, see `../09-emoji-guide.md`

## Step 4.1: Create Solution Code First

For each step, write the complete solution first:

1. Implement the complete, working code
2. Make sure it runs without errors
3. Write tests if appropriate
4. Ensure code follows best practices

## Step 4.2: Create Problem Code from Solution

Work backwards from the solution:

1. Copy the solution code to the problem directory
2. Remove the parts learners need to implement
3. Add TODO comments with emoji markers
4. Add helpful hints and documentation links
5. Verify the problem code still runs (even if incomplete)

## Emoji Markers for Problem Code

Use these emoji characters in TODO comments:

| Emoji | Character | Purpose |
|-------|-----------|---------|
| 🐨 | Kody | Specific instruction - what to do |
| 💰 | Marty | Hint or code snippet |
| 📜 | Dominic | Link to documentation |
| 🦺 | Lily | TypeScript-specific guidance |
| 💣 | Barry | Code to remove |

### Problem Code Template

```tsx
// 🐨 [What to do]
// 💰 [Hint showing how]
// 📜 [Link to documentation]

function MyComponent() {
  // 🐨 Add useState hook here
  // 💰 const [state, setState] = useState(initialValue)

  // 🦺 Add type annotation
  // @ts-expect-error 💣 Remove when typed

  return (
    <div>
      {/* 🐨 Render the state here */}
    </div>
  )
}
```

## Step 4.3: Verify the Diff

Check that the diff between problem and solution:

- [ ] Shows only the intended changes
- [ ] Is readable (ideally under 30 lines)
- [ ] Clearly demonstrates the concept
- [ ] Doesn't include unrelated changes

## Step 4.4: Add Tests (Optional)

If the exercise should have tests:

1. Add test files to the solution directory
2. Tests should verify the learning objective
3. Use the `🚨` (Alfred) emoji in test failure messages:

```tsx
expect(
  myFunction,
  `🚨 Make sure you exported the function as a named export, not default`
).toBeDefined()
```

## Checkpoint

After implementing each exercise:

- [ ] All solution code runs without errors
- [ ] All problem code runs (even if incomplete)
- [ ] Diffs are focused and readable
- [ ] Tests pass (if applicable)

## Next Step

Once code is implemented, proceed to: `05-content.md`
