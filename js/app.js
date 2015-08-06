//Eventually I want to add the ability for the code to check for the lead-in URL
//and parse the string into getting a full new URL
//The C drive URL for now only works on my desktop
//Laptop version will be added and commented out so I can work on this back and forth during Code Louisville
//Will replace with live site code when site is uploaded

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
              window.location = "file:///C:/Users/Leigh's PC/Documents/Coding/Oculoids_Site/" + pageID + ".html";
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
            window.location = "file:///C:/Users/Leigh's PC/Documents/Coding/Oculoids_Site/" + pageID + ".html";
          }
            break;
    }
};
