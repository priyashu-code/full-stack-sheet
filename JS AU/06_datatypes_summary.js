/*
Kis tarah se data ko memory main rakha and use access kiya hai
according to it hi data types 2 tarah ke hain primitive and non-primitive

*/

/**
 * Primitive: 7 types
        * These are call by value means inka copy main orginal address nahi diya jata
        *String,Number,boolean,NUll,UNdefined,Symbol(used to make any value unique),Bigint(badi values jo int cover na kar paye)

   Reference Type(Non primitive): 
        array,Objects,functions

 */

/*
JavaScript is a dynamically typed language — not a statically typed one.
  
    What "dynamically typed" means:
            You do not declare variable types explicitly.

            Variables can change type at runtime.

            Type checking is done while the code runs, not during compilation.

    and in statically typed language like(java,c++,typescript ) 
    you must declare the type
*/

/*
     Symbol ka return type jo hai wo ek data type hi hai jise hum
    symbol kehte hain.
    Symbol ka kaam hi yahi hai ki even if you give it same value
    phir bhi wo same nahi hongi as in below exm.

*/
const id =Symbol('123')
const id1 =Symbol('123')

console.log(id === id1)


const heros =["shaktiman","naagraj",'doga'];
// array in js

let myobj={
    Firstname:"priyanshu",
     age:22
}
/* inside these {  } we declare objects and  we can store them inside any
variable as myobj*/

// declaring function and storing in variable

let myfunction = function(){
    console.log("hello");
}

const a =null
//if you check it's data type it will be a object
console.log(typeof a)

// And ye jitne bhi non primitive hai inka datatype object hi aata hai
