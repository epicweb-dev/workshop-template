# Epic Workshop Overview

## What is an Epic Workshop?

An Epic Workshop is a hands-on, interactive learning experience where students learn by writing code. The Epic Workshop App provides the infrastructure to run these workshops locally, presenting exercises with problems to solve and solutions to compare against.

## Core Terminology

Understanding these terms is essential:

### Workshop
The entire learning experience. A workshop has a title, subtitle, and contains multiple exercises. Example: "React Fundamentals" or "Mocking Techniques in Vitest"

### Exercise
A major learning topic within a workshop. Each exercise has:
- An introduction (`README.mdx`) explaining the concept
- Multiple steps (problem/solution pairs)
- A summary (`FINISHED.mdx`)

Example exercises: "Hello World in JS", "Functions", "Form Validation"

### Step
A focused, atomic task within an exercise. Each step has:
- A **Problem**: The starting state where students implement something
- A **Solution**: The expected final state students should arrive at

### Problem
The initial code state. Contains:
- Starter code with TODO comments and emoji markers
- A `README.mdx` with instructions
- All necessary configuration files

### Solution
The completed code state. Contains:
- Fully implemented code
- A `README.mdx` explaining the solution
- Often includes tests to verify the solution

### Playground
A sandbox area where learners can experiment. When they click "Set to Playground" in the UI, the app copies the contents of any exercise step to the playground.

### Example
Standalone, runnable code samples in the `examples/` directory that demonstrate concepts without being exercises.

## Workshop Structure Hierarchy

```
Workshop
├── exercises/
│   ├── README.mdx (Workshop Intro)
│   ├── 01.exercise-name/
│   │   ├── README.mdx (Exercise Intro)
│   │   ├── 01.problem.step-name/
│   │   │   ├── README.mdx (Problem Instructions)
│   │   │   └── [code files]
│   │   ├── 01.solution.step-name/
│   │   │   ├── README.mdx (Solution Explanation)
│   │   │   └── [code files]
│   │   ├── 02.problem.next-step/
│   │   ├── 02.solution.next-step/
│   │   └── FINISHED.mdx (Exercise Summary)
│   ├── 02.next-exercise/
│   └── FINISHED.mdx (Workshop Wrap-up)
├── examples/
├── playground/
└── package.json
```

## App Types

Epic Workshops support two types of apps:

### Simple Apps
No `package.json` with a `dev` script. The workshop app serves files directly.

**Use for:**
- HTML/CSS/JS exercises
- Single-file React exercises
- Quick demonstrations

**Files:**
- `index.tsx` or `index.html` (required)
- `index.css` (optional, auto-included)
- `api.server.ts` (optional, for server-side logic)

### Project Apps
Has a `package.json` with a `dev` script. Runs as a separate server.

**Use for:**
- Full applications (Remix, Vite, etc.)
- Exercises requiring build tools
- Complex multi-file projects

**Requirements:**
- `package.json` with `"scripts": { "dev": "..." }`
- Dev server must use the `PORT` environment variable

## Learning Flow

The typical learner experience:

1. **Read the Exercise Intro** - Understand the concept being taught
2. **Read the Problem Instructions** - Understand what to implement
3. **Implement the Solution** - Write code in the problem directory
4. **Compare with Solution** - Use the diff tab to see differences
5. **Run Tests** (if available) - Verify the implementation
6. **Read the Summary** - Reflect on what was learned
7. **Move to Next Step** - Continue the learning journey

## Key Design Principles

### 1. Incremental Complexity
Start with the simplest possible example and build complexity gradually. Each step should introduce ONE new concept.

### 2. Problem-Solution Pairs
Every problem must have a corresponding solution. The solution should be the minimal change needed from the problem to complete the task.

### 3. Clear Instructions
Use emoji characters to guide learners:
- 🐨 Kody the Koala - Step-by-step instructions
- 👨‍💼 Peter the Product Manager - Context and requirements
- 🦺 Lily the Life Jacket - TypeScript-specific guidance
- And more (see emoji guide)

### 4. Real-World Relevance
Exercises should mirror actual development tasks. Use realistic examples, not contrived scenarios.

### 5. Self-Contained Steps
Each step should be completable independently. Don't require knowledge from later steps to complete earlier ones.

## What Makes a Great Workshop

Based on analysis of successful Epic Workshops:

1. **Clear Learning Objectives** - Each exercise has a specific goal
2. **Appropriate Scope** - 6-10 exercises, 2-6 steps per exercise
3. **Consistent Difficulty Progression** - Gets harder gradually
4. **Rich Context** - Explains "why" not just "what"
5. **Quality Code** - Production-grade patterns and practices
6. **Helpful Diffs** - Problem and solution differ meaningfully but not overwhelmingly
7. **Engaging Content** - Uses emoji characters, videos, and callouts effectively
