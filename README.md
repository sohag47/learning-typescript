# Learning TypeScript 🚀

A well-configured TypeScript learning project with modern development tools and best practices.

## 🛠️ Features

- **TypeScript 5.9+** with strict configuration
- **ESLint** with TypeScript-specific rules
- **Prettier** for consistent code formatting
- **tsx** for fast development and execution
- **Modern ES2022 modules**
- **Source maps** for debugging
- **VS Code** integration with recommended extensions
- **Hot reload** development environment

## 📦 Scripts

| Script                 | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `npm start`            | Run the project with tsx                            |
| `npm run dev`          | Run in watch mode (auto-restart on changes)         |
| `npm run build`        | Build the project to `dist/` folder                 |
| `npm run clean`        | Remove build artifacts                              |
| `npm run typecheck`    | Run TypeScript type checking without emitting files |
| `npm run lint`         | Run ESLint on all TypeScript files                  |
| `npm run lint:fix`     | Run ESLint and automatically fix issues             |
| `npm run format`       | Format code with Prettier                           |
| `npm run format:check` | Check if code is properly formatted                 |

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development:**

   ```bash
   npm run dev
   ```

3. **Run the project:**

   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🔧 Development Workflow

1. **Write your TypeScript code** in the `src/` directory
2. **Use `npm run dev`** for development with hot reload
3. **Run `npm run lint`** to check for code issues
4. **Run `npm run format`** to ensure consistent formatting
5. **Run `npm run typecheck`** to verify TypeScript types
6. **Run `npm run build`** to create production build

## 📁 Project Structure

```
learning-typescript/
├── src/                    # Source code
│   └── index.ts           # Main entry point
├── dist/                  # Build output (generated)
├── .vscode/               # VS Code settings
│   ├── settings.json      # Editor settings
│   ├── extensions.json    # Recommended extensions
│   └── launch.json        # Debug configuration
├── eslint.config.mts      # ESLint configuration
├── tsconfig.json          # TypeScript configuration
├── .prettierrc.json       # Prettier configuration
├── .prettierignore        # Prettier ignore patterns
├── .gitignore             # Git ignore patterns
└── package.json           # Project dependencies and scripts
```

## ⚙️ Configuration Highlights

### TypeScript (`tsconfig.json`)

- **Target:** ES2022 with modern features
- **Module:** ESNext for better tree-shaking
- **Strict mode:** All strict checks enabled
- **Source maps:** Enabled for debugging
- **Declaration files:** Generated for library usage

### ESLint (`eslint.config.mts`)

- **TypeScript-specific rules** for better code quality
- **Consistent code style** enforcement
- **Custom rules** for learning best practices

### Prettier (`.prettierrc.json`)

- **Consistent formatting** across the project
- **Single quotes** and **semicolons**
- **2-space indentation**

## 🐛 Debugging

### VS Code Debug Configuration

1. Set breakpoints in your TypeScript files
2. Press `F5` or use the debug panel
3. Choose between:
   - **Debug TypeScript:** Compile and debug
   - **Debug with tsx:** Direct TypeScript execution

### Command Line Debugging

```bash
# Debug with Node.js built-in debugger
node --inspect-brk -r tsx src/index.ts
```

## 📚 Learning Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [ESLint TypeScript Rules](https://typescript-eslint.io/rules/)

## 🎯 Next Steps

1. **Add more TypeScript files** to explore different features
2. **Set up testing** with Jest or Vitest
3. **Add a build tool** like Vite or Webpack for complex projects
4. **Explore advanced TypeScript features** like generics, decorators, and utility types

Happy learning! 🚀

# Learning TypeScript

This project is a simple TypeScript learning project that demonstrates various TypeScript features and configurations.

## Files

- **.vscode/launch.json**: Configuration for debugging the project in Visual Studio Code.
- **src/enums.ts**: Demonstrates the usage of `const enum` in TypeScript.
- **src/everyday_types.ts**: Contains examples of everyday types in TypeScript, including primitives, arrays, union types, type aliases, and more.
- **src/index.ts**: Main entry point of the project, demonstrating basic TypeScript features such as type annotations, functions, and object types.
- **tsconfig.json**: TypeScript configuration file.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- TypeScript installed globally or locally in the project.

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd learning-typescript
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Project

1. Compile the TypeScript files:
   ```sh
   npx tsc
   ```
2. Run the compiled JavaScript files:
   ```sh
   node dist/index.js
   ```

### Debugging

To debug the project in Visual Studio Code, press `F5` or go to the Debug panel and start the "Launch Program" configuration.

## License

This project is licensed under the MIT License.
