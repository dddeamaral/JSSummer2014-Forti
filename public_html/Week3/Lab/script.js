/* 
 Create a simple Ad that will display on the page as just text in a div. 
 The Ad will be random using Math.random from the array length.

Requirements:
1. Create an array that has 5 ad JSON objects.
2. Use Math.random() with the array.length to get a random index.
3. Display the ad using innerHTML.
4. Replace the document.title with the ad followed by three periods …
5. Please add comments to explain how the code works and what it’s doing.
   Hint: No need to go crazy, just general things on the flow, one line
         comments are fine.

 */
var div = document.getElementById('ad');        //gets the Id "ad" and stores it into div
var arrayD = [];        //name and variable of my array

arrayD.push ({"title": 'this is sick', "description": 'Common Cold' });
arrayD.push ({"title": 'this is not sick', "description": 'Drugs'});            //18 to 22 are my array elements
arrayD.push ({"title": 'this could be sick', "description" : 'Skydiving'});
arrayD.push ({"title": 'call a doctor, this is sick',"description":'Ebola'});
arrayD.push ({"title": "I'm so sick I don't even know what to do with myself", "description":'Cholera'});

function addperiods( title ){
    document.title = title + '...';
    
};                      //function to add periods and replace the title

function rand( max ){               //function to get a max
               return Math.floor(Math.random()*max);
           }
           var randindex = rand(arrayD.length);    //this stores the element it chose into a variable
           
addperiods(arrayD[randindex].title);        //this accesses the array and replaces the title
div.innerHTML = arrayD[randindex].description;  //this is the innerHTML to chance the description of the div in the HTML.



