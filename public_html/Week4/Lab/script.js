/* 
 *We need to collect some data from the user. 
 *Please collect the following data. User input from email field 
 *and name field.  User Screen size, Browser information, page title. 
 * Collect the first 100 mouse coordinates the user makes on the page.
 * 
 * 
1.  Create a Json that will collect all this data. It’s as simple as a key:value pair.
2. Collect the user input value when they blur on the field
    a. Email
    b. User name
3. The user screen size, user agent and page title can be collected when 
the window loads.
    a. window.innerHeight
    b. window. innerWidth
    c. window. navigator. userAgent
    d. document.title
4. Collect the user mouse cords by putting them into an array when the 
user moves there mouse on the document. One for the mouseX, and one for 
the mouseY.  Once the Array has a length of 100 you can stop pushing the 
mouse cords into the array.
    a. e.clientX
    b. e.clientY
    c. jsonVariable.ArrayVariable.push(e.clientX) (Do not name your variables this sample)

 */
var data = {
              "mouseX" : [],
              "mouseY" : [],   
               "email" : '',
               "fullname" : '',
               "innerHeight" : [],
               "innerWidth" : [],
               "userAgent" : [],
               "title" : [],
            };
            function datagather(){
                data.innerHeight.push(window.innerHeight);
                data.innerWidth.push(window.innerWidth);
                data.userAgent.push(window.navigator.userAgent);
                data.title.push(document.title);
                
            }
            window.onload=datagather();
         
                function trackMouse(e) {
                data.mouseX.push(e.clientX);
                console.log(e.clientX);
                data.mouseY.push(e.clientY);
                console.log(e.clientY);
                
                if ( data.mouseX.length > 100 ) {
                    document.removeEventListener('mousemove', trackMouse);
                }
                
            }
  
            
            
            var fullname = document.getElementById('fullname');
            fullname.addEventListener('blur', saveName);
            
            var email = document.getElementById('email');
            email.addEventListener('blur', saveEmail);
         
         function saveEmail() {
                data.email =  email.value;
            }
            function saveName() {
                data.fullname =  fullname.value;
            }



function showResults() {
    console.log(data);
}



var results = document.getElementById('showResults');

results.addEventListener("click", showResults);
document.addEventListener('mousemove', trackMouse);



