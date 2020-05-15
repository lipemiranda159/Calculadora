let op = "";
let oldValue = 0;

clickNumber = (value) => {
    let number = document.getElementById("number");
    number.value += value;
}

cleanInput = () => {
    let number = document.getElementById("number");
    number.value = "";
}

operation = () => {
    if (op.indexOf("*") >= 0) {
        let number = document.getElementById("number");
        number.value = parseFloat(number.value) * oldValue;

    } else
    if (op.indexOf("/") >= 0) {
        let number = document.getElementById("number");
        number.value = oldValue / parseFloat(number.value);

    } else if (op.indexOf("+") >= 0) {
        let number = document.getElementById("number");
        number.value = oldValue + parseFloat(number.value);

    } else if (op.indexOf("-") >= 0) {
        let number = document.getElementById("number");
        number.value = oldValue - parseFloat(number.value);

    }
}

setOldNumber = () => {
    let number = document.getElementById("number");
    oldValue = parseFloat(number.value);
}

multi = () => {
    op = "*";
    setOldNumber();
    cleanInput();
}

div = () => {
    op = "/";
    setOldNumber();
    cleanInput();
}

sum = () => {
    op = "+";
    setOldNumber();
    cleanInput();
}

minus = () => {
    op = "-";
    setOldNumber();
    cleanInput();
}