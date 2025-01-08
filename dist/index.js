"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
function calculation(sales, course, is_published) {
    return `Course: ${course}. Sales: ${sales}. Is Published: ${is_published}`;
}
console.log("show variables :>> ", calculation(sales, course, is_published));
let employee = {
    id: 1,
    name: "Sohag",
    retire(date) {
        console.log("date :>> ", date);
    },
};
console.log("employee :>> ", employee.retire(new Date()));
