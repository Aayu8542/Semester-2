let newheading = document.getElementById("heading");
newheading.textContent = "DOM Manipulation in JavaScript ";
newheading.style.color = "blue";
newheading.style.fontSize = "30px";

let paragraph = document.getElementsByClassName("paragraph");
paragraph[0].innerHTML = "<strong> This paragraph has been modified using Javascript DOM Manipulation</strong>";
paragraph[0].style.color = "green";
paragraph[0].style.fontSize = "20px";

let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div element created using JavaScript.";
newDiv.style.color = "red";
newDiv.style.textAlign = "center";
newDiv.style.fontSize = "18px";
document.body.appendChild(newDiv);