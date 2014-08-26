/*
 Let’s revisit form validation from week 2. 
  You will use your same form but create some new JavaScript. 
 
1. In your HTML make a fname and lname fields.
2. Using regular expression to validate your form.
    a. Full name must be a SpaceAlphaValidate, only characters and spaces allowed
    c. Email must start with characters, have a @ symbol, have another set 
       of characters have a period and end with 3 characters.
    d. Comments must not have any html.  Search for characters that have <> 
       wrapped around it.

 */


function SpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]+/;
        return alphaRegex.test(str);			
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function submitform() {
	
        var err_fname = document.getElementById('err_fname');
        var err_lname = document.getElementById('err_lname');
        var err_email = document.getElementById('err_email');
        var fname = document.getElementById('firstname');
        var lname = document.getElementById('lastname');
        var hasErrors = false;
        var emailRegex = /^[a-zA-Z]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{2,3}$/;		
        var fname = document.getElementById('fname');
        var mainform = document.getElementById('mainform');
    if ( !fname.value.length ) {
            console.log("Fname needs a length");
    } else if ( SpaceAlphaValidate( fname.value ) === false ) {
            console.log("Fname needs Alpha chars");
    } else {
            console.log("Fname is good");
    }
        
         
        



var email = document.getElementById('email');
                    
            
                    if ( emailRegex.test(email.value) ){
                        err_email.innerHTML = '';
                    } else {
                       err_email.innerHTML = '<p>Email is not valid.</p>';
                    }
                    document.getElementById('submit').addEventListener('click', submitform);
                  
                //var commentstuff = "^[<>]";
                var comment = document.getElementById('comments');
              
    comment.value = strip_HTML(comment.value);
                
                    if ( comments.value.length < 1 || comments.value.length > 150 ) {
            hasErrors = true;
            comments.classList.remove('good');
            comments.classList.add('bad');       
            err_comments.innerHTML = "<p>Comment has to be between 1 and 150.</p>";
        }            else {
            comments.classList.remove('bad');
            comments.classList.add('good');       
            err_comments.innerHTML = "";
        }
                    var email = document.getElementById('email');
                    var results = document.getElementById('results');
                    results.innerHTML = "here are your results first name: " + fname.value + " Last Name:" + lname.value + "email:" + email.value;
                  
    
    if(!hasErrors){
    console.log('displayblock');
    mainform.style.display = 'none';
    }
}







