# Epic Workshop Creation Workflow

This directory contains a step-by-step workflow for AI agents creating Epic Workshops. Each phase is in its own file to allow progressive context loading.

## Workflow Phases

Follow these phases in order:

| Phase | File | Purpose |
|-------|------|---------|
| 1 | `01-discovery.md` | Understand the topic and scope |
| 2 | `02-planning.md` | Design the exercise structure |
| 3 | `03-setup.md` | Configure the workshop |
| 4 | `04-implementation.md` | Create exercise code |
| 5 | `05-content.md` | Write README.mdx files |
| 6 | `06-validation.md` | Final testing and verification |

## Supporting Guides

| File | Purpose |
|------|---------|
| `07-verification.md` | Verify work as you go (diffs, MCP tools) |

## How to Use

1. Start with `01-discovery.md`
2. Complete each phase before moving to the next
3. Each file references the relevant documentation you need
4. **Use `07-verification.md` throughout** to verify diffs
5. Get instructor approval at key checkpoints

## Quick Start

Tell the agent:

> "I want to create an Epic Workshop about [TOPIC]. Please read `/instructor/workflow/01-discovery.md` and begin the discovery phase."

The agent will progressively load additional context as needed.

## Key Efficiency Tips

### Copy, Don't Create

For linear exercises, **copy the previous step and modify** rather than creating files from scratch. This:
- Saves tokens
- Ensures minimal diffs
- Prevents accidental differences

### Use the Fix Script

After creating directories, run:

```bash
node ./epicshop/fix.js
```

This auto-updates tsconfig and package.json files.

### Verify Diffs Early

Use `get_diff_between_apps` from the epicshop MCP server to check diffs after each step. Fix issues before moving on.

### Format Before Comparing

Always run formatting before checking diffs:

```bash
npm run format
npm run lint -- --fix
```
