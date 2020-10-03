var newh1= document.createElement("h1")
newh1.textContent="Welcome to my JS site"
document.body.append(newh1)

var newP= document.createElement("p")
newP.textContent="All of this was created with Javascript"
document.body.append(newP)



var newli= document.createElement("li");
newli.textContent="javascript"
var myList = document.getElementById("my-list")
myList.append(newli);

var newli2= document.createElement("li");
newli2.textContent="is"
var myList = document.getElementById("my-list")
myList.append(newli2);

var newli3= document.createElement("li");
newli3.textContent="frustrating"
var myList = document.getElementById("my-list")
myList.append(newli3);

