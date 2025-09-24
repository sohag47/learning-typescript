/* eslint-disable no-console */
// Learn basic types: string, number, boolean, array, tuple, enum
export default function BasicTypes(): void {
  //! Primitive Types : string, number, boolean
  const name: string = 'Minhazul Islam Sohag';
  const age: number = 20;
  const isStudent: boolean = true;
  console.log('Primitive Types', { name, age, isStudent });

  //! number
  const pi: number = 3.1416;
  const hex: number = 0xff; // Hexadecimal
  const binary: number = 0b1010; // Binary
  const octal: number = 0o744; // Octal

  console.log('Numbers', { age, pi, hex, binary, octal });

  //! Array
  const hobbies: string[] = ['Reading', 'Traveling', 'Coding'];

  console.log('Array', { hobbies });

  //! Generic array syntax
  const cities: Array<string> = ['New York', 'Los Angeles', 'Chicago'];
  console.log('Generic array', cities);

  //! Mixed array using union type
  const mixedArray: (string | number | boolean)[] = [
    'Hello',
    '42',
    true,
    'World',
    3.14,
    false,
  ];
  //? Tuple
  const address: [string, number] = ['123 Main St', 101];
  console.log('Mixed Array', { address, mixedArray });

  //! enums
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }

  console.log('enums number', Direction.Up);
  enum Status {
    Pending = 'PENDING',
    InProgress = 'IN_PROGRESS',
    Completed = 'COMPLETED',
  }
  console.log('enums string', Status.Pending);

  const currentStatus: Status = Status.InProgress;
  console.log('Current status:', currentStatus);
  // Object
  // const userRole: Role = Role.User;
}
