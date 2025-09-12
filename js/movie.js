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