//Global variable
let firstNumber;
let operator;
let secondNumber;
let displayNumber;

//Functions for the principal opetations
function add(a,b){
    return a+b;
};
function subtract(a,b){
    return a-b;
};
function multiply(a,b){
    return a*b;
};
function divide(a,b){
    return a/b;
};

//Function that returns the operations results based on the operator
function operate(){
    if(operator=="+"){
        displayNumber=add(a,b);
    } else if(operator=="-"){
        displayNumber=subtract(a,b);
    } else if (operator=="*") {
        displayNumber=multiply(a,b);
    } else if(operator=="/") {
        displayNumber=divide(a,b);
    } else {
        displayNumber="Invalid operator."
    }
}
