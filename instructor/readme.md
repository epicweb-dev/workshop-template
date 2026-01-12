# Epic Workshop Instructor Guide 📚

This directory contains documentation for creating Epic Workshops using AI agents.

## Quick Start for Agents

**To create a workshop, start here:**

```
Read /instructor/workflow/01-discovery.md and begin the discovery phase.
```

The workflow will guide you through each phase, referencing additional documentation as needed.

## Directory Structure

```
instructor/
├── workflow/                    # Step-by-step agent workflow
│   ├── readme.md               # Workflow overview
│   ├── 01-discovery.md         # Phase 1: Understand topic and scope
│   ├── 02-planning.md          # Phase 2: Design exercise structure
│   ├── 03-setup.md             # Phase 3: Configure workshop
│   ├── 04-implementation.md    # Phase 4: Create exercise code
│   ├── 05-content.md           # Phase 5: Write README.mdx files
│   └── 06-validation.md        # Phase 6: Test and verify
├── 01-workshop-overview.md     # Core concepts and terminology
├── 02-workshop-planning.md     # Planning best practices
├── 03-directory-structure.md   # File/folder organization
├── 04-writing-exercises.md     # Problem/solution creation
├── 05-mdx-and-content.md       # MDX formatting and components
├── 06-package-configuration.md # package.json options
├── 07-testing-and-validation.md # Testing exercises
├── 08-best-practices.md        # Patterns from successful workshops
└── 09-emoji-guide.md           # Character emoji reference
```

## How It Works

1. **Start with the workflow** - Begin at `workflow/01-discovery.md`
2. **Progress through phases** - Each phase references relevant docs
3. **Load context as needed** - Only read detailed docs when required
4. **Get checkpoints** - Confirm with instructor at key points

## Creating a Workshop

Tell an AI agent:

> "I want to create an Epic Workshop about [YOUR TOPIC]. Please read `/instructor/workflow/01-discovery.md` and help me build it."

The agent will:
1. Ask discovery questions about your topic
2. Design an exercise structure
3. Create the workshop files
4. Write all content
5. Validate everything works

## Reference Documentation

These files provide detailed information when needed:

| File | When to Reference |
|------|-------------------|
| `01-workshop-overview.md` | Understanding Epic Workshop concepts |
| `02-workshop-planning.md` | Designing exercise flow |
| `03-directory-structure.md` | Setting up files and folders |
| `04-writing-exercises.md` | Creating problem/solution pairs |
| `05-mdx-and-content.md` | Formatting MDX content |
| `06-package-configuration.md` | Configuring package.json |
| `07-testing-and-validation.md` | Adding and running tests |
| `08-best-practices.md` | Learning from successful workshops |
| `09-emoji-guide.md` | Using emoji characters correctly |

## Workshop Philosophy

Epic Workshops follow these principles:

1. **Learn by Doing** - Students write real code
2. **Incremental Progress** - Build knowledge step by step
3. **Immediate Feedback** - Problems and solutions side by side
4. **Real-World Context** - Exercises mirror actual tasks
5. **Self-Paced** - Works for live and async learning
