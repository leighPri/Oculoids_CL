//This file is a little messy but basically it:
//sets the #comments div to contain relevant comments from JSON file
//sets both sets of prev/next buttons to relevant pages based on pageID
//activates lightbox feature on small devices but above a certain window size
  //above 640px clicking on the comic will instead take you to the next one
//captures left and right arrow key presses and moves to the previous or next
  //comic accordingly

var fullUrl = window.location.href; //holds the full url for location parsing later

//ajax call to populate comment div
var commentcall = $.ajax("js/comments.json", {
    success: function(data) {
      $.each(data, function() {
        if (this.pageIDcheck === pageID) {
          var headerHolder = "<h1 id='commenttitle'>" + this.header + "</h1>";
          var dateholder = "<h3 id='commentdate'>" + this.date + "</h3>";
          var commentHolder = "<p>" + this.comment + "</p>";
          $('#comments').html(headerHolder + dateholder + commentHolder);
        }
      });
    }
});

//sets prev links to be one less than the pageID variable
var setPrev = function(link) {
  if (firstPage){
    $(link).click($(link).attr("href", "1.html"));
  } else {
      var tempID = pageID;
      tempID--;
      $(link).click($(link).attr("href", tempID + ".html"));
    }
}

//sets next links to be one more than the pageID variable
var setNext = function(link){
  if (lastPage){
    $(link).click($(link).attr("href", pageID + ".html"));
  } else {
      var tempID = pageID;
      tempID++;
      tempID += ".html";
      $(link).click($(link).attr("href", tempID));
    }
}


//gets index place for pageID.html and searches for the index for index.html if not found
var htmlIndex = fullUrl.indexOf(pageID + ".html");
  if (htmlIndex == -1) {
    htmlIndex = fullUrl.indexOf("index.html");
  }

//splices url to get final string
var shortUrl = fullUrl.slice(0,htmlIndex);

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

//creates lightbox
//prevents lightbox from functioning over certain window size
	//points <a> to next page instead
$(document).ready(function($) {
	$('.lightbox_trigger').click(function(e) {
		//prevent default action (hyperlink)
		e.preventDefault();

		//Get clicked link href
		var image_href = "img/" + pageID + ".png";

		if ($(window).width() > 640) {
			if (lastPage) {
        window.location = shortUrl + "index.html";
			} else {
				var tempIDTwo = pageID;
				tempIDTwo++;
        window.location = shortUrl + tempIDTwo + ".html";
		}
	} else if ($('#lightbox').length > 0) { // #lightbox exists
			//place href as img src value
			$('#content').html('<img src="' + image_href + '" />');
			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
		}

		else { //#lightbox does not exist - create and insert (runs 1st time only)
			//create HTML markup for lightbox window
			var lightbox =
			'<div id="lightbox">' +
				'<p>Click anywhere to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
				'</div>' +
			'</div>';
			//insert lightbox HTML into page
			$('body').append(lightbox);
		}
	});

	//Click anywhere on the page to get rid of lightbox window
	$('body').on('click', '#lightbox', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').hide();
	});
});

//executes above functions
setPrev("#prevComic");
setPrev("#prevComic2");
setNext("#nextComic");
setNext("#nextComic2");
commentcall();
