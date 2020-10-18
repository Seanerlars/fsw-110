function myFunction(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var x = +num1 + +num2;
    document.getElementById("trial").innerHTML = x;
}

function myFunction2(){
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var y = +num3 - +num4;
    document.getElementById("trial2").innerHTML = y;
}

function myFunction3(){
    var num5 = document.getElementById("num5").value;
    var num6 = document.getElementById("num6").value;
    var z = +num5 * +num6;
    document.getElementById("trial3").innerHTML = z;
}