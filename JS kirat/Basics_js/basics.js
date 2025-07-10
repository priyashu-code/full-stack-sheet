// For taking input as promt does not work in node js it works in online ispect only
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("Hello how are you:");
readline.question("Please enter your name:",(userInput)=>{
    console.log(userInput + ",thanks for visiting.");
    readline.close();
});
