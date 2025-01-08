/** @format */

let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;

function calculation(
  sales: number,
  course: string,
  is_published: boolean
): string {
  return `Course: ${course}. Sales: ${sales}. Is Published: ${is_published}`;
}
console.log("show variables :>> ", calculation(sales, course, is_published));

type TEmployee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: TEmployee = {
  id: 1,
  name: "Sohag",
  retire(date) {
    console.log("date :>> ", date);
  },
};
employee.retire(new Date());
