// function sum(a,b){
//     let result = a+b;
//     return result;
// }

// function displayresult(data){
//     console.log("Result of the sum is:"+data);
// }

// function displayresultPassive(data){
//     console.log("Result of the sum is:"+data);
// }

// you are only allowed to call one function after this
// How will you display result of sum

// const ans=sum(1,2);
// displayresult(ans);

// BUt you can call only one function so above is wrong as sum,disp both called
// you can't change anything in above code as like
// function sum(a,b){
//     let result = a+b;
//     return result;
//     displayresult(data)
// }
// as if i do this i havve to call sum and display will be automatically called


function sum(a,b,fnToCall){
    let result = a+b;
    fnToCall( result);
}

function displayresult(data){
    console.log("Result of the sum is:"+data);
}

function displayresultPassive(data){
    console.log("Result of the sum is:"+data);
}

const ans = sum(1,2,displayresult);
// now i can decide which function i want to call with this
// fntocall is not a keyword you can name is anything
// It's just an argument as a,b