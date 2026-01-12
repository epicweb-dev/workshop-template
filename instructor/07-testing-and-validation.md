# Testing and Validation Guide

## Types of Testing in Epic Workshops

### 1. In-Browser Tests
Tests that run directly in the browser, testing the rendered UI.

### 2. Package Tests
Tests that run via `npm test`, typically using Vitest or Jest.

### 3. E2E Tests
End-to-end tests using Playwright that test the full application.

## In-Browser Tests

### When to Use
- Simple apps without a build system
- Testing rendered DOM
- Quick feedback for learners

### Setting Up

Create a test file in the exercise directory:

```typescript
// index.test.ts
import { testStep, expect, dtl } from '@epic-web/workshop-utils/test'

// Import your app code
import './index.tsx'

await testStep('Button should be rendered', async () => {
  const button = await dtl.screen.findByRole('button', { name: /click me/i })
  expect(button).toBeInTheDocument()
})

await testStep('Clicking button should increment count', async () => {
  const button = await dtl.screen.findByRole('button', { name: /click me/i })
  await dtl.userEvent.click(button)
  expect(button).toHaveTextContent('Count: 1')
})
```

### Test Utilities

The `@epic-web/workshop-utils/test` module provides:

| Export | Description |
|--------|-------------|
| `testStep` | Define a test step with name and async function |
| `expect` | Vitest expect with DOM matchers |
| `dtl` | @testing-library/dom utilities |
| `dtl.screen` | Screen queries |
| `dtl.userEvent` | User event simulation |

### Example: Testing a Counter

```typescript
import { testStep, expect, dtl } from '@epic-web/workshop-utils/test'
import './index.tsx'

await testStep('Counter starts at 0', async () => {
  const count = await dtl.screen.findByText(/count: 0/i)
  expect(count).toBeInTheDocument()
})

await testStep('Increment button increases count', async () => {
  const incrementBtn = await dtl.screen.findByRole('button', { name: /increment/i })
  await dtl.userEvent.click(incrementBtn)
  expect(await dtl.screen.findByText(/count: 1/i)).toBeInTheDocument()
})

await testStep('Decrement button decreases count', async () => {
  const decrementBtn = await dtl.screen.findByRole('button', { name: /decrement/i })
  await dtl.userEvent.click(decrementBtn)
  expect(await dtl.screen.findByText(/count: 0/i)).toBeInTheDocument()
})
```

## Package Tests (Vitest)

### When to Use
- Project apps with build systems
- Testing logic in isolation
- More complex test scenarios

### Setting Up

Add Vitest to the exercise:

```json
// package.json
{
  "scripts": {
    "test": "vitest"
  },
  "devDependencies": {
    "vitest": "^1.0.0"
  }
}
```

Create a test file:

```typescript
// my-function.test.ts
import { describe, it, expect } from 'vitest'
import { myFunction } from './my-function'

describe('myFunction', () => {
  it('should return expected value', () => {
    expect(myFunction('input')).toBe('expected output')
  })
})
```

### Vitest Configuration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom', // or 'node' for non-DOM tests
    globals: true,
  },
})
```

### Example: Testing a React Component

```typescript
// counter.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import { Counter } from './counter'

test('Counter increments when clicked', async () => {
  const user = userEvent.setup()
  render(<Counter />)
  
  const button = screen.getByRole('button', { name: /increment/i })
  expect(screen.getByText('Count: 0')).toBeInTheDocument()
  
  await user.click(button)
  expect(screen.getByText('Count: 1')).toBeInTheDocument()
})
```

## E2E Tests (Playwright)

### When to Use
- Testing full user flows
- Complex applications
- Integration testing

### Setting Up

Add Playwright to the epicshop directory:

```json
// epicshop/package.json
{
  "devDependencies": {
    "@playwright/test": "^1.40.0"
  }
}
```

Create test file:

```typescript
// epicshop/tests/exercise.spec.ts
import { test, expect } from '@playwright/test'

test('user can complete exercise', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading')).toContainText('Welcome')
})
```

### Playwright Configuration

```typescript
// epicshop/playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:5639',
  },
})
```

## Testing Best Practices

### 1. Test the Solution, Not the Problem

Tests should be in solution directories, not problem directories:

```
01.problem.feature/
└── index.tsx          # No tests

01.solution.feature/
├── index.tsx
└── index.test.ts      # Tests here
```

### 2. Test Behavior, Not Implementation

```typescript
// ✅ Good - tests behavior
test('form shows error when email is invalid', async () => {
  render(<Form />)
  await user.type(screen.getByLabelText('Email'), 'invalid')
  await user.click(screen.getByRole('button', { name: /submit/i }))
  expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
})

// ❌ Bad - tests implementation
test('useState is called with empty string', () => {
  // Don't test React internals
})
```

### 3. Use Accessible Queries

```typescript
// ✅ Preferred - uses accessible queries
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText('Email')
screen.getByText('Welcome')

// ❌ Avoid - brittle queries
document.querySelector('.submit-btn')
document.getElementById('email-input')
```

### 4. Make Tests Deterministic

```typescript
// ✅ Good - deterministic
const fixedDate = new Date('2024-01-15')
vi.setSystemTime(fixedDate)

// ❌ Bad - flaky
const now = new Date() // Changes every run
```

### 5. Keep Tests Fast

- Mock expensive operations
- Use minimal setup
- Run tests in parallel when possible

## Disabling Tests

### Disable for Entire Workshop

```json
// package.json
{
  "epicshop": {
    "testTab": {
      "enabled": false
    }
  }
}
```

### Disable for Specific Exercise

```json
// exercises/01.exercise/01.problem.step/package.json
{
  "epicshop": {
    "testTab": {
      "enabled": false
    }
  }
}
```

## Validating the Workshop

### Pre-Flight Checklist

Before sharing the workshop, verify:

#### Structure
- [ ] All directories follow naming conventions
- [ ] Every problem has a matching solution
- [ ] README.mdx files exist for all levels
- [ ] FINISHED.mdx files exist for all exercises

#### Code
- [ ] All problem code runs without errors
- [ ] All solution code runs without errors
- [ ] Diffs between problem/solution are reasonable
- [ ] No TODO comments remain in solutions

#### Tests
- [ ] All tests pass
- [ ] Tests verify the learning objective
- [ ] No flaky tests

#### Content
- [ ] Video URLs are valid (if applicable)
- [ ] Documentation links work
- [ ] Emoji markers are correct
- [ ] Instructions are clear and complete

### Validation Commands

```bash
# Start the workshop app
npm run dev

# Run linting
npm run lint

# Run type checking
npm run typecheck

# Run tests
npm test

# Run all validations
npm run validate:all
```

### Using the Epic Workshop MCP Server

If you have access to the Epic Workshop MCP server, you can use it to:

1. **List exercises**: Check workshop structure
2. **Get file contents**: Verify file content
3. **Run exercises**: Test that apps start correctly
4. **Run tests**: Verify tests pass

### Manual Validation

Walk through the workshop as a learner:

1. Start at the workshop introduction
2. Read each exercise introduction
3. Attempt each problem WITHOUT looking at the solution
4. Use the diff tab to compare your solution
5. Read each summary

This helps identify:
- Unclear instructions
- Missing context
- Difficulty spikes
- Broken code

## Common Issues

### Tests Fail in CI but Pass Locally

- Check for environment differences
- Ensure no hardcoded paths
- Mock system dependencies (date, random, etc.)

### Flaky Tests

- Use waitFor/findBy instead of getBy
- Increase timeouts for slow operations
- Mock network requests

### Tests Too Slow

- Mock expensive operations
- Use test.concurrent where possible
- Split large test files
