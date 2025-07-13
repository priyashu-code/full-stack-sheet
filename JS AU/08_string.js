/*
In JS string can be used by both '' and ""
*/

const name="priyanshu"
const count=8

// console.log("value" +" "+count +" " + name  )
// This is old way to conacat string 

console.log(`hello my name is ${name} and my repo count is ${count}`)
/* `` backticks use karne se here comes 
string interpolation use ${} and insert variable in between
*/

const gameName = new String("PRiyanshu")
/*By new keyword we use objects of JS and STRING liya and uske 
constructor main value di PRiyanshu behind the scene first 
method bhi object hi invoke kar raha hai */

console.log(gameName)
console.log(gameName[0])
console.log(name[0])

console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))

console.log(gameName.indexOf('s'))//to check index of s
/*If similar hoga too ye first wale character ka index return 
kar dega */
