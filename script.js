const answerP = document.getElementById("answerP");
const numberP = document.getElementById("numberP");

const num1Div = document.getElementById("num1Div");
const num2Div = document.getElementById("num2Div");
const num3Div = document.getElementById("num3Div");

const goodPickP = document.getElementById("goodPickP");
const badPickP = document.getElementById("badPickP");

const starDiv = document.getElementById("starDiv");

let numbersArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let numbers2Arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numberRolled;
let goodPick = 0;
let badPick = 0;

let firstNum;
let secondNum;
let thirdNum;

function numberGenerator(){
    firstNum = Math.floor(Math.random()*10);

    do{
        secondNum = Math.floor(Math.random()*10);
    } while(firstNum == secondNum)

    do{
        thirdNum = Math.floor(Math.random()*10);
    } while(firstNum == thirdNum || secondNum == thirdNum)

    num1Div.textContent = firstNum;
    num2Div.textContent = secondNum;
    num3Div.textContent = thirdNum;

    random = Math.floor(Math.random()*3);

    switch(random){
        case 0:
            numberRolled = numbers2Arr[firstNum];
            numberP.textContent = numbersArr[firstNum];
            break;
        case 1:
            numberRolled = numbers2Arr[secondNum];
            numberP.textContent = numbersArr[secondNum];
            break;
        case 2:
            numberRolled = numbers2Arr[thirdNum];
            numberP.textContent = numbersArr[thirdNum];
            break;
    }
}

num1Div.onclick = function(){
    if(firstNum == numberRolled){
        goodPickFunction();
    } else {
        badPickFunction();
    }
}

num2Div.onclick = function(){
    if(secondNum == numberRolled){
        goodPickFunction();
    } else {
        badPickFunction();
    }
}

num3Div.onclick = function(){
    if(thirdNum == numberRolled){
        goodPickFunction();
    } else {
        badPickFunction();
    }
}

function goodPickFunction(){
    goodPick++;
    goodPickP.textContent = goodPick;
    answerP.textContent = "Good choice";
    numberGenerator();

    if(goodPick % 5 == 0){
        starFunction();
    }
}

function badPickFunction(){
    badPick++;
    badPickP.textContent = badPick;
    answerP.textContent = "Bad choice";
}

function starFunction(){
    let star = document.createElement("img");
    star.src = "./star.png";
    starDiv.appendChild(star);
}

numberGenerator();