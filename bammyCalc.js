let initialValue = "";

let presentValue = "";

let answerValue = "";

let mathOperators = "";

let decimalPoint = false;

function showMeThis(text){

    if(answerValue){
        presentValue = text;
        answerValue = "";
    } else {
        if(text === '.') {
            if(decimalPoint !=true){
                presentValue += text;
                decimalPoint = true;
            }
        } else {
            presentValue += text;
        }
    }
document.getElementById('screen').innerHTML = presentValue;
}

function mathCalc(operator) {
    if(!answerValue){
        initialValue = presentValue;
    } else {
        initialValue = answerValue
    }
    
    presentValue = "";

    decimalPoint = false;

    mathOperators = operator;

    answerValue = "";
    document.getElementById("screen").innerHTML ="";
}

function equalTo(){

    decimalPoint = false;

    initialValue = parseFloat(initialValue);
    presentValue = parseFloat(presentValue);

    switch(mathOperators){
        case "+":
            answerValue = initialValue + presentValue;
            break;
        case "-":
            answerValue = initialValue - presentValue;
            break;
        case "*":
            answerValue = initialValue * presentValue;
            break;
        case "/":
            answerValue = initialValue / presentValue;
            break;
        case "**":
            answerValue = (initialValue)*(initialValue);
            break;
        case "Math.sqrt":
            answerValue = Math.sqrt(initialValue);
            break;

        default:
            answerValue = presentValue;
    }

    initialValue = presentValue;

    document.getElementById("screen").innerHTML = answerValue;
}

function clearScreen(){
    initialValue = "";
    presentValue = "";
    answerValue = "";
    mathOperators = "";
    decimalPoint = false;
document.getElementById('screen').innerHTML = "0";
}

function backSpace(){
    let text = document.getElementById('screen').innerHTML;
    let newText = text.slice(0,-1);
    document.getElementById('screen').innerHTML = newText;
}



// function sum(a,b=0){
//     alert(a+b)
// };

// sum(0+0)
