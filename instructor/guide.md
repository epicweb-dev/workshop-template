# Epic Workshop Creation Guide for Agents

This guide details how to create an Epic Workshop using the `epicshop` CLI and workshop format.

## Workshop Philosophy
Epic Workshops are:
- **Iterative:** Students build on previous knowledge.
- **Problem-based:** Students solve problems, they don't just read about them.
- **Linear (usually):** There is a clear path from start to finish.
- **Test-driven (often):** Tests verify the student's solution.

## Workshop Structure
A standard workshop has this directory structure:

```
workshop-name/
├── epicshop/           # Workshop tools and configuration
├── exercises/          # The core content
│   ├── 01.module/      # Modules group related exercises
│   │   ├── 01.problem.ex/ # Exercise: problem files
│   │   │   ├── index.ts   # The code to fix
│   │   │   ├── README.mdx # Instructions
│   │   └── 01.solution.ex/# Exercise: solution files
│   │       ├── index.ts   # The fixed code
│   │       ├── README.mdx # Explanation of solution
│   └── README.mdx      # Module introduction
├── README.md           # Workshop introduction
├── package.json        # Dependencies
└── tsconfig.json       # TypeScript config
```

## Creating Content

### 1. Modules and Exercises
Exercises are organized into modules.
- Format: `XX.module-name/` (e.g., `01.fundamentals/`)
- Inside modules: `XX.problem.name/` and `XX.solution.name/` (e.g., `01.problem.hello/`, `01.solution.hello/`)

### 2. The Exercise Flow
For each concept `X`:
1.  **Problem Directory (`problem`):**
    -   Contains broken code or "TODO" comments.
    -   `README.mdx`: Explains the concept, the task, and helpful resources. Uses the `<EpicVideo />` component if a video exists (agent can leave a placeholder).
    -   Uses emojis like 🐨 (Koala) for helpful tips and 👨‍💼 (Product Manager) for requirements.

2.  **Solution Directory (`solution`):**
    -   Contains the working code.
    -   `README.mdx`: Explains the solution.

### 3. README.mdx format
The `README.mdx` files use specific components:
-   `<EpicVideo url="..." />`: Embeds a video lesson.
-   `<callout-info>`, `<callout-success>`, `<callout-danger>`, `<callout-warning>`: For highlighted blocks.
-   `<InlineFile file="..." />`: Links to a file in the editor.
-   Code blocks with language tags.

### 4. Tests
Tests are crucial. They should be co-located with the exercise files or in a `test/` directory within the exercise.
-   Tests run in the background to validate student progress.
-   Filenames often match the code file (e.g., `index.test.ts`).

## The `epicshop` Tool
-   Used to scaffold and run the workshop.
-   `npx epicshop add workshop-template`: Scaffolds a new workshop.
-   Agents should simulate this structure or use the tool if available in the environment.

## Step-by-Step Creation Process for Agents

1.  **Scope & Research:**
    -   Define the learning objectives.
    -   Outline the modules and exercises.
    -   Gather necessary code snippets and libraries.

2.  **Scaffolding:**
    -   Create the directory structure.
    -   Set up `package.json` and dependencies.

3.  **Drafting Exercises (Iterative):**
    -   Start with the first concept.
    -   Create the `solution` first (working code).
    -   Create the `problem` by breaking the solution (remove code, add TODOs).
    -   Write the `README.mdx` for the problem (instructions) and solution (explanation).
    -   Write tests to verify the solution.

4.  **Review:**
    -   Ensure consistent naming.
    -   Check that instructions are clear.
    -   Verify that tests pass for the solution and fail for the problem.

## Emoji Guide
-   🐨 (Koala): Helpful tips, hints, "look here".
-   👨‍💼 (Product Manager): Requirements, "we need this feature".
-   💰 (Money Bag): Bonus content, "extra credit".
-   🦉 (Owl): Deep dive, "learn more".

## Validation
-   Use `read_lints` to check for errors.
-   Run tests to ensure validity.

