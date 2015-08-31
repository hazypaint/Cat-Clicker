//global variables
var clicks = 0;
var text = document.getElementById("text");

// Function to change the content of text
function modifyText() {
  clicks += 1;

  if (text.firstChild.nodeValue == "0") {
    text.firstChild.nodeValue = "error";
  } else {
    text.firstChild.nodeValue = "Clicks: " + clicks;
  }
}

// add event listener to picture
var elem = document.getElementById("pic");
elem.addEventListener("click", modifyText, false);




