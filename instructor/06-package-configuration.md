# Package Configuration Guide

## Root package.json

The root `package.json` configures the entire workshop.

### Minimal Configuration

```json
{
  "name": "my-workshop",
  "private": true,
  "epicshop": {
    "title": "Workshop Title",
    "githubRepo": "https://github.com/username/repo",
    "instructor": {
      "name": "Your Name",
      "avatar": "/images/instructor.png"
    }
  },
  "type": "module",
  "scripts": {
    "start": "npx --prefix ./epicshop epicshop start",
    "dev": "npx --prefix ./epicshop epicshop start",
    "setup": "node ./epicshop/setup.js"
  }
}
```

### Full Configuration Example

```json
{
  "name": "react-fundamentals",
  "private": true,
  "epicshop": {
    "title": "React Fundamentals ⚛",
    "subtitle": "Learn the foundational concepts for building React applications",
    "subdomain": "react-fundamentals",
    "githubRepo": "https://github.com/epicweb-dev/react-fundamentals",
    "instructor": {
      "name": "Kent C. Dodds",
      "avatar": "/images/instructor.png",
      "𝕏": "kentcdodds"
    },
    "product": {
      "host": "www.epicreact.dev",
      "slug": "react-fundamentals",
      "displayName": "EpicReact.dev",
      "displayNameShort": "Epic React",
      "logo": "/logo.svg",
      "discordChannelId": "1285244676286189569",
      "discordTags": ["1285246046498328627"]
    },
    "stackBlitzConfig": {
      "view": "editor",
      "file": "src/App.tsx"
    },
    "forms": {
      "workshop": "https://docs.google.com/forms/...",
      "exercise": "https://docs.google.com/forms/..."
    },
    "testTab": {
      "enabled": true
    },
    "scripts": {
      "postupdate": "npm run build"
    },
    "initialRoute": "/",
    "onboardingVideo": "https://www.epicweb.dev/tips/get-started"
  },
  "type": "module",
  "scripts": {
    "postinstall": "cd ./epicshop && npm install",
    "start": "npx --prefix ./epicshop epicshop start",
    "dev": "npx --prefix ./epicshop epicshop start",
    "setup": "node ./epicshop/setup.js",
    "setup:custom": "node ./epicshop/setup-custom.js",
    "lint": "eslint .",
    "format": "prettier --write .",
    "typecheck": "tsc -b"
  },
  "workspaces": [
    "exercises/*/*",
    "examples/*"
  ],
  "devDependencies": {
    "@epic-web/config": "^1.21.3",
    "eslint": "^9.39.0",
    "prettier": "^3.7.0",
    "typescript": "^5.9.0"
  },
  "prettier": "@epic-web/config/prettier",
  "engines": {
    "node": ">=20",
    "npm": ">=8.16.0"
  }
}
```

## epicshop Configuration Options

### Required Options

| Option | Type | Description |
|--------|------|-------------|
| `title` | string | Workshop title (shown in UI) |
| `githubRepo` | string | GitHub repository URL |
| `instructor.name` | string | Instructor's name |
| `instructor.avatar` | string | Path to avatar image |

### Core Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `subtitle` | string | - | Workshop subtitle |
| `subdomain` | string | package name | Subdomain for local URL |
| `githubRoot` | string | - | Root URL for GitHub links |
| `initialRoute` | string | "/" | Initial route when starting app |

### Instructor Options

| Option | Type | Description |
|--------|------|-------------|
| `instructor.name` | string | Full name |
| `instructor.avatar` | string | Path to avatar (min 112x112px) |
| `instructor.𝕏` | string | X (Twitter) handle |
| `instructor.xHandle` | string | Alternative to 𝕏 |

### Product Options

For workshops associated with a product (EpicWeb, EpicReact, etc.):

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `product.host` | string | "www.epicweb.dev" | Host domain |
| `product.slug` | string | - | Product slug for API |
| `product.displayName` | string | "EpicWeb.dev" | Full display name |
| `product.displayNameShort` | string | "Epic Web" | Short display name |
| `product.logo` | string | "/logo.svg" | Logo path |
| `product.discordChannelId` | string | - | Discord channel ID |
| `product.discordTags` | string[] | - | Discord tag IDs |

### StackBlitz Options

Configure the StackBlitz embed for deployed workshops:

| Option | Type | Description |
|--------|------|-------------|
| `stackBlitzConfig.title` | string | Project title |
| `stackBlitzConfig.startScript` | string | Script to run |
| `stackBlitzConfig.view` | "editor" \| "preview" \| "both" | Initial view |
| `stackBlitzConfig.file` | string | Initial file to open |

Set to `null` to disable StackBlitz:
```json
{
  "epicshop": {
    "stackBlitzConfig": null
  }
}
```

### Forms Options

Configure feedback forms:

```json
{
  "epicshop": {
    "forms": {
      "workshop": "https://docs.google.com/forms/...?entry.123={workshopTitle}",
      "exercise": "https://docs.google.com/forms/...?entry.123={workshopTitle}&entry.456={exerciseTitle}"
    }
  }
}
```

Available tokens:
- `{workshopTitle}` - Workshop title
- `{exerciseTitle}` - Current exercise title

### Test Tab Options

Control the test tab visibility:

```json
{
  "epicshop": {
    "testTab": {
      "enabled": true
    }
  }
}
```

### Sidecar Processes

Run additional processes alongside the workshop:

```json
{
  "epicshop": {
    "sidecarProcesses": {
      "BackendAPI": "npm run dev --prefix ./backend",
      "Database": "docker run --rm -p 5432:5432 postgres:15"
    }
  }
}
```

### Post-Update Script

Run commands after workshop updates:

```json
{
  "epicshop": {
    "scripts": {
      "postupdate": "npm run build"
    }
  }
}
```

### Notifications

Add workshop-specific notifications:

```json
{
  "epicshop": {
    "notifications": [
      {
        "id": "welcome",
        "title": "Welcome!",
        "message": "Check out the resources tab for additional materials.",
        "type": "info"
      },
      {
        "id": "breaking-change",
        "title": "Breaking Change",
        "message": "React 19 changed how refs work. See updated exercises.",
        "type": "warning",
        "link": "https://react.dev/blog/...",
        "expiresAt": "2025-12-31"
      }
    ]
  }
}
```

Notification types: `info`, `warning`, `danger`

## Exercise-Level Configuration

Individual exercises can override global settings in their `package.json`:

```json
{
  "name": "01.problem.step-name",
  "epicshop": {
    "testTab": {
      "enabled": false
    },
    "initialRoute": "/admin",
    "stackBlitzConfig": null
  },
  "scripts": {
    "dev": "vite"
  }
}
```

### Common Overrides

**Disable tests for an exercise:**
```json
{
  "epicshop": {
    "testTab": {
      "enabled": false
    }
  }
}
```

**Set custom initial route:**
```json
{
  "epicshop": {
    "initialRoute": "/dashboard"
  }
}
```

**Disable StackBlitz:**
```json
{
  "epicshop": {
    "stackBlitzConfig": null
  }
}
```

## Scripts Configuration

### Essential Scripts

```json
{
  "scripts": {
    "postinstall": "cd ./epicshop && npm install",
    "start": "npx --prefix ./epicshop epicshop start",
    "dev": "npx --prefix ./epicshop epicshop start",
    "setup": "node ./epicshop/setup.js",
    "setup:custom": "node ./epicshop/setup-custom.js"
  }
}
```

### Optional Scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write .",
    "typecheck": "tsc -b",
    "test": "npm run test --silent --prefix playground",
    "validate:all": "npm-run-all --parallel lint typecheck"
  }
}
```

## Workspaces Configuration

For workshops with multiple package apps:

```json
{
  "workspaces": [
    "exercises/*/*",
    "examples/*"
  ]
}
```

This allows:
- Running `npm install` once at root
- Sharing dependencies across exercises
- Using workspace protocols (`workspace:*`)

## Engine Requirements

Specify required versions:

```json
{
  "engines": {
    "node": ">=20",
    "npm": ">=8.16.0",
    "git": ">=2.18.0"
  }
}
```

## Dependencies

### Root Dependencies

Common root-level dev dependencies:

```json
{
  "devDependencies": {
    "@epic-web/config": "^1.21.3",
    "@epic-web/workshop-utils": "^6.49.3",
    "eslint": "^9.39.0",
    "prettier": "^3.7.0",
    "typescript": "^5.9.0"
  }
}
```

### Exercise Dependencies

Exercises can have their own dependencies:

```json
{
  "name": "01.problem.api-calls",
  "dependencies": {
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "msw": "^2.0.0",
    "vitest": "^1.0.0"
  }
}
```

## Configuration Checklist

Before publishing, verify:

- [ ] `title` is set and descriptive
- [ ] `githubRepo` or `githubRoot` is set
- [ ] `instructor.name` and `instructor.avatar` are set
- [ ] Avatar image exists at specified path
- [ ] All required scripts are defined
- [ ] `engines` specifies minimum versions
- [ ] `private: true` is set (workshops shouldn't publish to npm)
- [ ] `workspaces` configured if using workspace structure
