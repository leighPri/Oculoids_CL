document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: //left
            console.log("left");
            window.location = "http://www.google.com";
            break;
        case 39: //right
            $('#nextComic').click();
            console.log("right");
            break;
    }
};
