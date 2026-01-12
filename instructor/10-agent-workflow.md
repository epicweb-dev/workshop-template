# Agent Workflow for Creating Epic Workshops

This guide provides a step-by-step workflow for AI agents creating Epic Workshops. Follow these phases in order.

## Overview

Creating a workshop involves 6 main phases:

1. **Discovery** - Understand the topic and scope
2. **Planning** - Design the exercise structure
3. **Setup** - Configure the workshop
4. **Implementation** - Create exercises
5. **Content** - Write README.mdx files
6. **Validation** - Test and verify

## Phase 1: Discovery

### Step 1.1: Understand the Topic

Ask the instructor:

```
To create a great workshop, I need to understand:

1. What is the main topic? (e.g., "React Server Components", "Vitest Mocking")
2. Who is the target audience? (beginners, intermediate, advanced)
3. What should learners be able to do after completing the workshop?
4. How long should the workshop be? (2-4 hours, 4-8 hours, full day)
5. Are there specific technologies/frameworks required?
```

### Step 1.2: Research the Topic

Before designing exercises:

1. Review official documentation for the topic
2. Identify core concepts that must be covered
3. Find common pain points and misconceptions
4. Understand best practices and anti-patterns
5. Note any prerequisites learners need

### Step 1.3: Identify Boundaries

Define what's in and out of scope:

```markdown
## In Scope
- [Core concept 1]
- [Core concept 2]
- [Core concept 3]

## Out of Scope
- [Related but not essential topic]
- [Advanced topic for future workshop]

## Prerequisites
- [What learners must already know]
```

## Phase 2: Planning

### Step 2.1: Draft Exercise List

Create a high-level list:

```markdown
# Workshop: [Title]

## Exercise Plan

### 01. [First Exercise Name]
- Core concept to teach
- Why this comes first

### 02. [Second Exercise Name]
- Concept this teaches
- How it builds on 01

### 03. [Third Exercise Name]
...
```

### Step 2.2: Design Each Exercise

For each exercise, define:

```markdown
## Exercise: [Name]

**Learning Objective:** [One sentence]

**Concepts Covered:**
- [Concept 1]
- [Concept 2]

**Steps:**
1. [Step name] - [What this teaches]
2. [Step name] - [What this adds]
3. [Step name] - [What this completes]

**Key Takeaway:** [Main insight]
```

### Step 2.3: Verify Flow

Check the exercise plan:

- [ ] Does difficulty progress smoothly?
- [ ] Does each exercise build on previous knowledge?
- [ ] Are there any gaps in coverage?
- [ ] Can each step be completed in 15-30 minutes?
- [ ] Is the total length appropriate?

### Step 2.4: Get Instructor Approval

Present the plan to the instructor:

```
Here's my proposed workshop structure:

[Exercise plan]

Questions:
1. Does this cover what you wanted?
2. Is the order logical?
3. Should anything be added or removed?
4. Is the difficulty progression appropriate?
```

## Phase 3: Setup

### Step 3.1: Configure package.json

Update the root `package.json`:

```json
{
  "name": "workshop-name",
  "private": true,
  "epicshop": {
    "title": "Workshop Title 🎯",
    "subtitle": "Clear description of what learners will learn",
    "githubRepo": "https://github.com/org/repo",
    "instructor": {
      "name": "Instructor Name",
      "avatar": "/images/instructor.png",
      "𝕏": "handle"
    },
    "product": {
      "host": "www.epicweb.dev",
      "displayName": "EpicWeb.dev",
      "displayNameShort": "Epic Web"
    }
  }
}
```

### Step 3.2: Create Directory Structure

Create the exercise directories:

```bash
# For each exercise
mkdir -p exercises/01.exercise-name/01.problem.step-name
mkdir -p exercises/01.exercise-name/01.solution.step-name

# Continue for all exercises and steps
```

### Step 3.3: Add Required Files

Ensure these files exist:

- [ ] `exercises/README.mdx` (workshop intro)
- [ ] `exercises/FINISHED.mdx` (workshop wrap-up)
- [ ] `public/images/instructor.png` (instructor avatar)
- [ ] Each exercise has `README.mdx` and `FINISHED.mdx`
- [ ] Each step has `README.mdx`

## Phase 4: Implementation

### Step 4.1: Create Solution Code First

For each step, write the solution first:

1. Implement the complete, working code
2. Make sure it runs without errors
3. Write tests if appropriate
4. Ensure code follows best practices

### Step 4.2: Create Problem Code from Solution

Work backwards from solution:

1. Copy the solution code
2. Remove the parts learners need to implement
3. Add TODO comments with emoji markers
4. Add helpful hints and documentation links
5. Verify the problem code still runs (even if incomplete)

### Step 4.3: Verify the Diff

Check that the diff between problem and solution:

- [ ] Shows only the intended changes
- [ ] Is readable (not too many lines)
- [ ] Clearly demonstrates the concept
- [ ] Doesn't include unrelated changes

### Step 4.4: Problem Code Template

Use this pattern:

```tsx
// 🐨 [What to do]
// 💰 [Hint showing how]
// 📜 [Link to documentation]

function MyComponent() {
  // 🐨 Add useState hook here
  // 💰 const [state, setState] = useState(initialValue)

  // 🦺 Add type annotation
  // @ts-expect-error 💣 Remove when typed

  return (
    <div>
      {/* 🐨 Render the state here */}
    </div>
  )
}
```

## Phase 5: Content

### Step 5.1: Write Workshop Introduction

Create `exercises/README.mdx`:

```mdx
# Workshop Title

<EpicVideo url="..." />  <!-- Add when video exists -->

👨‍💼 [Greeting and introduction to the workshop]

[Explain what learners will learn - use a list]

[Set expectations and prerequisites]

[Encouraging call to action to start]
```

### Step 5.2: Write Exercise Introductions

For each `exercises/XX.exercise-name/README.mdx`:

```mdx
# Exercise Title

<EpicVideo url="..." />

[Explain the concept being taught - 2-4 paragraphs]

[Show code examples if helpful]

[Use callouts for important points]

[Preview what learner will do]
```

### Step 5.3: Write Problem Instructions

For each `XX.problem.step-name/README.mdx`:

```mdx
# Step Title

<EpicVideo url="..." />

👨‍💼 [Set the scene - what's the context/requirement]

🐨 [Specific instructions - tell them exactly what to do]

[If needed, numbered list of subtasks]

💰 [Provide helpful hints]

📜 [Link to relevant documentation]
```

### Step 5.4: Write Solution Explanations

For each `XX.solution.step-name/README.mdx`:

```mdx
# Step Title

<EpicVideo url="..." />

👨‍💼 [Brief confirmation of what was accomplished]

[Optional: Key insight or explanation of why this works]

[Optional: Transition to what's next]
```

### Step 5.5: Write Exercise Summaries

For each `exercises/XX.exercise-name/FINISHED.mdx`:

```mdx
# Exercise Title

<EpicVideo url="..." />

👨‍💼 [Celebrate completion]

[Key takeaways - what they learned]

[How this connects to the next exercise or real-world use]
```

### Step 5.6: Write Workshop Wrap-up

Create `exercises/FINISHED.mdx`:

```mdx
# Workshop Title

<EpicVideo url="..." />

👨‍💼 [Celebrate completion of the entire workshop]

[Summary of the journey]

[What they can do now]

[Call to action - what to learn next or how to practice]
```

## Phase 6: Validation

### Step 6.1: Structural Validation

Verify:

- [ ] All directories follow naming conventions
- [ ] All problem/solution pairs match
- [ ] All README.mdx files exist
- [ ] All FINISHED.mdx files exist
- [ ] No missing or extra files

### Step 6.2: Code Validation

For each step:

- [ ] Problem code runs without errors
- [ ] Solution code runs without errors
- [ ] Tests pass (if tests exist)
- [ ] No TypeScript errors
- [ ] No linting errors

### Step 6.3: Content Validation

For each README:

- [ ] Uses correct emoji characters
- [ ] Instructions are clear and complete
- [ ] Links work
- [ ] Code examples are correct

### Step 6.4: Diff Validation

For each problem/solution pair:

- [ ] Diff is focused and readable
- [ ] Only intended changes appear
- [ ] Diff demonstrates the learning objective

### Step 6.5: Run the Workshop

Start the workshop app and:

1. Navigate through all exercises
2. Try completing each problem
3. Use the diff tab to compare
4. Run tests if available
5. Verify everything works

## Iterating with the Instructor

### Getting Feedback

After completing each phase, ask:

```
I've completed [phase name]. Here's what I have:

[Summary of work]

Questions:
1. Does this look correct?
2. Would you like any changes?
3. Should I proceed to the next phase?
```

### Making Changes

When changes are requested:

1. Understand what needs to change
2. Make the changes
3. Verify nothing else broke
4. Report back with summary of changes

## Common Issues and Solutions

### Issue: Exercise is Too Long

**Solution:** Split into multiple exercises or reduce steps.

### Issue: Diff is Too Large

**Solution:** Break step into smaller steps.

### Issue: Instructions Unclear

**Solution:** Add more specific guidance, hints, and examples.

### Issue: Code Doesn't Work

**Solution:** Test thoroughly before creating problem from solution.

### Issue: Difficulty Spike

**Solution:** Add an intermediate step or move challenging content later.

## Checklist Before Completion

### Structure
- [ ] All directories correctly named
- [ ] All required files present
- [ ] package.json properly configured

### Code
- [ ] All problem code runs
- [ ] All solution code runs
- [ ] All tests pass
- [ ] No TypeScript errors
- [ ] No linting errors

### Content
- [ ] All READMEs written
- [ ] Emoji characters used correctly
- [ ] Instructions are clear
- [ ] Links work

### Experience
- [ ] Difficulty progresses smoothly
- [ ] Each step is completable in 15-30 min
- [ ] Workshop can be completed in target time

### Validation
- [ ] Walked through as a learner
- [ ] All exercises function correctly
- [ ] Diff tab shows correct changes
