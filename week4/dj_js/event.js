var box = document.getElementById("box");


box.addEventListener("mouseover", function (){
    console.log("its been clicked")
box.style.backgroundColor = "blue"})


box.addEventListener("mousedown", function (){
    console.log("its been clicked")
box.style.backgroundColor = "red"})


box.addEventListener("mouseup", function (){
    console.log("its been clicked")
box.style.backgroundColor = "yellow"})


box.addEventListener("dblclick", function (){
    console.log("its been clicked")
box.style.backgroundColor = "green"})


box.addEventListener("mouseover", function (){
    console.log("its been clicked")
document.body.style.backgroundColor = "orange"})

document.addEventListener("keyup", function (event){
    if (event.key = "b")
    box.style.backgroundColor = "blue";
    if (event.key = "r")
    box.style.backgroundColor = "red";
    if (event.key = "y")
    box.style.backgroundColor = "yellow"
    if (event.key = "g")
    box.style.backgroundColor = "green"
    }
)




 

  
   

  
  



 