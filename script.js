function menuIconAnimate(x) {
    x.classList.toggle("change");
}

// var x;
// x = 69;
// x = x + 1;
// document.getElementById("resume-container").innerHTML = x;

function increaseResume(x) {
    document.getElementById(x).style.width = "100%";
    document.getElementById(x).style.height = "100%";

    // document.getElementById(x).style.transition-duration = "0.2s";
}

function decreaseResume(x) {
    document.getElementById(x).style.width = "98%";
    document.getElementById(x).style.height = "98%";
}

function overlayOn(x) {
    document.getElementById(x).style.display = "block";
}

function overlayOff(x) {
    document.getElementById(x).style.display = "none";
}

var galleryIndex = 0;
var timer;

showImage(0);

function showImage(imgNum) {
  clearInterval( timer );

  var move_left = imgNum * -100;
  var dotId = "dot-" + imgNum.toString();
  var dots = document.getElementsByClassName("slider-dot")

  for (i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "transparent";
  }

  document.getElementById(dotId).style.backgroundColor = "white";
  document.getElementById("gallery-slides").style.left = move_left + "%";

  galleryIndex = imgNum;

  var nextIndex;
  if ( ( galleryIndex + 1 ) == dots.length )
  {
    nextIndex = 0;
  }
  else {
    nextIndex = galleryIndex + 1;
  }
  timer = setInterval( showImage, 8000, nextIndex );
}
