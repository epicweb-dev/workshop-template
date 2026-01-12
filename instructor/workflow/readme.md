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
| 6 | `06-validation.md` | Test and verify |

## How to Use

1. Start with `01-discovery.md`
2. Complete each phase before moving to the next
3. Each file references the relevant documentation you need
4. Get instructor approval at key checkpoints

## Quick Start

Tell the agent:

> "I want to create an Epic Workshop about [TOPIC]. Please read `/instructor/workflow/01-discovery.md` and begin the discovery phase."

The agent will progressively load additional context as needed.
