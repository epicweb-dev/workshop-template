# Epic Workshop instructor docs

This directory is **for instructors** who want to use an agent to build an Epic Workshop on *any* topic.

The goal: you (the instructor) can clone `workshop-template/`, open an agent, and say:

> “I want to teach about X, build me the workshop for that.”

…and the agent will reliably:

- **scope** the workshop appropriately
- **research** the topic and choose a coherent project
- **design** a linear, iterative exercise flow (when reasonable)
- **author** exercises in the Epic Workshop format (MDX + problem/solution apps)
- **validate** by running the workshop and “taking” it using the Epic Workshop MCP server tools

## How to use these docs

1. Read `epic-workshop-anatomy.md` to understand the required repo structure.
2. Read `emoji-guide.md` if you want to match the “Epic Workshop cast” voice.
2. Use `workshop-design-playbook.md` to scope and outline the workshop.
3. Use `exercise-authoring.md` + `mdx-style-guide.md` while generating steps and instructions.
4. Give the agent `agent-brief-template.md` as its “contract”.
5. Use `validation-and-quality.md` to make the agent prove the workshop works end-to-end.

## Files in this directory

- `agent-brief-template.md`: copy/paste prompt an instructor gives to an agent to generate a new workshop on a topic.
- `emoji-guide.md`: canonical character/emoji mapping used in Epic Workshop narration.
- `epic-workshop-anatomy.md`: structure, naming, app types (simple vs project), and required files.
- `workshop-design-playbook.md`: how to scope, research, and design a cohesive exercise flow.
- `exercise-authoring.md`: how to write steps, problems/solutions, tests, and “set to playground” behavior.
- `mdx-style-guide.md`: Epic Workshop MDX conventions (callouts, code blocks, components, diffs).
- `validation-and-quality.md`: how the agent validates via the `@epic-web/workshop-mcp` tools + CLI.
- `workshop-template-checklist.md`: repo-level checklist (package.json config, scripts, CI, deployment readiness).

