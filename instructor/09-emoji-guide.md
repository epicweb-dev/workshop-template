# Emoji Character Guide

Epic Workshops use emoji characters to guide learners through exercises. Each emoji represents a specific role or type of guidance.

## Main Characters

### 🐨 Kody the Koala

**Role:** Primary instructor giving step-by-step instructions

**Use for:**
- Specific coding tasks
- Step-by-step directions
- "Do this" instructions

**Example:**
```mdx
🐨 Open <InlineFile file="src/counter.tsx" /> and add a useState hook to
track the count:

```tsx
const [count, setCount] = useState(0)
```
```

### 👨‍💼 Peter the Product Manager

**Role:** Provides context, requirements, and user perspective

**Use for:**
- Setting the scene
- Explaining requirements
- Giving user/business context
- Celebrating completion

**Example:**
```mdx
👨‍💼 Our users are complaining that the form doesn't validate their input.
They're submitting empty forms and getting confused about what went wrong.

We need to add validation to prevent this!
```

### 🦺 Lily the Life Jacket

**Role:** TypeScript-specific guidance and safety

**Use for:**
- Type definitions
- TypeScript-specific instructions
- Type safety explanations

**Example:**
```mdx
🦺 Create a type for the component props:

```ts
type ButtonProps = {
  label: string
  onClick: () => void
  disabled?: boolean
}
```
```

## Helper Characters

### 💰 Money Bag

**Role:** Provides hints and code snippets

**Use for:**
- Code hints that help but don't give away the answer
- Syntax reminders
- "Here's how to start" snippets

**Example:**
```mdx
🐨 Add an event handler to the button.

💰 Here's the syntax:
```tsx
<button onClick={() => setCount(count + 1)}>
```
```

### 📜 Scroll

**Role:** Links to documentation

**Use for:**
- MDN documentation links
- React documentation links
- Official API references

**Example:**
```mdx
🐨 Use the `useEffect` hook to fetch data when the component mounts.

📜 [useEffect Documentation](https://react.dev/reference/react/useEffect)
```

### 💣 Bomb

**Role:** Indicates code to remove or things that will break

**Use for:**
- Marking code that should be deleted
- Indicating temporary workarounds to remove
- Warning about destructive actions

**Example:**
```tsx
// @ts-expect-error 💣 Remove this comment when you add the type
function Calculator({ left, right }) {
```

### 🧝‍♂️ Elf (Optional Extra)

**Role:** Extra credit challenges

**Use for:**
- Bonus tasks
- Advanced explorations
- "If you want to go further" suggestions

**Example:**
```mdx
🧝‍♂️ Bonus: Try implementing the same feature using `useReducer` instead
of `useState` and compare the two approaches.
```

### 🦉 Owl (Wisdom)

**Role:** Deeper explanations and insights

**Use for:**
- "Why this works" explanations
- Deeper technical context
- Best practices reasoning

**Example:**
```mdx
🦉 You might wonder why we use a function updater `setCount(c => c + 1)`
instead of `setCount(count + 1)`. The function form ensures we always have
the latest value, even in closures that captured stale state.
```

### 💯 Hundred (Best Practice)

**Role:** Highlights best practices

**Use for:**
- Recommended patterns
- Production-ready approaches
- Industry standards

**Example:**
```mdx
💯 In production, always use `useCallback` for event handlers passed to
memoized children to prevent unnecessary re-renders.
```

## Usage in Code Comments

### Problem File Pattern

```tsx
// 🐨 [Primary instruction]
// 💰 [Hint code]
// 📜 [Documentation link]

function MyComponent() {
  // 🐨 Add state here
  // 💰 const [value, setValue] = useState('')
  
  // 🦺 Define a type for the form data
  
  return (
    <form>
      {/* 🐨 Add an input field here */}
    </form>
  )
}
```

### HTML Comment Pattern

For HTML files:

```html
<!-- 🐨 Add a div with id="root" here -->

<!-- 🐨 Create a script tag with type="module" -->
<!--    📜 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules -->

<!-- 🐨 Get the root element using document.getElementById -->
<!--    💰 const root = document.getElementById('root') -->
```

## Usage in README.mdx

### Introduction Pattern

```mdx
# Exercise Title

<EpicVideo url="..." />

👨‍💼 [Set the scene and requirements]

[Technical explanation]

[Code examples]
```

### Problem Pattern

```mdx
# Step Title

<EpicVideo url="..." />

👨‍💼 [Context and user need]

🐨 [Main instructions with file reference]

[Numbered steps if needed]

💰 [Helpful hints]

📜 [Documentation links]
```

### Solution Pattern

```mdx
# Step Title

<EpicVideo url="..." />

👨‍💼 [Brief confirmation of completion]

[Key insight or "why this works"]

[Transition to next step if applicable]
```

### Summary Pattern

```mdx
# Exercise Title

<EpicVideo url="..." />

👨‍💼 [Celebration and summary]

[Key takeaways]

[Connection to next exercise or overall learning]
```

## Character Personality Guidelines

### 🐨 Kody
- Direct and helpful
- Uses action verbs ("Open", "Add", "Create")
- Breaks tasks into clear steps

### 👨‍💼 Peter
- Friendly and encouraging
- Thinks about users and business needs
- Celebrates success ("Great job!", "Perfect!")

### 🦺 Lily
- Technical and precise
- Focused on type safety
- Explains TypeScript-specific concepts

## Common Mistakes

### ❌ Wrong Character Usage

```mdx
<!-- Don't use Kody for context -->
🐨 Our users are complaining about...

<!-- Don't use Peter for code instructions -->
👨‍💼 Add a useState hook here
```

### ✅ Correct Character Usage

```mdx
👨‍💼 Our users are complaining about slow form submissions.

🐨 Add a loading state to show feedback:
```

### ❌ Missing Hints

```mdx
🐨 Implement form validation.
```

### ✅ With Helpful Hints

```mdx
🐨 Add the `required` attribute to the email input.

💰 It should look like:
```html
<input type="email" required />
```

📜 [Form Validation on MDN](https://developer.mozilla.org/...)
```

## Emoji Quick Reference

| Emoji | Character | Purpose |
|-------|-----------|---------|
| 🐨 | Kody | Step-by-step instructions |
| 👨‍💼 | Peter | Context and requirements |
| 🦺 | Lily | TypeScript guidance |
| 💰 | Money Bag | Hints and code snippets |
| 📜 | Scroll | Documentation links |
| 💣 | Bomb | Code to remove |
| 🧝‍♂️ | Elf | Extra credit |
| 🦉 | Owl | Deep explanations |
| 💯 | Hundred | Best practices |
