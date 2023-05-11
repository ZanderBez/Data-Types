var firstName = "Zander";
let surname = "Bezuidenhout";
let age = 23;
const subject ="Development";

let message = "Hello " + firstName + " " + surname + ", You are " + age + " years old, and your subject is " + subject;

console.log(message)

let numOne = 12;
let numTwo = 22;
let numThree = 14;
let numFour = 49;

let total = numOne + numTwo / numThree *numFour;

let answer = "Output value is " + total;

console.log(answer)

let timmy = 10;
let susan = 25;
let timmyTax = 15 / 100;
let susanTax = 26 / 100;

let totalTimmy = timmy * timmyTax;
let totalSusan = susan * susanTax;

let taxTotal = totalTimmy + totalSusan;

let value = "The Tax Man will claim R" + taxTotal + " from timmy & susan";

console.log(value)

let john = 50;
let tim = 35;
let alfie = 70;
let gwen = 55;


let totalAverage = ( john + tim + alfie + gwen ) * 100 / 400

let average = " The Students average is " + totalAverage + "/100"

console.log(average)

let updateJohn = 50;
let updateTim = 35;
let updateAlfie = 70;
let updateGwen = 55;

updateJohn = updateJohn + 7;
updateTim = updateTim + 7;
updateAlfie = updateAlfie + 7;
updateGwen = updateGwen + 7;


let updateTotalAverage = ( updateJohn + updateTim + updateAlfie + updateGwen ) * 100 / 400



let updateAverage = " The Students updated average is " + updateTotalAverage+ "/100"

console.log(updateAverage)
