// const user1 =[1,2,3];//array of number

// const user2=["a","b"];//array of string

// const user={
//     FirstName: "Priyanshu",
//     gender: "male"
// }  //it's a object

// How to access these
// console.log(user["FirstName"])
// console.log(user["gender"])

// array of objects

const alluser=[
    {
       FirstName:"priyanshu",
       gender:"Male",
       otherdata:{
        age:23,
        course:"Btech"
        }

     },
     
     {
        FirstName:"Priya",
        gender:"Female",
        otherdata:{
            age:25,
        course:"Mca"
        }
     }
]

// [] this box is used for array
// {} for objects

for(let i=0;i<alluser.length;i++){
    if(alluser[i]["gender"]=="Male"){
        console.log(alluser[i]["FirstName"]);
    }
}

//u have to go more nested depending upon which data you want

for(let i=0;i<alluser.length;i++){
    if(alluser[i]["otherdata"]["course"]=="Mca"){
        console.log(alluser[i]["FirstName"]);
    }
}