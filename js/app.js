//capture .prev and .next elements
//assign their attributes to pageID-- + ".html" and pageID++ + ".html" respectively.
//Figure out why the button press bits
var setPrev = function(link) {
  if (firstPage){
    $(link).click($(link).attr("href", "1.html"));
  } else {
      var tempID = pageID;
      tempID--;
      tempID += ".html";
      $(link).click($(link).attr("href", tempID));
    }
}

var setNext = function(link){
  if (lastPage){
    $(link).click($(link).attr("href", "index.html"));
  } else {
      var tempID = pageID;
      tempID++;
      tempID += ".html";
      $(link).click($(link).attr("href", tempID));
    }
}

setPrev("#prevComic");
setPrev("#prevComic2");
setNext("#nextComic");
setNext("#nextComic2");



//get url
var fullUrl = window.location.href;
var htmlIndex; //holds index location of whatever.html beginning
var shortUrl; //holds shortened url

//gets index place for pageID.html and searches for the index for index.html if not found
htmlIndex = fullUrl.indexOf(pageID + ".html");
  if (htmlIndex == -1) {
    htmlIndex = fullUrl.indexOf("index.html");
  }

//splices url to get final string
shortUrl = fullUrl.slice(0,htmlIndex);

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: //left
            //Check boolean firstPage to see if it's true
            if (firstPage){
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
          if (lastPage){
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

// $(".prev").click(event){
//   event.preventDefault();
//   if (firstPage){
//     alert("You're already at the first comic!");
//   } else {
//     pageID--;
//     pageID += ".html";
//     $(".prev").attr('href',pageID);
//     $(".prev").trigger('click');
//   }
// }
