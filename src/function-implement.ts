/* eslint-disable no-console */

//! Functions: parameters, return types, optional/default params, rest params
type TMahOperation = (x: number, y: number, c: number) => number;

function add(a: number, b?: number, c: number = 10): number {
  return a + (b ?? 0) + c;
}

const multiply: TMahOperation = (x, y, c): number => x * y * c;

type LoggerFn = (message: string, level?: 'info' | 'warn' | 'error') => void;
const log: LoggerFn = (message, level = 'info') => {
  console.log(`[${level.toUpperCase()}]: ${message}`);
};

export default function FunctionImplementations(): void {
  const sum = add(5, 5);
  console.log('Sum:', sum);

  const product = multiply(2, 3, 4);
  console.log('Product:', product);

  log(`Total is ${product}`, 'info');
}
