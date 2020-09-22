document.addEventListener('DOMContentLoaded', (event) => {
    var value_pointer = "value1";
    var operator ;
    var buttons= document.getElementsByClassName("btn");
    for(var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click", getValue)
    }


    function getValue(e){
        var raw_value = e.target.innerText;
        if (raw_value == "*" || raw_value == "+") {
            operator = raw_value;
            document.getElementById("operator").innerText += raw_value;
            value_pointer = "value2";
        } else {
            document.getElementById(value_pointer).innerText += raw_value;
        }

        console.log(raw_value)
}

var submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click", calculate)
    var clearBtn = document.getElementById("clear")
    clearBtn.addEventListener("click", clear)

function calculate(){
    var value1 = parseInt(document.getElementById("value1").innerText);
    var value2 = parseInt(document.getElementById("value2").innerText);
    if(operator == '+'){

        document.getElementById("result").innerText = value1 + value2;
    }
    else if(operator == '*'){
        document.getElementById("result").innerText = value1 * value2;
    }

    //Nochmals initialisieren
    value_pointer = "value1";

}

    function clear(){
        document.getElementById("value1").innerText = "";
        document.getElementById("value2").innerText = "";
        document.getElementById("result").innerText = "";
        document.getElementById("operator").innerText = "";
    }
});


