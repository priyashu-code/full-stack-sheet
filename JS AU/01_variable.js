const accountId = 144553;
let accountEmail = "Piyanshu@google";
var accountPassword = "xyz";

// console.table([accountId,accountEmail,accountPassword]);
// account table can be used to show in tabular form

/* We don't use var because initial days js does not used to work as per 
bloack scope so var used to create a issue as if single variable is declared multiple times
*/

accountCity = "jaipur"
/*so in js without even data type variable can store 
and reserve memory but it's not recommended
  */
// console.log(accountCity);

let accountState;
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
/*
If you make a variable but does not assign it any vale then
js consider it as undefined.
*/