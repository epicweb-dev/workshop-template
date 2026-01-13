# Phase 3: Setup

**Goal:** Configure the workshop and create the directory structure.

**Reference:** For full configuration options, see `../06-package-configuration.md`
**Reference:** For directory structure details, see `../03-directory-structure.md`

## Step 3.1: Configure package.json

Update the root `package.json` with workshop metadata:

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

## Step 3.2: Create Directory Structure

Create directories for each exercise and step from your plan:

```bash
# Exercise 1
mkdir -p exercises/01.exercise-name/01.problem.step-name
mkdir -p exercises/01.exercise-name/01.solution.step-name
mkdir -p exercises/01.exercise-name/02.problem.step-name
mkdir -p exercises/01.exercise-name/02.solution.step-name

# Continue for all exercises and steps...
```

### Naming Conventions

- Exercise directories: `XX.exercise-name` (e.g., `01.hello-world`)
- Step directories: `XX.problem.step-name` and `XX.solution.step-name`
- Use lowercase with hyphens
- Numbers must be zero-padded and sequential

## Step 3.3: Create Required Files

Create placeholder README.mdx files:

```bash
# Workshop level
touch exercises/README.mdx
touch exercises/FINISHED.mdx

# For each exercise
touch exercises/01.exercise-name/README.mdx
touch exercises/01.exercise-name/FINISHED.mdx
touch exercises/01.exercise-name/01.problem.step-name/README.mdx
touch exercises/01.exercise-name/01.solution.step-name/README.mdx
```

## Step 3.4: Verify Structure

Checklist:

- [ ] `exercises/README.mdx` exists (workshop intro)
- [ ] `exercises/FINISHED.mdx` exists (workshop wrap-up)
- [ ] `public/images/instructor.png` exists (instructor avatar)
- [ ] Each exercise has `README.mdx` and `FINISHED.mdx`
- [ ] Each step has `README.mdx` in both problem and solution
- [ ] All problem/solution pairs have matching numbers and names

## Next Step

Once the structure is created, proceed to: `04-implementation.md`
