/*

Midterm/Final by Dylan DeAmaral
 Javascript 2014 Summer class, instructor: Gabriel Forti

*/
function PhoneValidate( str ){
        var alphaRegex = /^\(?([2-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return alphaRegex.test(str);        //Formatting the phone number       
}
function EmailValidate( str ) {
        var alphaRegex = /^[a-zA-Z0-9]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{3}$/;
        return alphaRegex.test(str);    //Formatting the email  
}
function SpaceAlpha( str ) {
        var alphaRegex = /^[a-zA-Z ]+$/;
        return alphaRegex.test(str); //Formatting for spaces
}
function stripHTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,""); //strips the html from the description section
}

var fullname = document.getElementById("fullname");
var fullname_err = document.getElementById("fullname_err");
var email = document.getElementById('email');
var email_err = document.getElementById('email_err');
var phone = document.getElementById('phone');
var phone_err = document.getElementById('phone_err');
var description = document.getElementById("description");
var description_err = document.getElementById("description_err");


var data = [];

function saveForm(){ //function for saving the form
    if  ( !fullname.value.length ) {        //checks to see if full name has anything entered
        fullname.classList.remove ('good');
        fullname.classList.add ('bad');
        fullname_err.innerHTML = '<p> Please Enter your full name </p>';
        fnamehasErrors = true;
  
    } else if ( SpaceAlpha( fullname.value ) === false ){
        fullname.classList.remove('good');
        fullname.classList.add('bad');
        fullname_err.innerHTML = '<p> Only characters and spaces allowed </p>';
        fnamehasErrors = true;
    
    } else {
        fullname.classList.remove('bad');
        fullname.classList.add('good');
        fullname_err.innerHTML = "";
        fnamehasErrors = false;
    }
  
    if ( !email.value.length ) { 
            email.classList.add('bad');     //error check for email
            email.classList.remove('good');
            email_err.innerHTML = '<p>Please enter a valid email</p>';
            emailhasErrors = true;
         }else if ( EmailValidate( email.value ) === false ){
            email.classList.add('bad');
            email.classList.remove('good');
            email_err.innerHTML = '<p>Please enter the email correctly</p>';
            emailhasErrors = true;
            }else {
            email.classList.add('good');
            email.classList.remove('bad');
            email_err.innerHTML = "";
            emailhasErrors = false;
    }
    
   
    //tests the phone number for validity
    if ( !phone.value.length ){
           phone.classList.add('bad');
            phone.classList.remove('good');
            phone_err.innerHTML = '<p>Please Enter a phone number</p>';
            phonehasErrors = true;
    } else if ( PhoneValidate( phone.value ) === false ){
            phone.classList.add('bad');
           phone.classList.remove('good');
            phone_err.innerHTML = '<p>Please Enter a valid phone number</p>';
            phonehasErrors = true;
    } else {
            phone.classList.add('good');
            phone.classList.remove('bad');
            phone_err.innerHTML = "";
            phonehasErrors = false;
    }
   
    description.value = stripHTML(description.value); // strips the html from the description
 
    if (description.value.length <= 0 || description.value.length > 150) {
            description.classList.add ('bad');
            description.classList.remove ('good');
            description_err.innerHTML = '<p>Description is not valid. It must be between 1 and 150 characters</p>';
            descriptionhasErrors = true;  // Error check and sets it to being an error
            
    } else {
            description.classList.add ('good');
            description.classList.remove ('bad');
            description_err.innerHTML = "";
            descriptionhasErrors = false;
    }
    
    if(fnamehasErrors === false && emailhasErrors === false && phonehasErrors ===
            false && descriptionhasErrors === false) 
    {
        var dataInformation = {
            "Name": "",
            "Email": "",
            "Phone": "",
            "Description": ""
        };  
        
        dataInformation.Name = fullname.value;
        dataInformation.Email = email.value;
        dataInformation.Phone = phone.value;
        dataInformation.Description = description.value;

        data.push(dataInformation);

        var dataString = JSON.stringify(data);      //Saves the data in the local storage cache(not sure if it's technically a cache)
        localStorage.setItem('data',dataString);
     var stringstuff = "";  
    //var records = JSON.parse(localStorage.getItem("data")) || []; use when actually loading the data on the page
         if(data.length !== 0)
    {
        for(var i = 0; i < data.length; i++)
        {
            stringstuff=stringstuff+"<tr><td>"+(i+1)+"</td><td>" + data[i].Name + "</td><td>" + data[i].Email +"</td><td>" + data[i].Phone +"</td><td>" + data[i].Description + "</td></tr>" 
        }
        
        var tableData = document.getElementById('tableData');
       /* {
            var row = tableData.insertRow(0);  //this is how I'm adding rows. Found this method online. Couldn't figure any other way.
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            cell1.innerHTML = '';
            cell2.innerHTML = localStorage.getItem(['Name']);
            cell3.innerHTML = localStorage.getItem(['Email']);
            cell4.innerHTML = localStorage.getItem(['Phone']);
            cell*/
        tableData.innerHTML = stringstuff;
    }
}
};
var clearingRowData = document.getElementById('clearData');
        clearingRowData.addEventListener('click',clearingRowData);    //how I'm clearing rows.
        function clearRowData(){
        document.getElementById('tableData').deleteRow;
        };

var deletingRow = document.getElementById('deleteLastRowData');     //setting the id to a variable
deletingRow.addEventListener('click',deleteLastRow);        //on click will delete the last row
function deleteLastRow(){
    document.getElementById("tableData").deleteRow(0);  //deleting the last row of the table
}

var cleardata = document.getElementById('clearData');
cleardata.addEventListener('click',clearFields);

function clearFields(){
        fullname.value = '';
        email.value = '';     //changes the fields to an empty string.
        phone.value = '';
        description.value = '';        
        localStorage.clear();
};
