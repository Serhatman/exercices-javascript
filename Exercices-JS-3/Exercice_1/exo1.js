document.getElementById("image1").onmouseover = function() {mouseOver()};
document.getElementById("image1").onmouseout = function() {mouseOut()};

function mouseOver() {
    console.log(document.getElementById("image1"));
    document.getElementById("image1").style.border = "10px dotted red";
    console.log();
}

function mouseOut() {
  document.getElementById("image1").style.border = "none";
}
console.log(mouseOver);