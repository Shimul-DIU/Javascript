let container=document.getElementById("contain")
container.style.backgroundColor = "aqua";
let hedig=document.getElementById("h");
let firstheading=document.createElement("h1");
let text=document.createTextNode("This is heading 1");
firstheading.appendChild(text);
container.insertBefore(firstheading,hedig)