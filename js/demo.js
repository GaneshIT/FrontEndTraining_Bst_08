//Javascript

//call(), apply(), Bind()

class emp{
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    display(){
        console.log(this.id + " " + this.name + " " + this.salary);
    }
}

//this -> its current object -> add new function, properties


const employee={
    name:"Raj",
    age:24,
    location:"Delhi",
    display:function(){
        console.log(this.name + " " + this.age + " " + this.location);
    }
}
//bind() it will create new function
console.log(employee.name)
employee.display(); //normal function call
var newFunc=employee.display.bind({name:'ganesh'}); //bind()

newFunc();//bind() method will be triggered



const person = {
    name: 'KRISHNA',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
const greet = person.greet.bind(person);
greet();



function add(){
    a=10;
    b=20;
    return this.a + this.b + c + d;
}

add.bind(30, 40); //normal function call


const button1 = document.querySelector('#myButton1');//save
const button2 = document.querySelector('#myButton2');//update
const button3 = document.querySelector('#myButton3');//update

const handleClick1 = function() {
  console.log(`Button clicked by ${this.textContent}.`);//save, update
  //Button clicked by undefined.
  //Button clicked by Save.
};


button1.addEventListener('click', handleClick.bind(button1));//Memory allocation
button2.addEventListener('click', handleClick.bind(button2));

button1.removeEventListener('click', handleClick.bind(button1)); //it will not work

//button object -> this ->event- Click


//Garbage Collection

//let obj1 = {name:"Raj"}; //Memory allocation
//var obj2 = obj1;//Memory allocation
//var obj3=[];//Memory allocation

//Mark and Sweep Algorithm
//Mark -> start from Root object-> reachable, unreachable

function fun(){
    let i=10;
    {
        let j=20;
        console.log(i+j);
    }
    console.log(j); //error
}


window.document.title="Hello World"; //Memory allocation
window.document.body.style.backgroundColor="yellow";
window.document.getElementById("myButton1").style.color="red";

function changeBgColor(){
    window.document.body.style.backgroundColor="green";
}
changeBgColor();//memory allocation

window.changeBgColor();//memory allocation



//Memory Leak
//1. Global Variables
//2. Forgotten timers or callbacks
//3. Detached DOM nodes 
//4. Out of DOM references
//5. Closures
//6. Event Listeners
//7. Caches
//8. Third-party libraries
//9. Circular References
//10. Large Data Structures
//11. Forgotten Intervals
//12. Unused Variables
//13. Unreleased Resources
//14. Improper use of 'this'
//15. Memory Leaks in Loops
//16. Forgotten Promises

// use strict

//hoisting
let a;

a=10;
console.log(a); //error



function demo(){

}

demo();


//callback function
function Show(){
    console.log("Show function");
}
//callback function
function Message(){
    console.log("Show Message");
}
//high order function
function Display(a){
    console.log("Display function:"+a());//Display function:Show function
}

Display(show);//argument type is function




//Customer: id, name, email, phone
function Customer(id, name, email, phone){
    this.id=id;
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.display=function(){
        console.log(this.id + " " + this.name + " " + this.email + " " + this.phone);
    }
}
//student: id, name, email, phone
function student(id, name, email, phone){
    this.id=id;
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.display=function(){
        console.log(this.id + " " + this.name + " " + this.email + " " + this.phone);
    }
}
//employee: id, name, email, phone
function employee(id, name, email, phone){
    this.id=id;
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.display=function(){
        console.log(this.id + " " + this.name + " " + this.email + " " + this.phone);
    }
}

function HOC(myFun,title){
    console.log("HOC function");
    console.log("Title:"+title);
    myFun();//callback function
}

HOC(student,"Student Details");//it returns student function
HOC(employee,"Employee Details");//it returns employee function
HOC(Customer,"Customer Details");//it returns customer function

let x=[3,4,5,6];
let y=["A","B","C","D"];
let z=[true,false,true,false];

x.map(function(a){
    console.log(a);
});
y.map(function(b){
    console.log(b);
});
z.map(function(c){
    console.log(c);
})