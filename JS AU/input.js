/*Prompt() does not work in node js or 
terminal either you have to call it with the help of HTML
or use it in browser for ide or local machine use  this */

const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});


readline.question("Enter name: ", (Firstname)=>{
    console.log(Firstname + " thanks.")
    readline.close();
})

//.questoin use it