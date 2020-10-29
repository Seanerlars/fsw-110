
// submitForms = function(){
//   document.forms["firstlast"].submit().value;
//   document.forms["flights"].submit();
//   document.forms["gender"].submit();
//   document.forms["allergy"].submit();
// }

 document.firstlast.addEventListener("submit", function(e){
  e.preventDefault()
  var text = document.firstlast.text1.value
  var text2 = document.firstlast.text2.value
  var age = document.firstlast.age.value

  alert("First Name: " + text + " Last Name: " + text2 + " Age: " + age)
})

document.flights.addEventListener("submit", function(e){
  e.preventDefault()
  var flights = document.flights.place.value
  var checkedFlights = []
  for (var i = 0; i < flights.place.length; i++){
    if(flights[i].checked){
      checkedFlights.push(flights[i].value)
    }
  }

  alert(flights + checkedFlights)
})

document.genders.addEventListener("submit", function(e){
  e.preventDefault()
  var genders = document.genders.gender
  var checkedGenders = []
  for (var i = 0; i < genders.gender.length; i++){
    if(genders[i].checked){
      checkedGenders.push(genders[i].value)
    }
  }

  alert(checkedGenders)
})

document.sick.addEventListener("submit", function(e){
  e.preventDefault()
  var allergies = document.sick.allergy
  var checkedAllergies = []
  for (var i = 0; i < sick.allergy.length; i++){
    if(sick[i].checked){
      checkedAllergies.push(allergies[i].value)
    }
  }

  alert(checkedAllergies)
})

