

// const isEven = (n) => {
//     return n % 2 == 0;
// }   
// let printMsg = (evenFunc, num) => {
//     const isNumEven = evenFunc(num);
//     console.log(`The number ${num} is an even number: ${isNumEven}.`)
// }
// printMsg(isEven, 4); 



let input=require("readline-sync")
let user = input.questionInt("enter num1....")
function greet(){
    if (user>18){
        return("you are eligible")
    }
    else{
        return("not eligible")
    }
}
console.log(greet())
// today i did this question