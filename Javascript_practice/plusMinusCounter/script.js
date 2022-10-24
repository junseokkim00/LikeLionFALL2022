value = 0;

function add() {
    value++;
    document.getElementById("label").innerHTML ="The value is "+ value;
}

function subtract() {
    value--;
    document.getElementById("label").innerHTML = "The value is " + value;
}