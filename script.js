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