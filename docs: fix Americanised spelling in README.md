<p align="center">
    <a href="https://garnet.lapidist.net/" target="_blank" rel="noopener">
        <img width="64" src="https://lapidist.net/logo.svg" alt="Lapidist Logo"/>
    </a>
</p>

<h2 align="center">@lapidist/garnet</h2>

<div align="center">

Opinionated and flexible design system by Lapidist.

[![Build Status](https://github.com/bylapidist/garnet/workflows/Checks/badge.svg)](https://github.com/bylapidist/garnet/actions?query=workflow%3AChecks)

</div>

## Overview

Welcome to the **@lapidist/garnet** monorepo, the hub for the Garnet Design System. This repository is organizd into various packages and applications to streamline development, documentation, and maintenance.

### Table of Contents

- [Applications](#applications)
    - [Storybook](#storybook)
    - [Website](#website)
- [Packages](#packages)
    - [eslint-config-garnet](#eslint-config-garnet)
    - [react](#react)
    - [styles](#styles)
    - [tokens](#tokens)
    - [types](#types)
- [Development](#development)

## Applications

### Storybook

Explore and interact with our design system components using Storybook.

#### Getting Started

```bash
npm run storybook
```

### Website

The public documentation website built with Next.js.

#### Getting Started

```bash
npm run dev
```

## Packages

### eslint-config-garnet

Our custom ESLint configuration for maintaining code quality.

#### Usage

```json
{
  "extends": "@lapidist/garnet"
}
```

### react

The React implementation of the Garnet Design System, including components, hooks, and helpers.

#### Installation

```bash
npm install @lapidist/garnet-react
```

#### Usage

```jsx
import { App } from '@lapidist/garnet-react';
import '@lapidist/garnet-react/style.css';

export default function Root() {
    return <App>Hello world!</App>;
}
```

### styles

CSS modules defining the styles for our design system components.

### tokens

Design tokens generated with [style-dictionary](https://github.com/amzn/style-dictionary).

### types

Shared TypeScript types, including props for components.

---

## Development

| Command             | Description                                                                              |
|---------------------|------------------------------------------------------------------------------------------|
| `npm run build`     | Build projects with Lerna and Nx to ensure correct dependencies and build order.         |
| `npm run lint`      | Run ESLint for code style, syntax, and issue identification, enforcing coding standards. |
| `npm run fix`       | Automatically fix common linting issues using ESLint's auto-fixing capabilities.         |
| `npm run watch`     | Continuously monitor projects for changes, triggering recompilation when necessary.      |
| `npm run snapshots` | Update and regenerate snapshot tests.                                                    |
| `npm run chromatic` | Run Chromatic visual regression tests on Storybook instance.                             |
| `npm run typecheck` | Execute TypeScript type checker to catch type-related issues.                            |
| `npm run commit`    | Create a new commit with Commitizen.                                                     |

