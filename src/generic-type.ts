/* eslint-disable no-console */
//! generic types

export default function GenericTypes(): void {
  function identity<T>(value: T): T {
    return value;
  }

  const num = identity<number>(42);
  console.log('num :>> ', num);

  const arr = identity<number[]>([1, 2]);
  console.log('arr :>> ', arr);

  // Generic Classes
  class DataStore<T> {
    private data: T[] = [];

    add(item: T): void {
      this.data.push(item);
    }
    getAll(): this {
      return this;
    }
    show(): void {
      if (this.data.length > 0) {
        this.data.map(item => console.log(item));
      }
    }
  }
  const store = new DataStore<string>();
  store.add('Commander Sohag');
  store.add('GPT Bro');
  store.getAll().show();
}
