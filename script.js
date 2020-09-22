sum = function() {

    console.log("sum");

    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    //console.log(number1 + number2);
    document.getElementById("result").innerHTML = parseInt(number1) + parseInt(number2);

};

sub = function() {

    console.log("sub");

    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    //console.log(number1 + number2);
    document.getElementById("result").innerHTML = parseInt(number1) - parseInt(number2);

};

mult = function() {

    console.log("mult");

    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    //console.log(number1 + number2);
    document.getElementById("result").innerHTML = parseInt(number1) * parseInt(number2);

};

div = function() {

    console.log("div");

    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    //console.log(number1 + number2);

    if(parseInt(number2) != 0){
        document.getElementById("result").innerHTML = parseInt(number1) / parseInt(number2);

    }
    else{
        document.getElementById("result").innerHTML = "ungueltige Zahlen"
    }

};
