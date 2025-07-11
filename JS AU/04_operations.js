let value =3
let negvalue = - value
console.log(negvalue)

console.log(2**3)
// ** is used for power as 2^3 == 2**3

let str1 ="Hello"
let str2 =" ,hii"
let str3 = str1 + str2;
console.log(str3)
// string concatenations

console.log("1" + 2)
console.log("1" + "2")
console.log(1 + "2")
// it will concat as string

console.log("1"+2+2)
console.log(1+2+"2")
console.log(1+"2"+2)
/*why is it giving 122 as firstly 2+2=4 then conacat with  1
and in another case it's 1+2=3 32 as output how 
SO use paranthesis to be a good coder dont't write messy code

if first is string 
=> "1" + 2 → "12"   // string + number = string
=> "12" + 2 → "122" // again, string + number = string

=> 1 + 2 → 3        // number + number = number
=> 3 + "2" → "32"   // number + string = string

=> 1 + "2" → "12"   // number + string = string
=> "12" + 2 → "122" // string + number = string

The + operator can mean addition or string concatenation.
JavaScript evaluates + left to right.

*/

console.log(true)
console.log(+true) //1 as output
console.log(+"") //0 as output


