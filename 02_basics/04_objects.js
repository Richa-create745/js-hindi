//More on objects
const tinderUser = new Object(); //way of creating a singleton object
//now a non singleton object
const tinder ={};
//adding some properties
tinderUser.id = "123abc";
tinderUser.name = "samay";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
console.log(tinder);
 
const regularUser = {
    email: "ruhan",
    fullname: { // creating object insde object
       userfullname : {
         firstname:"richa",
        lastname : "sharma" 
    }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.lastname) //gives output => sharma
const obj1 ={1:"a",2: "b"}
const obj2 ={3: "a", 4: "b"}
//combining them
 // const obj3 = {obj1, obj2}
  
 // combining or copying
 const obj3 =Object.assign({},obj1,obj2); // passing an empty parenthesis to get combined value,,, not imp but good to pass
 console.log(obj3)