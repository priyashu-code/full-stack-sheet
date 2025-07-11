let score =33
console.log(typeof(score))

let score1 ="33"
console.log(typeof(score1))
/*it's also giving "33" as a string but for score i want only
numbers aas input */

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)
// it is converted to number

let score2="33abc"
valueInNumber=Number(score2)
console.log(typeof valueInNumber)
// it converting type of 33abc also to a number and it's a issue
console.log(valueInNumber)
/* But when i try to print that no. it gives NAN(not a number)[But type of NaN is number only]
so js has this issue there is no strict checking in js thats why people use
typescript.
*/

let score3=null
valueInNumber=Number(score3)
console.log(valueInNumber)
/*Now it converted null to 0 */

let score4=undefined
valueInNumber=Number(score4)
console.log(valueInNumber)

let id=1
let booleanchange = Boolean(id)
console.log(booleanchange)
/*
Converted to boolean
for string use STRING
for number is NUMBER
*/

let id1="HIy"
booleanchange = Boolean(id1)
console.log(booleanchange)

let id2=" "
booleanchange = Boolean(id2)
console.log(booleanchange)
/*
Used boolen everything else except empty string and 0 are true

*/