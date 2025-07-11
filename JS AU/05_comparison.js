console.log("2">1)//js converted 2 to a number automatically

/*
 JS is not that strict so it compared different data types
 but don't do it as it gives ambiguous results and other languages
 don't even allow d/f data type comparison.
*/

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

/*But why null > 0 false and null >= 0 is true 
it's just because js have differet working for equality and > < 
these operators in last case js converted null to 0.
 */

console.log(undefined == 0) //false
/*Do any type of comparison it will be false
 */

// === it does not only check values but do it strictly as it also see their data types


console.log("2"=== 2)
console.log("2"== 2)
/*
As it does not convert so it gives false in strict check
*/

// So never use such type of conversions
