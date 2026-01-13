# Workshop Planning Guide

## Phase 1: Topic Research

Before creating any exercises, thoroughly understand the topic:

### Research Checklist
- [ ] Identify core concepts that must be covered
- [ ] Find official documentation and authoritative sources
- [ ] Review existing tutorials and courses on the topic
- [ ] Understand common pain points and misconceptions
- [ ] Identify prerequisites learners need
- [ ] Determine the target audience skill level

### Questions to Answer
1. What does a beginner need to know?
2. What does an expert need that beginners don't?
3. What are the most common mistakes people make?
4. What's the "aha moment" for this topic?
5. How does this topic connect to real-world applications?

## Phase 2: Scoping

Define clear boundaries for your workshop:

### Workshop Length Guidelines

| Workshop Type | Exercises | Steps per Exercise | Total Duration |
|--------------|-----------|-------------------|----------------|
| Short | 4-6 | 2-4 | 2-4 hours |
| Standard | 6-10 | 3-5 | 4-8 hours |
| Comprehensive | 8-12 | 4-6 | 8-16 hours |

### Scoping Questions
1. What's the ONE big thing learners will be able to do after?
2. What topics are explicitly OUT of scope?
3. What's the minimum viable workshop?
4. What advanced topics could be bonus exercises?

### Red Flags - Workshop is Too Broad
- More than 12 exercises planned
- Exercises covering unrelated concepts
- Need for extensive prerequisite explanation
- Multiple target audiences with different needs

### Red Flags - Workshop is Too Narrow
- Fewer than 4 exercises
- Exercises that are all variations of the same thing
- No natural progression of difficulty
- Could be covered in a blog post

## Phase 3: Exercise Design

### Creating an Exercise Outline

For each exercise, define:

```markdown
## Exercise: [Name]

**Learning Objective:** [One sentence describing what learners will understand]

**Prerequisites:** [Concepts learners should already know]

**Steps:**
1. [First concept/task] - Introduces [specific concept]
2. [Second concept/task] - Builds on step 1 by [specific addition]
3. [Third concept/task] - Adds [specific feature/concept]

**Key Takeaway:** [Main insight learners should have]
```

### Example: Exercise Outline for "Mocking Functions"

```markdown
## Exercise: Functions

**Learning Objective:** Learners will understand how to mock, spy on, and
replace function implementations in tests.

**Prerequisites:** Basic Vitest knowledge, JavaScript functions

**Steps:**
1. mock-functions - Create mock functions with vi.fn()
2. spies - Spy on existing functions without replacing them
3. mock-implementation - Replace function implementations dynamically

**Key Takeaway:** Mock functions record calls while spies observe them.
```

## Phase 4: Flow Design

### Linear vs Non-Linear Flow

**Linear Flow (Recommended)**
Each exercise builds directly on the previous one. Best for:
- Teaching a framework or library
- Building a complete application
- Topics with strong dependencies

**Non-Linear Flow**
Exercises are relatively independent. Best for:
- Technique collections (like Mocking Techniques)
- Reference-style workshops
- Topics where order matters less

### Ordering Principles

1. **Fundamentals First** - Start with the basics even if they seem obvious
2. **Build on Prior Knowledge** - Reference earlier exercises
3. **Difficulty Progression** - Easy → Medium → Hard
4. **Conceptual Grouping** - Related topics should be adjacent
5. **Energy Management** - Place challenging exercises in the middle, not at the end

## Phase 5: Creating the Exercise Plan

### Template for Complete Workshop Plan

```markdown
# Workshop: [Title]

## Target Audience
[Who is this for? What do they already know?]

## Learning Outcomes
By the end of this workshop, learners will be able to:
1. [Outcome 1]
2. [Outcome 2]
3. [Outcome 3]

## Prerequisites
- [Prerequisite 1]
- [Prerequisite 2]

## Exercise Plan

### 01. [Exercise Name]
**Concept:** [What this teaches]
**Steps:**
- 01.problem.[step-name]: [Description]
- 02.problem.[step-name]: [Description]

### 02. [Exercise Name]
**Concept:** [What this teaches]
**Steps:**
- 01.problem.[step-name]: [Description]
- 02.problem.[step-name]: [Description]
- 03.problem.[step-name]: [Description]

[Continue for all exercises...]

## Out of Scope
- [Topic not covered]
- [Topic not covered]

## Potential Bonus Content
- [Extra exercise idea]
- [Extra exercise idea]
```

## Phase 6: Iteration

### Review Your Plan

Before implementation, verify:

1. **Coverage** - Does every learning outcome have exercises?
2. **Progression** - Does difficulty increase smoothly?
3. **Balance** - Are exercises roughly similar in length?
4. **Coherence** - Does the workshop tell a story?
5. **Practicality** - Can each exercise be completed in 15-30 minutes?

### Get Feedback

Consider:
- Reviewing the plan with domain experts
- Comparing to existing successful workshops
- Validating with potential learners
- Testing the flow with a prototype exercise

## Example: Complete Workshop Plan

```markdown
# Workshop: React Server Components

## Target Audience
Experienced React developers who want to understand RSC

## Learning Outcomes
1. Understand the mental model of server vs client components
2. Know when and how to use 'use client' and 'use server'
3. Build applications that efficiently blend server and client rendering

## Prerequisites
- React fundamentals (components, hooks, state)
- Basic understanding of client/server architecture
- Node.js familiarity

## Exercise Plan

### 01. Mental Model
**Concept:** Understanding what runs where
**Steps:**
- 01.problem.server-components: Create a simple server component
- 02.problem.client-components: Mark a component as client-side
- 03.problem.composition: Compose server and client components

### 02. Data Fetching
**Concept:** Fetching data in server components
**Steps:**
- 01.problem.async-components: Fetch data in async server components
- 02.problem.streaming: Stream data to the client
- 03.problem.loading-states: Handle loading states

### 03. Server Actions
**Concept:** Calling server code from client components
**Steps:**
- 01.problem.use-server: Create a server action
- 02.problem.forms: Use server actions with forms
- 03.problem.optimistic: Add optimistic updates

[etc...]
```

## Planning Anti-Patterns

### Avoid These Mistakes

1. **Kitchen Sink** - Trying to cover everything
2. **No Flow** - Random exercise order
3. **Cliff Drops** - Sudden difficulty spikes
4. **Too Abstract** - No practical applications
5. **Too Long** - Exercises that take > 30 minutes
6. **Missing Context** - No explanation of "why"
7. **Unclear Goals** - Exercises without clear outcomes
