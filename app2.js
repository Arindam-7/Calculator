let screen = document.querySelector(".screen");
let operator = document.querySelectorAll(".operator-btn");
let number = document.querySelectorAll(".number-btn");
let clearBtn = document.getElementsByClassName("clear-btn");
let backspaceBtn = document.getElementsByClassName("backSpace");
let equalBtn = document.getElementsByClassName("equals-btn");



// Event Listeners

clearBtn[0].addEventListener("click", () => (screen.textContent = "") );
backspaceBtn[0].addEventListener("click", backspace);
equalBtn[0].addEventListener("click", equalFunction);



// operation

function operate(operator, number1, number2){

    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "-") {
        return number1 - number2;
    } else if (operator === "×") {
        return number1 * number2;
    } else if (operator === "/") {
        return number1 / number2;
    } else {
        return;
    }

}



function getInput(e) {

    // empty screen can't be filled with '*' and '/' before inputting at least one number
    if (e.target.innerHTML === "*" || e.target.innerHTML === "/" && screen.textContent === "") {
        return;
    }

    // taking input
    let input = screen.textContent;
    let inputFinal = input + e.target.innerHTML;
    screen.textContent = inputFinal;
}


number.forEach((numbers) =>
    numbers.addEventListener("click", (e) => getInput(e))
);

operator.forEach((operators) =>
    operators.addEventListener("click", (e) => getInput(e))
);


// Backspace Function

function backspace() {
    let input = screen.textContent;
    let finalInput = input.slice(0, -1);
    screen.textContent = finalInput;
}




// result

function equalFunction() {
    let displayData = screen.textContent.split("");
    let operatorPosition, operation, firstNumber, lastNumber;
    for (i=0; i<displayData.length; i++) {

        if ( displayData[i] === "+" ||
             displayData[i] === "-" ||
             displayData[i] === "×" ||
             displayData[i] === "/"
            ) {

                 operatorPosition = displayData.indexOf(displayData[i]);
                 operation = displayData[i];
                 firstNumber = parseFloat(displayData.slice(0, operatorPosition).join(""));
                 lastNumber = parseFloat(displayData.slice(operatorPosition+1).join(""));

             }
    }

    // displaying output

    let answer = operate(operation, firstNumber, lastNumber);
    let finalAnswer = answer;
    if (finalAnswer.toString().includes(".")){
        screen.textContent = finalAnswer.toFixed(3);
    } else {
        screen.textContent = finalAnswer;
    }
    return answer;
}

