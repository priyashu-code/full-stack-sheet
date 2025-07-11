// Memory
/*it's of two types stack and heap
-> stack(used in primitive type)
-> Heap(used in non-primitive type)

    So, whenever stack mem. is used so we get copy of variable
whereas in heap we get direct memory reference of variable.

*/
let userOne = {
    email: "user@google.com"
    ,upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Priyanshu@google.com"

console.log(userOne.email)
console.log(userTwo.email)

// both emails are changed bcos heap is used