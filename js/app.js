//get url
var fullUrl = window.location.href;
console.log(fullUrl);
var htmlIndex; //holds index location of whatever.html beginning
var shortUrl; //holds shortened url

//gets index place for pageID.html and searches for the index for index.html if not found
htmlIndex = fullUrl.indexOf(pageID);
  if (htmlIndex == -1) {
    htmlIndex = fullUrl.indexOf("index");
  }
  console.log(htmlIndex);

//splices url to get final string
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
