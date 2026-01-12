# Emoji Character Guide

Epic Workshops use emoji characters to guide learners through exercises. Each emoji represents a specific role or type of guidance.

## Main Characters

### 👨‍💼 Peter the Product Manager

**Role:** Helps us know what our users want

**Use for:**
- Setting the scene and context
- Explaining requirements and user needs
- Giving business perspective
- Celebrating completion

**Example:**
```mdx
👨‍💼 Our users are complaining that the form doesn't validate their input.
They're submitting empty forms and getting confused about what went wrong.

We need to add validation to prevent this!
```

### 🐨 Kody the Koala

**Role:** Tells you when there's something specific you should do

**Use for:**
- Specific coding tasks
- Step-by-step directions
- Direct "do this" instructions

**Example:**
```mdx
🐨 Open <InlineFile file="src/counter.tsx" /> and add a useState hook to
track the count:

```tsx
const [count, setCount] = useState(0)
```
```

### 🧝‍♀️ Kellie the Co-worker

**Role:** Your co-worker who sometimes does work ahead of your exercises

**Use for:**
- Explaining code that's already written
- Setting up context for what's been done
- Describing existing functionality

**Example:**
```mdx
🧝‍♀️ I've already set up the basic component structure and installed the
dependencies you'll need. You just need to add the state management logic.
```

### 🦺 Lily the Life Jacket

**Role:** Helps you with any TypeScript-specific parts of the exercises

**Use for:**
- Type definitions
- TypeScript-specific instructions
- Type safety explanations
- Generic types and advanced TypeScript

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

### 💰 Marty the Money Bag

**Role:** Gives you specific tips (and sometimes code) along the way

**Use for:**
- Code hints that help but don't give away the answer
- Syntax reminders
- "Here's how to start" snippets
- Useful tips

**Example:**
```mdx
🐨 Add an event handler to the button.

💰 Here's the syntax:
```tsx
<button onClick={() => setCount(count + 1)}>
```
```

### 📜 Dominic the Document

**Role:** Gives you links to useful documentation

**Use for:**
- MDN documentation links
- React documentation links
- Official API references
- External learning resources

**Example:**
```mdx
🐨 Use the `useEffect` hook to fetch data when the component mounts.

📜 [useEffect Documentation](https://react.dev/reference/react/useEffect)
```

### 📝 Nancy the Notepad

**Role:** Encourages you to take notes on what you're learning

**Use for:**
- Prompting reflection
- Highlighting key concepts to remember
- Encouraging active learning

**Example:**
```mdx
📝 Take a moment to note down the difference between `useEffect` and
`useLayoutEffect`. When would you use each one?
```

### 🦉 Olivia the Owl

**Role:** Gives you useful tidbits and best practice notes

**Use for:**
- Best practices
- "Why this works" explanations
- Deeper technical insights
- Industry wisdom

**Example:**
```mdx
🦉 You might wonder why we use a function updater `setCount(c => c + 1)`
instead of `setCount(count + 1)`. The function form ensures we always have
the latest value, even in closures that captured stale state.
```

### 💣 Barry the Bomb

**Role:** Hangs around anywhere you need to blow stuff up (delete code)

**Use for:**
- Marking code that should be deleted
- Indicating temporary workarounds to remove
- Code that needs to be replaced

**Example:**
```tsx
// @ts-expect-error 💣 Remove this comment when you add the type
function Calculator({ left, right }) {
```

### 🚨 Alfred the Alert

**Role:** Shows up in test failure messages with potential explanations

**Use for:**
- Test failure explanations
- Debugging hints in tests
- Common mistake warnings in test output

**Example:**
```tsx
// 🚨 If this test is failing, make sure you've exported the function
// as a named export, not a default export.
expect(myFunction).toBeDefined()
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

🧝‍♀️ [What's already been set up, if applicable]

🐨 [Main instructions with file reference]

[Numbered steps if needed]

💰 [Helpful hints]

📜 [Documentation links]

📝 [Reflection prompt, if appropriate]
```

### Solution Pattern

```mdx
# Step Title

<EpicVideo url="..." />

👨‍💼 [Brief confirmation of completion]

🦉 [Key insight or best practice]

[Transition to next step if applicable]
```

### Summary Pattern

```mdx
# Exercise Title

<EpicVideo url="..." />

👨‍💼 [Celebration and summary]

📝 [Encourage notes on key takeaways]

[Connection to next exercise or overall learning]
```

## Character Personality Guidelines

### 👨‍💼 Peter
- Friendly and encouraging
- Thinks about users and business needs
- Celebrates success ("Great job!", "Perfect!")
- Sets context for why we're doing something

### 🐨 Kody
- Direct and helpful
- Uses action verbs ("Open", "Add", "Create")
- Breaks tasks into clear steps
- Focused on what to do

### 🧝‍♀️ Kellie
- Helpful colleague vibe
- Explains what's already done
- Sets up context for the exercise

### 🦺 Lily
- Technical and precise
- Focused on type safety
- Explains TypeScript-specific concepts
- Helps with generics and advanced types

### 💰 Marty
- Generous with hints
- Provides code snippets
- Helps when you're stuck

### 📜 Dominic
- Points to authoritative sources
- Links to official docs
- Provides learning resources

### 📝 Nancy
- Encourages active learning
- Prompts reflection
- Helps retention

### 🦉 Olivia
- Wise and insightful
- Shares best practices
- Explains the "why"

### 💣 Barry
- Marks code for deletion
- Indicates temporary code
- Shows what to remove

### 🚨 Alfred
- Helps debug test failures
- Explains common mistakes
- Appears in test output

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

| Emoji | Character | Name | Purpose |
|-------|-----------|------|---------|
| 👨‍💼 | Peter | Product Manager | Context, requirements, user needs |
| 🐨 | Kody | Koala | Specific instructions, what to do |
| 🧝‍♀️ | Kellie | Co-worker | Pre-done work, setup context |
| 🦺 | Lily | Life Jacket | TypeScript guidance |
| 💰 | Marty | Money Bag | Tips and code hints |
| 📜 | Dominic | Document | Documentation links |
| 📝 | Nancy | Notepad | Encourages note-taking |
| 🦉 | Olivia | Owl | Best practices, insights |
| 💣 | Barry | Bomb | Code to delete |
| 🚨 | Alfred | Alert | Test failure explanations |
