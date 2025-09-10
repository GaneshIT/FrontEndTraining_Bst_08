//var, let, const -> js types of variable declaration
//diff between var, let, const
var a = 10; // function scope
let b = 20; // block scope
const c = 30; // block scope and constant value

//how to display output in js
//1. alert
//2. console.log ->important
//3. document.write
//4. innerHTML

// alert('Hi welcome');
// alert('Ganesh Raj');

// console.log('Hi welcome');
// console.log('Ganesh Raj');

// document.write('Hi welcome');
// document.write('<br />');
// document.write('Ganesh Raj');

//  https://javascript.info/


//functions - its block of code to perform a specific task
//function definition
//syntax: function functionName(){ //block of code }
//Example:
function showMessage(){
    var fname="Ganesh";
    var msg="Hai welcome";
    document.getElementById('title').innerHTML=msg+','+'<span style="color:red">'+fname+'</span>';
    document.getElementById('message').innerText="Welcome to bangalore";
    //document.write(msg);
    //document.write(fname);
}
function showMessage1(){
    var fname="Ganesh";
    var msg="Hai welcome";
    document.getElementById('title').innerHTML=msg+','+'<span style="color:red">'+fname+'</span>';
    document.getElementById('message').innerText="Welcome to bangalore";
    //document.write(msg);
    //document.write(fname);
}
//showMessage();// function calling