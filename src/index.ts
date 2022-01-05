let id: number =5;
let person: string ='Mike';
let isMale: boolean =true;
let x: any = "HEY";

let figure: number;
figure = 10;

let ids:number[] =[1,2,3,4,5];
let arr:any[] = [1,"hey",true]

//.......... Tuple..............
let individual:[number, boolean, string] = [1, true,"hey"]
// Tuple Array
let employee:[number, string][]
employee = [
    [1, "mike"],
    [2, "emma"],
    [3, "kas"]
]
//.......... Union..............
let pid: string | number;
pid = "22" ;

//..........Enum...............
enum Direct1{
    up=1,
    down,
    left
}
enum Direct2{
    up="up",
    down= "down",
    left = "left"
}
 
 //.......... Objects(using "Type")............
 type User ={
     id:number,
     name:string
 }

 const user: User = {
     id:1,
     name:"john"
 }
// this can be used with primitives and unions
type Point = number | string; // interface Point = number | string; - this won't work
const p1:Point = 1;


 //............ Type Assertion..................
 let cid: any = 1;
//  let customerId = <number>cid;
 let customerId = cid as number;

//  ................Functions.................
function addNum(x:number, y:number):number {  // addNum(x:number, y:number):number <- the out side type is thr defined return value
    return x + y
}
// console.log(addNum(1,2));

// ....................Void........................
function log(message:string | number):void {
    console.log(message);
    
}
// log("hey")

//........INTERFACES.................
interface UserInterface{
    readonly id:number, //you cant redefine it just reading it
     name:string,
     age?: number // this can be optional to be included or not when defined
}
const user1: UserInterface = {
    id:1,
    name:"john"
}
// this can't be used with primitives and unions.
//Example
// user1.id = 5;

//.............INTERFACES - functions.................
interface MathFunc{
    (x:number, y:number): number
}

const add: MathFunc = (x:number, y:number): number => x + y;
const sub: MathFunc = (x:number, y:number): number => x - y;




// .........INTERFACES WITH CLASSES..........
interface PersonInterface{
     pid:number, 
     name:string,
     register(): string
    }

// ........CLASSES............
class Person{
    id: number // protected id: number
    name: string // private name: string
    age: number // public (or ignore it) age: number

    constructor(id:number, name: string, age: number){
            this.id =id
            this.name =name
            this.age =age
    }

    register(){
        return `${this.name} is now registered`
    }
}

const mike = new Person(1, "Michael", 26)
const john = new Person(2, "John", 29)

// console.log(mike, john)
// console.log(mike.register())


// ........CLASSES IMPLEMENTING INTERFACES............

class Personer implements PersonInterface {
    pid: number // protected id: number
    name: string // private name: string
    age: number // public (or ignore it) age: number

    constructor(pid:number, name: string, age: number){
            this.pid =pid
            this.name =name
            this.age =age
    }

    register(){
        return `${this.name} is now registered`
    }
}

// ........ SUB CLASSES ............

class Employee extends Person{
    position: string

    constructor(id:number, name: string, age: number, position: string){
        super(id,name,age)
        this.position = position
    }
}
const bob = new Employee(1, "Bob", 26,"developer")
// console.log(bob);

// ........ GENERICS ............

function getArray <T>(items:T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray <number>([1,2,3])
let stringArray = getArray <string>(["mike","john","Bob"])

stringArray.push("Emma");
console.log(stringArray);
