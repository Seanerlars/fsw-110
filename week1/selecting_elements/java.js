
var hello = document.getElementById("hello").textContent;


var para = document.createElement("h1");
var node = document.createTextNode("Header");
para.appendChild(node);

var element = document.getElementById("hello");
element.appendChild(para);