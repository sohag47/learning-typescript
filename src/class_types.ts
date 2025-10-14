/* eslint-disable no-console */

class Person {
  public name: string;
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  showInfo(): void {
    console.log(
      `${this.name} works in ${this.department}. salary: ${this.salary}`
    );
  }
}

class Manager extends Person {
  manage(): void {
    console.log(`${this.name} manages the ${this.department} department.`);
    // console.log(this.salary); ❌ Error: private property
  }
}

export default function ClassTypes(): void {
  const manager = new Manager('Sohag', 5000, 'Engineering');
  manager.showInfo();
  manager.manage();
}
