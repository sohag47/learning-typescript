/** @format */

//! Everyday Types
/*
! The primitives:
* 1. string
* 2. number
* 3. boolean
*/

class User {
  id: number;
  name: string;
  isAdmin: boolean;

  constructor(id: number, name: string, isAdmin: boolean) {
    this.id = id;
    this.name = name;
    this.isAdmin = isAdmin;
  }
}
const user: User = {
  id: 1,
  name: "John Doe",
  isAdmin: false,
};
console.log("user :>> ", user);

//! Arrays
const users: User[] = [user];

//! Any
let obj: any = { x: 0 };

//! null and undefined
let u: undefined = undefined;
let n: null = null;

//! Optional Properties
type User2 = {
  id: number;
  name: string;
  isAdmin?: boolean;
};

//! Union Types
type uuid = number | string;

//! Type alias for an intersection type
type Admin = User & {
  address: string;
};

//! Type alias for a function type
type AddFunction = (user: User) => void;

//! custom type guard
type Status = "success" | "error" | "loading";
function isAdmin(user: User): user is Admin {
  return user.isAdmin;
}

//! Type alias for a generic type
type Container<T> = { value: T };

// Make all properties optional
type PartialUser = Partial<User>;
const test: PartialUser = {
  id: 1,
  name: "John Doe",
  isAdmin: false,
};

// Pick only specific properties
type UserNameAndEmail = Pick<User, "name" | "isAdmin">;
const test2: UserNameAndEmail = {
  name: "John Doe",
  isAdmin: false,
};

// Readonly properties
type ReadonlyUser = Readonly<User>;
const test3: ReadonlyUser = {
  id: 1,
  name: "John Doe",
  isAdmin: false,
};
// test3.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

// Record
type UsersById = Record<number, User>;
const usersById: UsersById = {
  1: {
    id: 1,
    name: "John Doe",
    isAdmin: false,
  },
};

// Omit
type UserWithoutId = Omit<User, "id">;

// Exclude
type StringOrNumber = Exclude<string | number, number>;

// Extract
type StringOnly = Extract<string | number, string>;

// Required
type RequiredUser = Required<User>;

// Pick
type UserNameAndAdmin = Pick<User, "name" | "isAdmin">;

// NonNullable
type NonNullableString = NonNullable<string | null | undefined>;

// Parameters
type UserFunctionParams = Parameters<(user: User) => void>;

// ConstructorParameters
type UserConstructorParams = ConstructorParameters<
  new (id: number, name: string, isAdmin: boolean) => User
>;

// ReturnType
type UserFunctionReturnType = ReturnType<() => User>;

// InstanceType
type UserInstanceType = InstanceType<typeof User>;

// InstanceType
class UserClass {
  constructor(
    public id: number,
    public name: string,
    public isAdmin: boolean
  ) {}
}
type T6 = InstanceType<typeof UserClass>; // UserClass

// ThisType
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};
