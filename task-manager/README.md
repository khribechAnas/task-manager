# Task Manager - TDD Demo with Unit & E2E Tests

A complete demonstration of Test-Driven Development (TDD) with React, TypeScript, and Vite featuring both unit tests and E2E tests.

## ✨ Features

- ✅ Add tasks to a list
- ✅ Delete tasks
- ✅ Mark tasks as completed
- ✅ Responsive design.

## 🧪 Testing

This project demonstrates complete testing coverage:

### Unit Tests (Vitest + React Testing Library)
```bash
npm test           # Run in watch mode
npm run test:run   # Run once
npm run test:ui    # Run with UI
```

### E2E Tests (Playwright)
```bash
npm run test:e2e       # Run E2E tests
npm run test:e2e:ui    # Run with UI mode
npm run test:e2e:debug # Debug mode
```

### CI/CD Pipeline
Tests automatically run on GitHub Actions for every push to `main` branch.

## 📦 Tech Stack

- **Frontend:** React 19 + TypeScript
- **Build:** Vite
- **Unit Testing:** Vitest + React Testing Library
- **E2E Testing:** Playwright
- **CI/CD:** GitHub Actions

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Run all tests
npm test
npm run test:e2e
```

See [TEST-SUMMARY.md](TEST-SUMMARY.md) for detailed test documentation.

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
