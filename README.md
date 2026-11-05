# ReactScratch

ReactScratch is a small, from-scratch experiment in building a component-based user interface with TypeScript and browser APIs. It explores a few ideas behind libraries such as React—components, state, mounting, and rerendering—without depending on React.

The current demo displays a button with a counter. Clicking it updates the component's state and rerenders its markup. The project is intended as a learning project and a starting point for experimenting with a minimal UI runtime.

## How it works

- `Component` is the base class for UI components. Subclasses provide `render()` and `style()`, and can use lifecycle methods such as `onMount()` and `onUnmount()`.
- `useState` creates a value with getter and setter methods. Updating the value calls the owning component's `rerender()` method.
- `Button` is the example component. It renders the counter and increments it when clicked.
- `src/main.ts` creates the button and mounts it into the page element with the ID `root`.
- Tailwind CSS is used for utility styling, with styles generated from `src/css/input.css`.

## Project structure

```text
src/
  components/   Example UI components
  core/         Component base class and state helper
  css/          Tailwind CSS entry point
  main.ts       Application entry point
index.html      HTML page containing the app root
```

## Requirements

- [Bun](https://bun.sh/) or npm
- Node.js for the npm-based development scripts

## Run locally

Install dependencies with Bun:

```bash
bun install
```

Start the development tasks (TypeScript bundling, type checking, CSS generation, and local serving):

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The development server serves the project files and reloads when watched JavaScript or CSS files change.

To create a production bundle, run:

```bash
npm run build
```

The build checks TypeScript and writes the bundled JavaScript and generated CSS to `dist/assets/`.

## Current scope

This is a minimal learning project, not a complete UI framework. The example focuses on class-based components and a simple state-triggered rerender; routing, a full hook system, and broader lifecycle or reconciliation behavior are not implemented.
