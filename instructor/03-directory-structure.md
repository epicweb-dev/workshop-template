# Directory Structure Guide

## Overview

Epic Workshops have a precise directory structure that the workshop app expects. Following this structure exactly is critical for the workshop to function.

## Root Directory Structure

```
workshop-name/
├── .github/
│   └── workflows/
│       └── validate.yml        # CI validation workflow
├── exercises/                   # All exercises live here
│   ├── README.mdx              # Workshop introduction
│   ├── 01.exercise-name/       # First exercise
│   ├── 02.exercise-name/       # Second exercise
│   └── FINISHED.mdx            # Workshop wrap-up
├── examples/                    # Optional standalone examples
│   └── example-name/
├── epicshop/                    # Workshop app configuration
│   ├── package.json
│   ├── setup.js
│   └── setup-custom.js
├── playground/                  # Auto-generated playground
├── public/                      # Static assets
│   └── images/
│       └── instructor.png      # Instructor avatar
├── package.json                 # Root package.json with epicshop config
├── tsconfig.json               # TypeScript configuration
├── README.md                    # GitHub readme
└── LICENSE.md                   # License file
```

## Naming Conventions

### File Names
- Use **lower-kebab-case** for all file names
- Example: `my-component.tsx`, `user-service.ts`

### Exercise Directory Names
Format: `XX.exercise-name`

- `XX` is a zero-padded number (01, 02, 03...)
- `exercise-name` is lowercase with hyphens
- Examples:
  - `01.hello-world`
  - `02.raw-react`
  - `03.using-jsx`

### Step Directory Names
Format: `XX.type.step-name`

- `XX` is a zero-padded number matching within the exercise
- `type` is either `problem` or `solution`
- `step-name` is lowercase with hyphens
- Examples:
  - `01.problem.hello`
  - `01.solution.hello`
  - `02.problem.root`
  - `02.solution.root`

### Important Rules
- Problem and solution pairs MUST have matching numbers and names
- `01.problem.hello` must have `01.solution.hello`
- Numbers must be sequential (01, 02, 03... not 01, 03, 05)

## Exercise Directory Structure

### Simple App Exercise

For exercises without a separate dev server:

```
01.exercise-name/
├── README.mdx                    # Exercise introduction
├── 01.problem.step-name/
│   ├── README.mdx               # Problem instructions
│   ├── index.tsx                # Main code file (or index.html)
│   ├── index.css                # Optional styles
│   ├── api.server.ts            # Optional server-side code
│   └── tsconfig.json            # TypeScript config
├── 01.solution.step-name/
│   ├── README.mdx               # Solution explanation
│   ├── index.tsx                # Completed code
│   ├── index.css
│   ├── index.test.ts            # Optional tests
│   └── tsconfig.json
├── 02.problem.next-step/
│   └── ...
├── 02.solution.next-step/
│   └── ...
└── FINISHED.mdx                  # Exercise summary
```

### Project App Exercise

For exercises with their own dev server:

```
01.exercise-name/
├── README.mdx
├── 01.problem.step-name/
│   ├── README.mdx
│   ├── package.json             # Has "dev" script
│   ├── tsconfig.json
│   ├── vite.config.ts           # Or similar build config
│   ├── index.html
│   └── src/
│       ├── index.tsx
│       └── components/
│           └── my-component.tsx
├── 01.solution.step-name/
│   ├── README.mdx
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── index.html
│   ├── src/
│   │   └── ...
│   └── tests/
│       └── my.test.ts
└── FINISHED.mdx
```

### Full Application Exercise (Remix, etc.)

For complex full-stack exercises:

```
01.exercise-name/
├── README.mdx
├── 01.problem.step-name/
│   ├── README.mdx
│   ├── package.json
│   ├── tsconfig.json
│   ├── remix.config.js
│   ├── app/
│   │   ├── entry.client.tsx
│   │   ├── entry.server.tsx
│   │   ├── root.tsx
│   │   ├── routes/
│   │   │   └── index.tsx
│   │   ├── components/
│   │   │   └── ui/
│   │   │       └── button.tsx
│   │   └── utils/
│   │       └── db.server.ts
│   ├── public/
│   └── tests/
│       └── e2e/
│           └── smoke.test.ts
├── 01.solution.step-name/
│   └── [same structure with completed code]
└── FINISHED.mdx
```

## Examples Directory

Optional directory for standalone demonstrations:

```
examples/
├── example-name/
│   ├── README.mdx               # Example explanation
│   ├── index.tsx                # Simple app example
│   └── tsconfig.json
└── another-example/
    ├── README.mdx
    ├── package.json             # Project app example
    └── src/
        └── index.ts
```

## Public Directory

Static assets accessible at `/`:

```
public/
├── images/
│   └── instructor.png           # Required: instructor avatar (112x112px min)
├── favicon.ico                  # Optional: custom favicon
├── favicon.svg                  # Optional: SVG favicon
├── logo.svg                     # Optional: custom logo with theme support
└── og/
    ├── background.png           # Optional: OG image background
    └── logo.svg                 # Optional: OG image logo
```

## Epicshop Directory

Workshop app configuration:

```
epicshop/
├── package.json                 # Workshop app dependencies
├── package-lock.json
├── setup.js                     # Standard setup script
├── setup-custom.js              # Custom setup logic
├── tsconfig.json                # TypeScript config
└── [optional custom directories]
```

## Diff Ignore Files

Control what appears in diff comparisons:

### Root Level
```
epicshop/
└── .diffignore                  # Global diff ignores
```

### Exercise Level
```
exercises/
└── 01.exercise-name/
    └── epicshop/
        └── .diffignore          # Exercise-specific ignores
```

### .diffignore Syntax
```
# Ignore all README files
README.mdx

# Ignore specific directory
node_modules/

# Include something that would be ignored
!package.json
```

## Workspace Configuration

For workshops using npm workspaces:

```json
// package.json
{
  "workspaces": [
    "exercises/*/*",
    "examples/*"
  ]
}
```

This allows:
- Shared dependencies at root level
- Exercise-specific dependencies in exercise package.json
- Running commands across all exercises

## Common Patterns

### Pattern: Shared Code Across Steps

When multiple steps share code, each step still has complete copies:

```
01.exercise-name/
├── 01.problem.step-1/
│   ├── shared-util.ts           # Copy 1
│   └── index.tsx
├── 01.solution.step-1/
│   ├── shared-util.ts           # Copy 2 (identical)
│   └── index.tsx
├── 02.problem.step-2/
│   ├── shared-util.ts           # Copy 3 (identical)
│   └── index.tsx
└── 02.solution.step-2/
    ├── shared-util.ts           # Copy 4 (identical)
    └── index.tsx
```

### Pattern: Progressive Enhancement

Building on code from previous steps:

```
01.problem.basic/
└── component.tsx                # Basic implementation

02.problem.enhanced/
└── component.tsx                # Starts from 01.solution + TODOs

03.problem.complete/
└── component.tsx                # Starts from 02.solution + TODOs
```

### Pattern: Test Files

Tests typically only in solution directories:

```
01.problem.feature/
└── index.tsx                    # No tests

01.solution.feature/
├── index.tsx
└── index.test.ts                # Tests verify solution
```

## Validation Checklist

Before running the workshop, verify:

- [ ] All exercise directories have `README.mdx`
- [ ] All problem/solution pairs have matching names
- [ ] Numbers are sequential (no gaps)
- [ ] Each step has `README.mdx`
- [ ] `FINISHED.mdx` exists for each exercise and at exercises root
- [ ] `package.json` has valid `epicshop` configuration
- [ ] Instructor image exists at `public/images/instructor.png`
- [ ] All code files follow naming conventions
