var dateInput = document.querySelector('#date');

var today = new Date().toISOString().split('T')[0];

dateInput.setAttribute('min', today);

var sala;
var dateMain;

function chooseOption(number){
    const date = document.querySelector(".date");
    const choose = document.querySelector(".choose");
    sala = number

    choose.style.display = "none";
    date.style.display = "flex";
}

function chooseDate(){
    if(dateInput.value != ""){
        const date = document.querySelector(".date");
        const time = document.querySelector(".time");
        
        dateMain = dateInput.value;

        date.style.display = "none";
        time.style.display = "flex";
    } else{
        const err = document.querySelector("#err");
        err.style.display = "block";
    }
}

function chooseTime(timeInput){
    const time = document.querySelector(".time");
    const final = document.querySelector(".final");

    time.style.display = "none";

    const pFinal = document.querySelector("#pFinal");
    console.log(dateMain);
    pFinal.innerHTML = "Sala " + sala + " reservada para o dia " + dateMain + " as " + timeInput + " horas";
    final.style.display = "flex";
}