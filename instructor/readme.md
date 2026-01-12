# Epic Workshop Instructor Guide 📚

This directory contains comprehensive documentation for creating Epic Workshops using AI agents. Whether you're building a workshop on React, testing, MCP, or any other topic, these guides will help you create professional, engaging educational content.

## Quick Start for Agents

**If you're an AI agent helping to build a workshop, start here:**

1. Read `01-workshop-overview.md` to understand Epic Workshop concepts
2. Follow `02-workshop-planning.md` to scope and plan the workshop
3. Use `03-directory-structure.md` to set up the correct file structure
4. Reference `04-writing-exercises.md` for creating exercises
5. Apply `05-mdx-and-content.md` for proper MDX formatting
6. Configure using `06-package-configuration.md`
7. Validate with `07-testing-and-validation.md`

## Documentation Files

| File | Purpose |
|------|---------|
| `01-workshop-overview.md` | Core concepts, terminology, and Epic Workshop philosophy |
| `02-workshop-planning.md` | How to scope, research, and plan workshop content |
| `03-directory-structure.md` | File and folder organization requirements |
| `04-writing-exercises.md` | Creating effective problem/solution pairs |
| `05-mdx-and-content.md` | MDX formatting, components, and content guidelines |
| `06-package-configuration.md` | package.json configuration options |
| `07-testing-and-validation.md` | Testing exercises and validating workshops |
| `08-best-practices.md` | Patterns from successful workshops |
| `09-emoji-guide.md` | Character emoji guide for instructions |
| `10-agent-workflow.md` | Step-by-step workflow for AI agents |

## Creating a Workshop

To create a new workshop:

1. Clone this workshop-template repository
2. Open an AI agent (Claude, Cursor, etc.)
3. Provide the agent with this prompt:

```
I want to create an Epic Workshop about [YOUR TOPIC].

Please read the instructor documentation in the /instructor directory
and help me build out this workshop. Start by understanding the topic,
then propose an exercise structure, and finally implement the exercises
following the Epic Workshop format.
```

The agent will use these documentation files to guide the workshop creation process.

## Workshop Philosophy

Epic Workshops follow these core principles:

1. **Learn by Doing** - Students write real code, not just read about it
2. **Incremental Progress** - Build knowledge step by step
3. **Immediate Feedback** - Problems and solutions side by side
4. **Real-World Context** - Exercises mirror actual development tasks
5. **Self-Paced** - Works for both live workshops and async learning

## Support

- [Epic Workshop App Documentation](https://github.com/epicweb-dev/epicshop/tree/main/docs)
- [EpicWeb.dev](https://www.epicweb.dev)
- [EpicReact.dev](https://www.epicreact.dev)
