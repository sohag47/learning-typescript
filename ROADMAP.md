# 🗓️ 90-Day TypeScript Deep Dive Roadmap

This roadmap will guide you from **beginner → advanced → mastery** in TypeScript over 90 days.  
It’s broken down into **weekly milestones + mini projects** so you learn by doing.

---

## ✅ Phase 1: Foundations (Week 1–3)

### 📅 Week 1

- Install & setup TypeScript (`tsc`, `ts-node`, `tsconfig.json`)
- Learn basic types: `string`, `number`, `boolean`, `array`, `tuple`, `enum`
- Functions: parameters, return types, optional/default params
- Difference between `any`, `unknown`, `never`, `void`

👉 **Mini Project:** Convert a simple JS calculator or todo list to TypeScript.

---

### 📅 Week 2

- Type Aliases vs Interfaces
- Union & Intersection types
- Type inference rules
- Type narrowing with `typeof`, `instanceof`, custom guards

👉 **Mini Project:** Build a small JSON parser that accepts unknown input and validates types.

---

### 📅 Week 3

- Intro to Generics `<T>`
- Generic functions, interfaces & classes
- Writing simple `.d.ts` declaration files

👉 **Mini Project:** Create a generic `fetchWrapper<T>` function for APIs.

---

## ⚡ Phase 2: Intermediate (Week 4–6)

### 📅 Week 4

- Advanced Generics: constraints, defaults (`<T extends object>`, `<T = string>`)
- `keyof`, `typeof`, `in`
- Utility Types: `Partial`, `Required`, `Pick`, `Omit`, `Record`, `Readonly`

👉 **Mini Project:** User Management system (CRUD) with reusable generic functions.

---

### 📅 Week 5

- Conditional Types (`T extends U ? X : Y`)
- Distributive Conditional Types
- `infer` keyword
- Template Literal Types

👉 **Mini Project:** Type-safe Event Emitter (only allows predefined event names).

---

### 📅 Week 6

- Declaration merging & Module augmentation
- Namespaces vs Modules
- Type-safe config objects
- Explore DefinitelyTyped (`@types/*`)

👉 **Mini Project:** Extend Express Request type to include a custom `user` object.

---

## 🚀 Phase 3: Advanced (Week 7–9)

### 📅 Week 7 (React + TS)

- Typing Props & State
- `useState`, `useRef`, `useReducer` generics
- Context API with generics
- Higher-order components typing

👉 **Mini Project:** React Todo App with type-safe props & state.

---

### 📅 Week 8 (Next.js + TS)

- Typing `AppProps`, `getServerSideProps`, `getStaticProps`
- API routes with typed responses
- Schema validation with Zod/Yup + TS

👉 **Mini Project:** Blog app with typed API + front-end components.

---

### 📅 Week 9 (Node.js + TS)

- Typing Express/Koa middleware
- Using `@types/*` packages
- Type-safe database queries (Prisma/TypeORM)

👉 **Mini Project:** REST API for products/orders with type-safe models.

---

## 🧠 Phase 4: Mastery (Week 10–12)

### 📅 Week 10

- Recursive types
- Currying types
- Type transformations with mapped types
- Solve beginner Type Challenges

👉 **Mini Project:** Build a type-safe form validator library (like a mini Zod).

---

### 📅 Week 11

- Medium/Hard Type Challenges
- Deep dive into advanced conditional types
- Variance & type-level functions

👉 **Mini Project:** Type-safe query builder (`select(["name", "age"])` → only allows valid keys).

---

### 📅 Week 12

- Package publishing with `tsup` or `rollup`
- Add types, declaration files, docs
- Setup ESLint + Prettier for TS
- Automate type-checking in CI/CD

👉 **Final Project:** Publish your own TypeScript utility library to npm.

---

# 📚 Resources

- **Book:** [TypeScript Deep Dive (Basarat)](https://basarat.gitbook.io/typescript/)
- **Docs:** [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- **Practice:** [Type Challenges](https://github.com/type-challenges/type-challenges)
- **YouTube:** Matt Pocock, Jack Herrington

---

# 🎯 Outcome

By the end of 90 days, you will:

- Write **zero-runtime-error** TypeScript apps
- Master **Generics, Conditional Types, Utility Types, Type-Level Programming**
- Use TS with **React, Next.js, Node.js, Prisma**
- Publish your **own npm library** in TypeScript
