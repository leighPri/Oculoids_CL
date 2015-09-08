//creates lightbox
//removes lightbox class when page goes over a certain size
  //points <a> to next page and its comic when over a certain size

jQuery(document).ready(function($) {

	$('.lightbox_trigger').click(function(e) {

		//prevent default action (hyperlink)
		e.preventDefault();

		//Get clicked link href
		var image_href = $(this).attr("href");

		if ($('#lightbox').length > 0) { // #lightbox exists

			//place href as img src value
			$('#content').html('<img src="' + image_href + '" />');

			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
		}

		else { //#lightbox does not exist - create and insert (runs 1st time only)

			//create HTML markup for lightbox window
			var lightbox =
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
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

var sizeCheck = $(window).width();
console.log(sizeCheck);
$(window).bind('resize',function(event){
	if ($(window).width() >= 640) {
		
	}
};
