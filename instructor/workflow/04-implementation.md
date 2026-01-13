# Phase 4: Implementation

**Goal:** Create the code for each exercise step efficiently with minimal diffs.

**Reference:** For exercise writing patterns, see `../04-writing-exercises.md`
**Reference:** For emoji usage in code, see `../09-emoji-guide.md`

## Key Principle: Copy and Modify

**Don't create exercise files from scratch.** Instead:

1. Copy the previous step's solution to the new problem
2. Modify only what's needed for the new learning objective
3. This ensures minimal, focused diffs

This approach:
- Saves tokens (no duplicating boilerplate)
- Ensures consistency between steps
- Keeps diffs focused on learning objectives
- Prevents accidental differences

## Step 4.1: Create First Exercise Step

For the **first step** of an exercise:

1. Create the solution with complete, working code
2. Copy solution to problem directory
3. Remove the parts learners need to implement
4. Add TODO comments with emoji markers

## Step 4.2: Create Subsequent Steps (Linear Exercises)

For **subsequent steps** in a linear exercise:

```
Previous solution → Copy → New problem → Modify → New solution
```

1. **Copy previous solution** to new problem directory
2. **Add new TODOs** for what learners will implement
3. **Copy new problem** to new solution directory
4. **Implement the solution** for this step's objective

### Example Flow

```
01.solution.basic/     →  copy to  →  02.problem.enhanced/
                                           ↓
                                      add TODOs
                                           ↓
02.problem.enhanced/   →  copy to  →  02.solution.enhanced/
                                           ↓
                                      implement solution
```

## Step 4.3: Run the Fix Script

After creating new directories, run:

```bash
node ./epicshop/fix.js
```

This automatically updates:
- `tsconfig.json` references
- `package.json` name properties

**Always run this** after creating exercise directories to ensure consistent configuration. This prevents config differences from appearing in diffs.

## Step 4.4: Format and Lint

Before verifying diffs, ensure consistent formatting:

```bash
npm run format
npm run lint -- --fix
```

This prevents formatting-only changes from cluttering diffs.

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

## Step 4.5: Verify the Diff

Use the epicshop MCP server to check diffs:

```
get_diff_between_apps(
  workshopDirectory: "/path/to/workshop",
  app1: "01.01.problem",
  app2: "01.01.solution"
)
```

Verify:
- [ ] Only intended changes appear
- [ ] No formatting-only changes
- [ ] Diff is readable (ideally < 30 lines)
- [ ] No config file changes

**See `07-verification.md` for detailed verification workflow.**

## Step 4.6: Add Tests (Optional)

If the exercise should have tests, add them to the solution directory:

```tsx
expect(
  myFunction,
  `🚨 Make sure you exported the function as a named export, not default`
).toBeDefined()
```

## Non-Linear Exercises

If exercises are **not linear** (each step is independent):

1. Create a base template with shared code
2. Copy the template to each problem/solution
3. Customize each step independently

This is less efficient but necessary when steps don't build on each other.

## Checkpoint

After implementing each exercise:

- [ ] Ran `node ./epicshop/fix.js`
- [ ] Ran `npm run format`
- [ ] Problem → Solution diff is focused
- [ ] Step → Step diff is minimal (for linear)
- [ ] All code runs without errors
- [ ] Tests pass (if applicable)

## Next Step

Once code is implemented and verified, proceed to: `05-content.md`

For detailed verification workflow, see: `07-verification.md`
