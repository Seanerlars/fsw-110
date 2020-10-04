var nav = document.createElement('a');
var linkText = document.createTextNode("Home");
nav.appendChild(linkText);
nav.title = "Home";
nav.href = "web.html";
document.body.appendChild(nav);
linkText.style.textAlign="center"

var nav1 = document.createElement('a');
var linkText = document.createTextNode("About");
nav1.appendChild(linkText);
nav1.title = "About";
nav1.href = "http://example.com";
document.body.appendChild(nav1);

var nav2 = document.createElement('a');
var linkText = document.createTextNode("FAX");
nav2.appendChild(linkText);
nav2.title = "FAX";
nav2.href = "http://example.com";
document.body.appendChild(nav2);




var newH1 = document.createElement("h1")
newH1.textContent = "Buy, Sell, Trade"
document.body.append(newH1)

var newP = document.createElement("p")
newP.textContent = "Buy, Sell, Trade is a place to resell goods in the local comunity. Please use the forum respectfully. "
document.body.append(newP)


var listStart = document.createElement('ul');
var listElement1 = document.createElement('li');
var listElement2 = document.createElement('li');
var listElement3 = document.createElement('li');
listElement1.textContent = 'Take a picture of your item';
listElement2.textContent = 'Post the picture to the site';
listElement3.textContent = 'Watch your items get sold!';
listStart.appendChild(listElement1);
listStart.appendChild(listElement2);
listStart.appendChild(listElement3);
document.body.append(listStart);

function createFooter() {
    var footer="Contact us at 769-1564 for customer support";
    document.body.innerHTML=document.body.innerHTML+footer;
}
window.addEventListener("load", createFooter);


