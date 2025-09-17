var date=new Date(); //To get current date and time
document.getElementById('displayTime').innerText=date.toLocaleTimeString();
setInterval(function(){
date=new Date();
document.getElementById('displayTime').innerText=date.toLocaleTimeString();
},1000);//1000 milliseconds = 1 second

function validateMovieForm() {
    var mname= document.getElementById('txtmname').value;
    var mdesc= document.getElementById('txtmdesc').value;
    var mtype= document.getElementById('ddltype').value;
    var lanaguage=document.getElementById('rbtntamil').value;
    if(mname=='')
        document.getElementById('message').innerText="Please enter movie name";
    else if(mdesc=='')
        document.getElementById('message').innerText="Please enter movie description";
    else if(mtype=='Select')
        document.getElementById('message').innerText="Please select movie type";
    else
        document.getElementById('message').innerText="Movie details are valid";
//     console.log('Movie Name:',mname);
//     console.log('Movie Desc:',mdesc);
//     console.log('Movie Type:',mtype);
//     console.log('Movie Language:',lanaguage);
}
function checkLanguage(value){
    console.log('Selected Language:',value);
}

//Array
//collection of similar data types
//its dynamic array in javascript
//How to access array elements? 
//using array index number: ex: arrayName[indexnumber]
//how to declare array in js?
//var arrayName=[element1, element2, element3,.....];


var movies=['Bahubali','KGF','Vikram','Jailer']; //4000
var movieTypes=['Select','Action','Comedy','Drama','Horror','Romance'];
//how to find array length? movies.length-> 4

//how to access movies array values?
// console.log('Movie 1:',movies[0]);
// console.log('Movie 2:',movies[1]);
// console.log('Movie 3:',movies[2]);
// console.log('Movie 4:',movies[3]);

//using iterations statements: access all the elements
//for loop, while, do while, foreach, for in, for of

//for loop process statements:
//1. initialization:   let i=0;
//2. condition:         i<4;
//3. statements: block of code   : { //statements  }
//4. increment/decrement : i++ or i--

// for(let i=0;i<movies.length;i++){
//     console.log('Movie:'+(i+1),movies[i]);
// }

//output:'string'+variable
//Movie 1: Bahubali
//Movie 2: KGF
//Movie 3: Vikram
//Movie 4: Jailer

//populate movie types in dropdownlist.
//Reading array values and add as options in dropdownlist
var options='';
for(let i=0;i<movieTypes.length;i++){
    options=options+'<option>'+movieTypes[i]+'</option>';
}
document.getElementById('ddltype').innerHTML=options;

var mnames=[];
var mdescs=[];
var mtypes=[];
var mlanguages=[];

function addMovie(){
    var mname= document.getElementById('txtmname').value;
    var mtype= document.getElementById('ddltype').value;
    var mdesc= document.getElementById('txtmdesc').value;

    mnames.push(mname); //push() to add item in array [1]
    mdescs.push(mdesc);//[1]
    mtypes.push(mtype);//[1]

    showMovies();
}
function showMovies(){
    var rows='';
    for(let i=0;i<mnames.length;i++){
        rows=rows+'<tr><td>'+mnames[i]+'</td><td>'+mdescs[i]+'</td><td>'+mtypes[i]+'</td><td><button onclick="editMovie('+i+')">Edit</button></td><td><button onclick="deleteMovie('+i+')">Delete</button></td></tr>'
    }
    document.getElementById('movietable').innerHTML=rows;
}
var index=0;//global variable to access in multiple functions
function editMovie(idx){
    index=idx;//assigning local variable value to global variable
    console.log('Edit movie at index:',idx);//Edit Movie at index: 1
    document.getElementById('txtmname').value = mnames[idx];//[0] a,[1] x
    document.getElementById('txtmdesc').value = mdescs[idx];
    document.getElementById('ddltype').value = mtypes[idx];

    //hide save button, show update button
    document.getElementById('btnsave').style.display='none';//hide save button
    document.getElementById('btnupdate').style.display='block';//show update button
}
function deleteMovie(index){
    console.log('Delete movie at index:',index);
    mnames.splice(index,1);//1 means delete 1 item at given index
    mdescs.splice(index,1);
    mtypes.splice(index,1);
    showMovies();
}
function updateMovie(){
    var mname= document.getElementById('txtmname').value;
    var mtype= document.getElementById('ddltype').value;
    var mdesc= document.getElementById('txtmdesc').value;
    //update array values
    mnames[index]=mname;
    mdescs[index]=mdesc;
    mtypes[index]=mtype;
    showMovies();//it will read updated array values and display in table
    resetForm();
}
//reset form
function resetForm(){
    document.getElementById('txtmname').value='';
    document.getElementById('txtmdesc').value='';
    document.getElementById('ddltype').value='Select';
    //show save button, hide update button
    document.getElementById('btnsave').style.display='block';//show save button
    document.getElementById('btnupdate').style.display='none';//hide update button
}