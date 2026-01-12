# Writing Effective Exercises

## The Problem-Solution Paradigm

Every step in an Epic Workshop consists of a problem and a solution. The problem presents incomplete code with clear instructions, and the solution shows the completed implementation.

## Creating Problem Files

### Structure of Problem Code

Problem code should include:

1. **Working starter code** - Enough context to understand the task
2. **TODO markers** - Emoji-marked comments guiding the learner
3. **Clear placeholders** - Where code needs to be added
4. **Helpful hints** - Tips and documentation links

### Example: Problem Code

```tsx
// 01.problem.props/index.tsx

import { createRoot } from 'react-dom/client'

const operations = {
  '+': (left: number, right: number): number => left + right,
  '-': (left: number, right: number): number => left - right,
}

// 🦺 Create a type called CalculatorProps with:
//    - left: number
//    - operator: string
//    - right: number

// 🦺 Add the type annotation to this props argument
// @ts-expect-error 💣 Remove this when you add the type
function Calculator({ left, operator, right }) {
  // 🐨 Use the operator to calculate the result
  // 💰 const result = operations[operator](left, right)
  
  return (
    <div>
      {/* 🐨 Display the result here */}
    </div>
  )
}

function App() {
  return <Calculator left={1} operator="+" right={2} />
}

createRoot(document.getElementById('root')!).render(<App />)
```

### TODO Comment Format

Use this pattern for instructions:

```javascript
// 🐨 [What to do]
// 💰 [Hint or code snippet]
// 📜 [Documentation link]
```

### Making Instructions Clear

**Good Instructions:**
```javascript
// 🐨 Create a useState hook to track the count
// 💰 const [count, setCount] = useState(0)
// 📜 https://react.dev/reference/react/useState
```

**Bad Instructions:**
```javascript
// 🐨 Add state
```

## Creating Solution Files

### Structure of Solution Code

Solution code should:

1. **Be complete and working** - No TODOs or placeholders
2. **Be minimal** - Only add what was asked
3. **Be clean** - Remove any development artifacts
4. **Include tests** (when appropriate)

### Example: Solution Code

```tsx
// 01.solution.props/index.tsx

import { createRoot } from 'react-dom/client'

const operations = {
  '+': (left: number, right: number): number => left + right,
  '-': (left: number, right: number): number => left - right,
}

type CalculatorProps = {
  left: number
  operator: string
  right: number
}

function Calculator({ left, operator, right }: CalculatorProps) {
  const result = operations[operator](left, right)
  
  return (
    <div>
      <output>{result}</output>
    </div>
  )
}

function App() {
  return <Calculator left={1} operator="+" right={2} />
}

createRoot(document.getElementById('root')!).render(<App />)
```

## The Diff Should Tell a Story

The difference between problem and solution should be:

1. **Focused** - Only changes related to the learning objective
2. **Readable** - Easy to understand at a glance
3. **Minimal** - Smallest possible change to complete the task
4. **Educational** - Demonstrates the concept clearly

### Good Diff Example

```diff
- // 🐨 Create a type called CalculatorProps
+ type CalculatorProps = {
+   left: number
+   operator: string  
+   right: number
+ }

- // @ts-expect-error 💣 Remove this when you add the type
- function Calculator({ left, operator, right }) {
+ function Calculator({ left, operator, right }: CalculatorProps) {
```

### Bad Diff Example (Too Many Changes)

```diff
- // lots of commented code
- // more commented code
+ import { useState, useEffect, useCallback } from 'react'
+ import { validateInput } from './utils'
+ import { logger } from './logger'
// 50 more lines of unrelated changes
```

## Writing README.mdx Files

### Exercise Introduction (exercises/XX.exercise-name/README.mdx)

Purpose: Explain the concept being taught

Structure:
```mdx
# Exercise Title

<EpicVideo url="https://..." />

[2-4 paragraphs explaining the concept]

[Code examples if helpful]

[Callouts for important points]

[What the learner will do in this exercise]
```

Example:
```mdx
# Form Validation

<EpicVideo url="https://www.epicweb.dev/workshops/..." />

HTML has built-in support for form validation. You can use attributes like
`required`, `minlength`, and `pattern` to validate inputs before submission.

```html
<input type="email" required maxlength="100" />
```

<callout-warning>
Client-side validation is for UX only. Always validate on the server!
</callout-warning>

In this exercise, you'll add validation to a note-editing form.
```

### Problem README (exercises/XX.exercise-name/XX.problem.step-name/README.mdx)

Purpose: Tell the learner exactly what to do

Structure:
```mdx
# Step Title

<EpicVideo url="https://..." />

👨‍💼 [Context from the product manager]

🐨 [Specific instructions]

[Additional guidance, links, tips]
```

Example:
```mdx
# Required Field Validation

<EpicVideo url="https://www.epicweb.dev/workshops/..." />

👨‍💼 Our users are submitting empty forms! We need to add validation
so that both the title and content fields are required.

🐨 Open <InlineFile file="app/routes/notes.edit.tsx" /> and add the
`required` attribute to both the title input and the content textarea.

Requirements:
- `title` is required, maximum length of 100
- `content` is required, maximum length of 10000

📜 [Form Validation on MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
```

### Solution README (exercises/XX.exercise-name/XX.solution.step-name/README.mdx)

Purpose: Briefly confirm what was done and transition forward

Structure:
```mdx
# Step Title

<EpicVideo url="https://..." />

👨‍💼 [Brief confirmation or insight]

[Optional: Transition to next concept]
```

Example:
```mdx
# Required Field Validation

<EpicVideo url="https://www.epicweb.dev/workshops/.../solution" />

👨‍💼 Great job! The form now validates that both fields have content
before submission.

But we can do even better. Let's look at server-side validation next.
```

### Exercise Summary (exercises/XX.exercise-name/FINISHED.mdx)

Purpose: Help learners reflect on what they learned

Structure:
```mdx
# Exercise Title

<EpicVideo url="https://..." />

👨‍💼 [Congratulations and summary]

[Key takeaways as bullet points or prose]

[Optional: What's next or how this connects to future learning]
```

### Workshop Summary (exercises/FINISHED.mdx)

Purpose: Celebrate completion and provide next steps

Structure:
```mdx
# Workshop Title

<EpicVideo url="https://..." />

[Celebration]

[Summary of journey]

[Call to action or next steps]
```

## Exercise Patterns

### Pattern: Concept Introduction

First step introduces a new concept simply:

```
01.problem.basic/         # Minimal example of the concept
02.problem.realistic/     # More realistic usage
03.problem.edge-cases/    # Handling edge cases
```

### Pattern: Building Features

Steps build on each other to create a feature:

```
01.problem.setup/         # Set up the foundation
02.problem.core/          # Implement core functionality
03.problem.polish/        # Add polish and error handling
```

### Pattern: Technique Variations

Steps show different approaches to the same problem:

```
01.problem.approach-a/    # First approach
02.problem.approach-b/    # Alternative approach
03.problem.when-to-use/   # Comparing approaches
```

### Pattern: Bug Fix

Present broken code and have learners fix it:

```
01.problem.identify/      # Identify the bug
02.problem.fix/           # Fix the bug
03.problem.prevent/       # Add tests/guards to prevent regression
```

## Quality Checklist

For each exercise step:

- [ ] Problem has clear, numbered TODO comments
- [ ] Each TODO uses appropriate emoji characters
- [ ] Problem code runs (even if incomplete)
- [ ] Solution is minimal (only required changes)
- [ ] Solution code runs and works correctly
- [ ] README.mdx explains what to do (problem) or what was done (solution)
- [ ] Diff between problem and solution is readable
- [ ] Tests exist and pass (if testing is part of the exercise)
- [ ] No console errors or warnings
- [ ] Code follows project conventions

## Common Mistakes

### 1. Too Many Changes Per Step
**Problem:** Diff is overwhelming
**Solution:** Break into multiple steps

### 2. Unclear Instructions
**Problem:** Learner doesn't know what to do
**Solution:** Be specific, use code hints

### 3. Non-Functional Problem Code
**Problem:** App crashes before learner can work
**Solution:** Ensure problem code runs

### 4. Solution Has Extra Changes
**Problem:** Diff includes unrelated improvements
**Solution:** Only change what's required

### 5. Missing Context
**Problem:** Learner doesn't understand why
**Solution:** Add context in exercise README
