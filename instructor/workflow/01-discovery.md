# Phase 1: Discovery

**Goal:** Understand the topic, audience, and scope before designing exercises.

## Step 1.1: Understand the Topic

Before designing any exercises, you need clear answers to these essential questions. Ask the instructor to provide this information:

### Essential Questions

```
To create a great workshop, I need to understand the following:

**Topic & Scope**
1. What is the main topic? (e.g., "React Server Components", "Vitest Mocking")
2. What specific concepts or subtopics should be covered?
3. What is explicitly OUT of scope for this workshop?

**Audience**
4. Who is the primary audience? (e.g., junior devs, senior engineers, full-stack developers)
5. What is their expected experience level with this topic? (complete beginner, some familiarity, intermediate, advanced)
6. What prerequisites should learners already know before starting?

**Duration & Structure**
7. How long should the workshop be?
   - Short: 2-4 hours (4-6 exercises)
   - Standard: 4-8 hours (6-10 exercises)
   - Comprehensive: 1-2 days (8-12 exercises)

**App Type**
8. What type of exercise apps should be used?
   - Simple files: Single HTML/CSS/JS files, minimal setup, served directly by workshop app
   - Project apps: Full applications with build tools (Remix, Vite, etc.), separate dev servers

**Testing Approach**
9. How should exercises be tested/validated?
   - In-browser: Learners verify visually or via browser console
   - Test scripts: Automated tests using Vitest or similar (learners run tests to check their work)
   - Both: Mix of visual verification and automated tests

**Workshop Series Context**
10. Is this workshop a continuation of another workshop?
    - If yes: Which workshop? (This can serve as a starting point for code/concepts)
    - If yes: What concepts from the previous workshop should be assumed knowledge?
11. Are follow-up workshops planned to cover more advanced material?
    - If yes: What topics will be deferred to the follow-up workshop(s)?
    - This helps define clear boundaries for the current workshop

**Learning Outcomes**
12. What should learners be able to DO after completing the workshop? (specific, actionable outcomes)
13. What is the "aha moment" you want learners to experience?
```

### Additional Clarifying Questions

Depending on the topic, you may also need to ask:

```
**Code & Examples**
- Should exercises use a specific coding style or conventions?
- Are there existing codebases or examples to reference?
- Should exercises build one continuous application or be independent?

**Technical Requirements**
- Are there specific versions of libraries/frameworks to use?
- Are there any dependencies or tools that must be included?
- Should exercises work offline or require internet access?

**Content Style**
- Is there a preferred tone? (formal, casual, humorous)
- Should exercises reference real-world scenarios or use abstract examples?
- Are there any topics or examples to avoid?
```

## Step 1.2: Research the Topic

Once you have answers to the essential questions, research the topic:

1. Review official documentation for the topic
2. Identify core concepts that must be covered
3. Find common pain points and misconceptions
4. Understand best practices and anti-patterns
5. Note any prerequisites learners need
6. If this is a continuation workshop, review the previous workshop's content

### For Continuation Workshops

If this workshop builds on a previous one:

- Review the previous workshop's exercise structure
- Understand what code/concepts carry forward
- Identify the "handoff point" where this workshop begins
- Note any patterns or conventions established in the previous workshop

## Step 1.3: Define Boundaries

Create a scope document that captures all the discovered information:

```markdown
## Workshop Overview
- **Title:** [Workshop name]
- **Duration:** [Hours/days]
- **App Type:** [Simple files / Project apps / Mix]
- **Testing:** [In-browser / Test scripts / Both]

## Target Audience
- **Primary audience:** [Who this is for]
- **Experience level:** [Beginner / Intermediate / Advanced]
- **Prerequisites:** [What learners must already know]

## Workshop Series Context
- **Previous workshop:** [Name or "None - standalone workshop"]
- **Follow-up workshop:** [Planned topics or "None planned"]
- **Assumed knowledge from previous:** [List or N/A]
- **Deferred to follow-up:** [List or N/A]

## In Scope
- [Core concept 1]
- [Core concept 2]
- [Core concept 3]

## Out of Scope
- [Related but not essential topic]
- [Advanced topic for future workshop]

## Learning Outcomes
After completing this workshop, learners will be able to:
1. [Specific outcome 1]
2. [Specific outcome 2]
3. [Specific outcome 3]
```

## Checkpoint

Before proceeding, confirm with the instructor:

```
Based on our discussion, here's my understanding of the workshop:

**Topic:** [Summary]
**Audience:** [Who this is for] with [experience level] experience
**Duration:** [Expected length]
**App Type:** [Simple files / Project apps]
**Testing:** [In-browser / Test scripts / Both]

**Workshop Series:**
- Previous workshop: [Name or "Standalone"]
- Follow-up planned: [Yes/No - brief description if yes]

**Core concepts to cover:**
- [Concept 1]
- [Concept 2]
- [Concept 3]

**Out of scope:**
- [Topic 1]
- [Topic 2]

**Prerequisites learners need:**
- [Prerequisite 1]
- [Prerequisite 2]

**Key learning outcomes:**
1. [Outcome 1]
2. [Outcome 2]

Does this match your vision? Should I proceed to planning?
```

## Next Step

Once approved, proceed to: `02-planning.md`

For background on Epic Workshop concepts, see: `../01-workshop-overview.md`
