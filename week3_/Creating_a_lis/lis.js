
for (var i = 0; i < 10; i++){
    var newH1 = document.createElement("h1")
    newH1.textContent = "Hello World"
    document.body.append(newH1)
    newH1.style.fontSize = "45px"
    newH1.style.color="blue"}

var normalNames = [
    "Steve", 
    "Larry",
    "Joe",
    "Shirley",
    "Steph",
    "Nate",
    "Rick",
    "Emily",]

var nameList = document.getElementById("newnames")

for (var i = 0; i < normalNames.length; i++) {
    var newNames = document.createElement("li")
    newNames.textContent = normalNames[i]
    nameList.append(newNames)
    
}
