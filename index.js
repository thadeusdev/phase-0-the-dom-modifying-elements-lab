// Write your code here!
const element = document.getElementById("main");
element.remove();

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.innerHTML = "YOUR-NAME is the champion";