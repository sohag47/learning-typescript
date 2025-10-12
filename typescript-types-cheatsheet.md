# 🧠 TypeScript Types Cheat Sheet

Your ultimate guide to mastering TypeScript's type system — quick, structured, and practical.

---

## 🔹 Primitive Types

| Type        | Example             | Notes                     |
| ----------- | ------------------- | ------------------------- |
| `string`    | `"Commander Sohag"` | Text values               |
| `number`    | `42`, `3.14`        | All numbers (int + float) |
| `boolean`   | `true`, `false`     | True/false values         |
| `null`      | `null`              | Empty value               |
| `undefined` | `undefined`         | Uninitialized value       |
| `bigint`    | `9007199254740991n` | Large integers            |
| `symbol`    | `Symbol("id")`      | Unique identifiers        |

```ts
let name: string = 'Commander';
let age: number = 25;
let active: boolean = true;
```

---

## 🔹 Object Types

```ts
const user: { name: string; age: number; isAdmin?: boolean } = {
  name: 'Sohag',
  age: 22,
};
```

---

## 🔹 Array Types

```ts
let nums: number[] = [1, 2, 3];
let names: Array<string> = ['Sohag', 'GPT Bro'];
const readonlyArr: readonly number[] = [1, 2, 3];
```

---

## 🔹 Tuple Types

```ts
let person: [string, number] = ['Sohag', 25];
```

---

## 🔹 Enum Types

```ts
enum Role {
  USER,
  ADMIN,
  SUPERADMIN,
}
let role: Role = Role.ADMIN;
```

---

## 🔹 Union & Intersection

```ts
type ID = string | number;
type Person = { name: string };
type Contact = { email: string };
type Employee = Person & Contact;
```

---

## 🔹 Literal Types

```ts
let direction: 'up' | 'down' | 'left' | 'right';
direction = 'up'; // ✅
```

---

## 🔹 Type Alias & Interface

```ts
type UserID = string | number;

interface User {
  id: UserID;
  name: string;
  email?: string;
}

interface Admin extends User {
  permissions: string[];
}
```

---

## 🔹 Function Types

```ts
function add(a: number, b: number): number {
  return a + b;
}

type MathFn = (x: number, y: number) => number;
const multiply: MathFn = (x, y) => x * y;
```

---

## 🔹 Any & Unknown

```ts
let data: any = 5;
let input: unknown = 'Commander';
if (typeof input === 'string') console.log(input.toUpperCase());
```

---

## 🔹 Void & Never

```ts
function log(msg: string): void {
  console.log(msg);
}

function fail(): never {
  throw new Error('Something went wrong');
}
```

---

## 🔹 Generics

```ts
function identity<T>(value: T): T {
  return value;
}

identity<number>(42);
identity<string>('Hello');
```

---

## 🔹 Utility Types

| Utility         | Description           |
| --------------- | --------------------- |
| `Partial<T>`    | All props optional    |
| `Required<T>`   | All props required    |
| `Readonly<T>`   | All props readonly    |
| `Pick<T, K>`    | Select specific keys  |
| `Omit<T, K>`    | Exclude specific keys |
| `Record<K, T>`  | Key-value type        |
| `ReturnType<T>` | Extract return type   |

```ts
interface User {
  id: number;
  name: string;
  email?: string;
}

type OptionalUser = Partial<User>;
type PublicUser = Omit<User, 'email'>;
```

---

## 🔹 Type Assertions

```ts
let value: unknown = 'Sohag';
let len: number = (value as string).length;
```

---

## 🔹 Type Guards

```ts
function printId(id: string | number) {
  if (typeof id === 'string') console.log(id.toUpperCase());
  else console.log(id);
}
```

---

## 🔹 Template Literal & Discriminated Unions

```ts
type Event = 'click' | 'hover';
type EventHandler = `on${Capitalize<Event>}`; // "onClick" | "onHover"

type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
  }
}
```

---

## 🧩 Summary

| Category     | Example              | Description      |
| ------------ | -------------------- | ---------------- | ----------------------- |
| Primitive    | `string`, `number`   | Basic JS values  |
| Object       | `{ name: string }`   | Structured data  |
| Array        | `number[]`           | Lists            |
| Tuple        | `[string, number]`   | Fixed structure  |
| Enum         | `enum Role { USER }` | Named constants  |
| Union        | `string              | number`          | Multiple possible types |
| Intersection | `A & B`              | Combined types   |
| Generic      | `<T>`                | Reusable types   |
| Utility      | `Partial<T>`         | Built-in helpers |

---

💡 **Pro Tip:** Always enable `"strict": true` in `tsconfig.json` for full type safety.

# ⚙️ TypeScript Utility Types Cheat Sheet

A complete reference to all **TypeScript built-in utility types** with examples and explanations.

---

## 🔹 `Partial<T>`

> Makes all properties of `T` optional.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
// Equivalent to:
// { id?: number; name?: string; email?: string; }
```

---

## 🔹 `Required<T>`

> Makes all properties of `T` required (opposite of `Partial`).

```ts
interface User {
  id?: number;
  name?: string;
}

type RequiredUser = Required<User>;
// { id: number; name: string; }
```

---

## 🔹 `Readonly<T>`

> Makes all properties of `T` immutable.

```ts
interface Config {
  url: string;
  port: number;
}

const config: Readonly<Config> = { url: 'localhost', port: 8080 };
// config.port = 3000; ❌ Error: Cannot assign to 'port'
```

---

## 🔹 `Pick<T, K>`

> Selects specific keys from `T`.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type BasicUser = Pick<User, 'id' | 'name'>;
// { id: number; name: string; }
```

---

## 🔹 `Omit<T, K>`

> Excludes specific keys from `T`.

```ts
type NoEmailUser = Omit<User, 'email'>;
// { id: number; name: string; }
```

---

## 🔹 `Record<K, T>`

> Creates an object type with keys `K` and values `T`.

```ts
type Role = 'admin' | 'user' | 'guest';

const permissions: Record<Role, string[]> = {
  admin: ['read', 'write', 'delete'],
  user: ['read'],
  guest: [],
};
```

---

## 🔹 `Exclude<T, U>`

> Removes from `T` all types assignable to `U`.

```ts
type Status = 'pending' | 'success' | 'error';
type NonErrorStatus = Exclude<Status, 'error'>;
// "pending" | "success"
```

---

## 🔹 `Extract<T, U>`

> Extracts from `T` only the types assignable to `U`.

```ts
type Status = 'pending' | 'success' | 'error';
type PositiveStatus = Extract<Status, 'success' | 'pending'>;
// "pending" | "success"
```

---

## 🔹 `NonNullable<T>`

> Removes `null` and `undefined` from `T`.

```ts
type MaybeString = string | null | undefined;
type SafeString = NonNullable<MaybeString>;
// string
```

---

## 🔹 `ReturnType<T>`

> Extracts the return type of a function.

```ts
function createUser() {
  return { id: 1, name: 'Sohag' };
}

type UserReturn = ReturnType<typeof createUser>;
// { id: number; name: string; }
```

---

## 🔹 `Parameters<T>`

> Extracts a tuple of function parameters.

```ts
function greet(name: string, age: number) {
  return `Hello ${name}, ${age}`;
}

type GreetParams = Parameters<typeof greet>;
// [name: string, age: number]
```

---

## 🔹 `ConstructorParameters<T>`

> Extracts parameter types from a class constructor.

```ts
class Point {
  constructor(
    public x: number,
    public y: number
  ) {}
}

type PointArgs = ConstructorParameters<typeof Point>;
// [x: number, y: number]
```

---

## 🔹 `InstanceType<T>`

> Extracts the instance type of a class.

```ts
type PointInstance = InstanceType<typeof Point>;
// Point
```

---

## 🔹 `ThisParameterType<T>`

> Extracts the type of the `this` parameter of a function.

```ts
function sayHello(this: { name: string }) {
  return `Hello ${this.name}`;
}

type ThisTypeOfHello = ThisParameterType<typeof sayHello>;
// { name: string }
```

---

## 🔹 `OmitThisParameter<T>`

> Removes the `this` parameter from a function type.

```ts
type NoThis = OmitThisParameter<typeof sayHello>;
```

---

## 🔹 `Awaited<T>`

> Unwraps a `Promise` type recursively.

```ts
type Result = Awaited<Promise<Promise<string>>>;
// string
```

---

## 🔹 `Uppercase<T>`, `Lowercase<T>`, `Capitalize<T>`, `Uncapitalize<T>`

> String manipulation types.

```ts
type A = Uppercase<'hello'>; // "HELLO"
type B = Lowercase<'WORLD'>; // "world"
type C = Capitalize<'commander'>; // "Commander"
type D = Uncapitalize<'GPTBro'>; // "gPTBro"
```

---

## 🔹 `ReadonlyArray<T>` and `ReadonlyMap<K, V>`

> Immutable collections.

```ts
const numbers: ReadonlyArray<number> = [1, 2, 3];
// numbers.push(4); ❌ Error

const map: ReadonlyMap<string, number> = new Map([['a', 1]]);
```

---

## 🔹 `Record<string, any>` vs `object` vs `{}`

| Type                  | Description                            | Example             |
| --------------------- | -------------------------------------- | ------------------- |
| `Record<string, any>` | Object with string keys and any values | `{ name: "Sohag" }` |
| `object`              | Non-primitive type                     | `{}`                |
| `{}`                  | Any non-null, non-undefined value      | `5`, `"hi"`, `{}`   |

---

## 🧩 Summary Table

| Utility                    | Description                |
| -------------------------- | -------------------------- |
| `Partial<T>`               | Makes all props optional   |
| `Required<T>`              | Makes all props required   |
| `Readonly<T>`              | Makes all props immutable  |
| `Pick<T, K>`               | Selects keys               |
| `Omit<T, K>`               | Removes keys               |
| `Record<K, T>`             | Key-value mapping          |
| `Exclude<T, U>`            | Removes types              |
| `Extract<T, U>`            | Keeps only certain types   |
| `NonNullable<T>`           | Removes `null`/`undefined` |
| `ReturnType<T>`            | Gets return type           |
| `Parameters<T>`            | Gets function args         |
| `ConstructorParameters<T>` | Gets constructor args      |
| `InstanceType<T>`          | Gets class instance type   |
| `ThisParameterType<T>`     | Gets `this` type           |
| `OmitThisParameter<T>`     | Removes `this` param       |
| `Awaited<T>`               | Resolves nested promises   |
| `Uppercase<T>`             | Converts to uppercase      |
| `Lowercase<T>`             | Converts to lowercase      |
| `Capitalize<T>`            | Capitalizes string         |
| `Uncapitalize<T>`          | Lowercases first char      |

---

💡 **Pro Tip:** Combine utility types creatively — for example:

```ts
type EditableUser = Partial<Omit<User, 'id'>>;
```

---

© 2025 Commander Sohag’s TS Notes 🚀
