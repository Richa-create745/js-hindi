//More on objects
const tinderUser = new Object(); //way of creating a singleton object
//now a non singleton object
const tinder = {};
//adding some properties
tinderUser.id = "123abc";
tinderUser.name = "samay";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
console.log(tinder);

const regularUser = {
    email: "ruhan",
    fullname: { // creating object insde object
        userfullname: {
            firstname: "richa",
            lastname: "sharma"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.lastname) //gives output => sharma
//here 1,2,3,4 are the keys similar to that of email,fullname, etc in object regular user
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
//combining them
//creates some problem
//  const obj3 = {obj1, obj2}
//   console.log(obj3);

//so Use instead

// combining or copying 
// see how results r differnet from previous ones
const obj3 = Object.assign({}, obj1, obj2); // passing an empty parenthesis to get combined value,,, not imp but good to pass
console.log(obj3);
// study more about object.assign on mdn web docs
//console.log(obj1)
//console.log(obj3 === obj1)


///but we  will ue something else....i.e., spreading n combine them in obj4
const obj4 = { ...obj1, ...obj2 }
console.log("HYE")
console.log(obj4)

//jab bhi database se value aegu toh vo kuch aise aegi...liekly array of object
const USERS = [
    { //ye ek object h inside array...aise or bhi objects ho skte h within an array
        id: 1,
        email: "r@gamil.com"

    },

    {
        name: "richa",
        grade: 'A',
        email: "s@gmail.com"
    }
]
//now accessing the value
// as users is an array so use sq.braclets with index n then as at index there is an object , so ab us object kisi ek entity ko use krne k liye hum (.) use krege with entity nam elike email or id or name etc.

console.log(USERS[1].email);

console.log(tinderUser);
//accessing all jey og=f object - tinder user
console.log(Object.keys(tinderUser)) //or output array from me aega in sq. brackets
//similary do for values
console.log(Object.values(tinderUser));
//similarly length
console.log(tinderUser.length);
// another --entries
console.log(Object.entries(tinderUser)); // har key-value ko array m kr deat h ye

// suppose hum objects m  koi value s=nikal rhe h,,sometimes ghat value dont exist that can cause crash system,, so we can simpy ask wjther value exist or not
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //asking to tinderuser obj.



// de-structuring objects
const course = {
    coursename: " js in hindi",
    courseprice: "999",
    courseInstructor: "hitesh"
}
// using these values
//course.courseInstructor ;
//OR BETTER WAY
//   const {courseInstructor} = course // here course represents ki kaha s value extract krni h
//    console.log(courseInstructor) //now no need to write course.courseinstructor again n again

// or hum courseinstructor/or any otherkey ko kuch naam bhi de skte h for more convenience

const { courseInstructor: instructor } = course;
console.log(instructor);

//talking a bit about APIs =?jba hume apna kaam kisi or se karvana ho like in a hotel we order something from menu so khana kse bnega kse aega its not our headache,,that basically a kind of documentation of APIs, similrl if we lgin to google its not our responsibility ki google kse user ko verify  krega n etc

/*  API is basically kuch values hoti h jo backend s ati h,,uhne kse likhna h is called AP..
phle vo values XML structure (was complex) se ati thi or ab ati h JSON me
*/
//lets see how JSON looks like objects

// { //JSON
//     "Name" : "mohit",
//     "courseName" : "jshindi",
//     "price" :"free"

// }

// and,, sometime API can be in form of arrays too
[ //=>this represent an array
    {},
    {},
    {}
]
//go to randomuser.me API...copy the link of api from how to use section ,,use google p dalke result copy kro then JSON Formatter m uprlod kro then do formator beautify after that we will see code this code can be further get converted to tree struucture or text or more

