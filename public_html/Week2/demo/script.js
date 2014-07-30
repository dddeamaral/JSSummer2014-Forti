
    var email = document.getElementById('email');

    console.log(email.value);
    
    
    function submit(){
        console.log(email.value);
        
        if ( !email.value.length ) {
            console.log('email is empty')
        } else {
            console.log('email is not empty')
        }
        
    }
    
    
    
    //method
    function rude( str ) {
        console.log(str);
    }

rude('never gonna give you up, never gonna let you down.');
