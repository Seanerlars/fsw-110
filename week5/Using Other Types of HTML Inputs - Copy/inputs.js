


document.firstlast.addEventListener("submit", function(e){
  e.preventDefault()
  var text = document.firstlast.text1.value
  var text2 = document.firstlast.text2.value
  var age = document.firstlast.age.value
  var

  alert(text + text2 + age)
})

document.flights.addEventListener("submit", function(e){
  e.preventDefault()
  var flights = document.flights.flight
 
  var checkedFlights = []

  for (var i = 0; i < flights.flight.length; i++){
  
    if(flights[i].checked){
   
      checkedFlights.push(flights[i].value)
    }
  }
  console.log(checkedFlights)
})

