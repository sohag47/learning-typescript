import BasicTypes from './basic-types';

const greet = (name: string, age: number): string => {
  return `Hello, ${name}! Age: ${age}`;
};

// eslint-disable-next-line no-console
console.log(greet('Commander Sohag 🚀. How are you?', 20));

BasicTypes();
