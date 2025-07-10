// function calculator(a, b, type){
//     if(type == "sum"){
//         return a+b;
//     }
    
//     if(type == "sub"){
//         if(a>=b)return a-b;
//         else return b-a;
//     }
// }

function calculator(a,b,arith){
    const ans = arith(a,b);
    return ans;

}

function sum(a,b){
    return a+b;

}



const ans = calculator(1,2,sum);
console.log(ans);