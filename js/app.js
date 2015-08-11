//Eventually I want to add the ability for the code to check for the lead-in URL
//and parse the string into getting a full new URL
//The C drive URL for now only works on my desktop
//Laptop version will be added and commented out so I can work on this back and forth during Code Louisville
//Will replace with live site code when site is uploaded

//get url
var fullUrl = window.location.href;
console.log(fullUrl);
var htmlIndex; //holds index location of whatever.html beginning
var shortUrl; //holds shortened url

//go from 0 to found index to place that bit of the URL into a new string
//append that into the below code to replace the file:/// lines

//gets index place for pageID.html and searches for the index for index.html if not found
htmlIndex = fullUrl.indexOf(pageID);
  if (htmlIndex == -1) {
    htmlIndex = fullUrl.indexOf("index");
  }
  console.log(htmlIndex);


shortUrl = fullUrl.slice(0,htmlIndex);
console.log(shortUrl);

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: //left
            //Check boolean firstPage to see if it's true
            if (firstPage === true){
            //If yes, alert "You're already at the first comic!"
              alert("You're already at the first comic!");
            } else {
            //If not, -- pageID int variable and go to that location.html
              pageID--;
              window.location = shortUrl + pageID + ".html";
            }
            // This is the syntax for moving pages: window.location = "http://www.google.com";
            break;
        case 39: //right
          //Check boolean lastPage to see if it's true
          if (lastPage === true){
          //If yes, alert "You're already at the last comic!"
            alert("You're already at the last comic!");
          } else {
          //If not, ++ pageID int variable and go to that location.html
            pageID++;
            window.location = shortUrl + pageID + ".html";
          }
            break;
    }
};
