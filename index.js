"use strict";
let id = 5;
let person = 'Mike';
let isMale = true;
let x = "HEY";
let figure;
figure = 10;
let ids = [1, 2, 3, 4, 5];
let arr = [1, "hey", true];
//.......... Tuple..............
let individual = [1, true, "hey"];
// Tuple Array
let employee;
employee = [
    [1, "mike"],
    [2, "emma"],
    [3, "kas"]
];
//.......... Union..............
let pid;
pid = "22";
//..........Enum...............
var Direct1;
(function (Direct1) {
    Direct1[Direct1["up"] = 1] = "up";
    Direct1[Direct1["down"] = 2] = "down";
    Direct1[Direct1["left"] = 3] = "left";
})(Direct1 || (Direct1 = {}));
var Direct2;
(function (Direct2) {
    Direct2["up"] = "up";
    Direct2["down"] = "down";
    Direct2["left"] = "left";
})(Direct2 || (Direct2 = {}));
const user = {
    id: 1,
    name: "john"
};
const p1 = 1;
//............ Type Assertion..................
let cid = 1;
//  let customerId = <number>cid;
let customerId = cid;
//  ................Functions.................
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1,2));
// ....................Void........................
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "john"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// ........CLASSES............
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const mike = new Person(1, "Michael", 26);
const john = new Person(2, "John", 29);
// console.log(mike, john)
// console.log(mike.register())
// ........CLASSES IMPLEMENTING INTERFACES............
class Personer {
    constructor(pid, name, age) {
        this.pid = pid;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// ........ SUB CLASSES ............
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
const bob = new Employee(1, "Bob", 26, "developer");
// console.log(bob);
// ........ GENERICS ............
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let stringArray = getArray(["mike", "john", "Bob"]);
stringArray.push("Emma");
console.log(stringArray);
