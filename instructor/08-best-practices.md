# Best Practices from Successful Workshops

This guide captures patterns and practices from analyzing successful Epic Workshops including React Fundamentals, Mocking Techniques, Web Forms, React Performance, MCP Auth, and others.

## Exercise Design Patterns

### Pattern 1: Concept → Application → Edge Cases

The most successful exercises follow this progression:

```
01.problem.basic         # Introduce the concept simply
02.problem.realistic     # Apply to a real scenario
03.problem.edge-cases    # Handle edge cases
```

**Example from React Fundamentals - Error Boundaries:**
```
01.problem.composition       # Create an ErrorBoundary component
02.problem.show-boundary     # Display the error UI
03.problem.reset             # Add reset functionality
```

### Pattern 2: Build a Feature Incrementally

Each step adds one piece to a complete feature:

```
01.problem.setup         # Foundation
02.problem.core          # Main functionality
03.problem.polish        # Error handling, UX
```

**Example from Mocking Techniques - Network:**
```
01.problem.setup         # Set up MSW
02.problem.handlers      # Add request handlers
03.problem.error         # Mock error responses
04.problem.network-error # Mock network failures
05.problem.timing        # Control response timing
```

### Pattern 3: Before and After

Show the "wrong" way, then the "right" way:

```
01.problem.naive         # Initial approach
02.problem.problems      # Show issues with naive approach
03.problem.better        # Introduce better approach
```

## Code Patterns

### Minimal Problem Code

Problem code should be minimal but functional:

```tsx
// ✅ Good - minimal, clear where to add code
function Counter() {
  // 🐨 Add useState hook here
  
  return (
    <button onClick={() => {/* 🐨 increment count */}}>
      Count: {/* 🐨 display count */}
    </button>
  )
}
```

```tsx
// ❌ Bad - too much noise, unclear what to change
function Counter() {
  const [count, setCount] = useState(0) // Is this done?
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  // ... 50 more lines
}
```

### Progressive Enhancement of Code

Each step should add to the previous solution:

```tsx
// Step 1 Problem: Basic counter
function Counter() {
  // 🐨 Add useState
  return <button>Count: 0</button>
}

// Step 1 Solution → Step 2 Problem: Add increment
function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => {/* 🐨 Add increment */}}>Count: {count}</button>
}

// Step 2 Solution → Step 3 Problem: Add decrement
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <span>Count: {count}</span>
      {/* 🐨 Add increment button */}
    </div>
  )
}
```

### Realistic File Organization

Use file structures that mirror real projects:

```
# ✅ Good - realistic structure
app/
├── components/
│   └── counter.tsx
├── hooks/
│   └── use-counter.ts
└── routes/
    └── index.tsx

# ❌ Bad - everything in one file
index.tsx  # 500 lines of code
```

## Content Patterns

### Exercise Introductions

Strong introductions have:

1. **Hook** - Why this matters
2. **Context** - Background information
3. **Example** - Code showing the concept
4. **Preview** - What learner will do

```mdx
# Code Splitting

Modern apps can grow large, causing slow initial loads. Code splitting lets you
load code only when needed.

```tsx
// Instead of importing everything upfront...
import { HugeComponent } from './huge-component'

// You can load on demand
const HugeComponent = lazy(() => import('./huge-component'))
```

In this exercise, you'll add code splitting to a globe component that's slowing
down the initial page load.
```

### Problem Instructions

Effective instructions:

1. **Set the scene** (👨‍💼)
2. **Give specific tasks** (🐨)
3. **Provide hints** (💰)
4. **Link documentation** (📜)

```mdx
👨‍💼 Users are complaining that the page loads slowly because we're loading
a heavy globe component that most users never see.

🐨 Open <InlineFile file="src/app.tsx" /> and:

1. Import `lazy` from React
2. Replace the direct import of `Globe` with a lazy import
3. Wrap the `Globe` usage in a `Suspense` boundary

💰 Here's the lazy import syntax:
```tsx
const Globe = lazy(() => import('./globe'))
```

📜 [React lazy documentation](https://react.dev/reference/react/lazy)
```

### Solution Explanations

Keep solutions brief but insightful:

```mdx
👨‍💼 Perfect! Now the Globe component only loads when the user navigates to
that section. The initial bundle is 200KB smaller.

Notice how `Suspense` handles the loading state automatically. Without it,
React would throw an error when the lazy component isn't ready yet.
```

## Difficulty Progression

### Within an Exercise

Each step should be slightly harder:

| Step | Complexity | Time |
|------|------------|------|
| 01 | Simple | 5-10 min |
| 02 | Medium | 10-15 min |
| 03 | Challenging | 15-20 min |
| 04+ | Advanced | 15-25 min |

### Across Exercises

Exercises should build in complexity:

| Exercise | Focus |
|----------|-------|
| 01-02 | Fundamentals, simple concepts |
| 03-05 | Core skills, realistic scenarios |
| 06-08 | Advanced patterns, edge cases |
| 09-10 | Complex integrations, real-world challenges |

## Common Anti-Patterns

### 1. Kitchen Sink Exercise

**Problem:** Exercise tries to teach too many concepts.

**Solution:** Split into multiple exercises, each focused on one concept.

### 2. Magic Code

**Problem:** Code appears without explanation.

**Solution:** Every new concept should be introduced in the exercise README.

### 3. Overwhelming Diff

**Problem:** Diff between problem and solution is 100+ lines.

**Solution:** Break into smaller steps; each step should have a <30 line diff.

### 4. Abandoned Learner

**Problem:** Instructions say "implement X" without guidance.

**Solution:** Provide specific steps, hints, and documentation links.

### 5. Copy-Paste Solution

**Problem:** Learner can copy-paste without understanding.

**Solution:** Add "why" explanations; require adaptation, not just copying.

### 6. Dead-End Errors

**Problem:** Learner gets stuck with unhelpful error messages.

**Solution:** Test problem code runs; provide troubleshooting hints.

## Quality Markers

### High-Quality Exercises Have:

- [ ] Clear learning objectives stated upfront
- [ ] Realistic, relatable context
- [ ] Appropriate difficulty for position in workshop
- [ ] Specific, actionable instructions
- [ ] Helpful hints without giving away solutions
- [ ] Clean, readable diffs
- [ ] Tests that verify the learning objective
- [ ] Summaries that reinforce key learnings

### High-Quality Workshops Have:

- [ ] Logical exercise order with clear progression
- [ ] Consistent difficulty curve (no sudden spikes)
- [ ] Balance of theory and practice
- [ ] Real-world applicability
- [ ] Appropriate length (not too long, not too short)
- [ ] Engaging, conversational tone
- [ ] Complete coverage of stated objectives

## Learner Experience Tips

### 1. Respect Time

- Don't add unnecessary complexity
- Provide "fast path" for experienced learners
- Mark optional/bonus content clearly

### 2. Build Confidence

- Start with wins (easy first steps)
- Celebrate progress in summaries
- Provide escape hatches (hints, solutions)

### 3. Provide Context

- Explain "why" not just "what"
- Connect to real-world scenarios
- Reference prior exercises

### 4. Support Different Learning Styles

- Written instructions for readers
- Video content for watchers
- Hands-on coding for doers
- Tests for verifiers

### 5. Handle Failure Gracefully

- Problem code should never crash
- Error messages should be helpful
- Diff tab provides ultimate escape hatch
