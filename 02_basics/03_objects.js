/// there re two ways of declaring an object like 1.as a literal & 2. as a constructor

// singleton =>   a kind of object jo poori applicationme sirf ek hi br bnta hai
//eg => 50-60 employees working in a big company uses the same printer...anyone who gives command goes to the same printer..
// koi apna alg printer nhi khareed ta hai,,sb ek hi resource ko share krte h
//always formed by constructor 


//creating object
//======> const JsUser ={}
//OR .other way of creating object is through cinstructor method => Object.create
const JsUser={
    name :"hitesh", 
    "full name" : "richa dhiman",//here name act as a key,,,or key kuch bhi ho skta h,,it cane be like    0,1,2 ...so on instead of name
    //eg 1:"richa" or a:"krishn" =>in object we can define keys also (index in terms of arrays)
    // here key => name is treated/processed as "name"  that is string amd value of key can be anything like string, number, boolene etc
    age : 21,
    email : "richahsharma221@gmail.com",
    location : "jaipur",
    isloggedIn : false,
    lastLoggedIn : ["monday","saturday"]
}
//accessing object
console.log(JsUser.email); //yaha pe dot(.) ki vjah s string ki trh likhne ki jrurt nhi h email ko
//OR
console.log(JsUser["email"]); //here we have pass email as string ,,kuki as discussed inko as a string process kiya jata h

console.log(JsUser["full name"]) // yaha pe hum dot use kr hi nhi skte....automatic way m khud yhei ek tareeka show ho raha h ...=> try using (jsuser.fullname)  ,,ye khud auto correct ho jaega

//declaring a symbol
const mySym = Symbol("key1")
const JS_User = {
    email : "richa221@gmail.com",
    Name : "ruhan",
    [mySym]: "mykey1"
} //printing
console.log(JS_User)

//console.log(JS_User.mySym)
console.log(typeof JS_User.mySym) //but still iska type symbol nhi h 
//so uske liye mysym ko [] me likho 
//that is => [mysym] : "mykey1" inside the object IS_User

console.log(JS_User[mySym])
console.log(typeof JS_User.mySym);

//changing value of object keys..or overwrite
JS_User.email = "suraj123@gmail.com";
 //freezing values of object..taki koi value chnge na kr paye
 
 //Object.freeze(JS_User);
 //now trying to change values

 JS_User.email = "surajkumar12@gmail.com";//this won't chnage as above we have freezed the object
 console.log(JS_User);

 //adding greetings with JS_User
 JS_User.greeting = function(){
    console.log("hello Js User");
 }
 //console.log(JS_User.greeting); //gives undefined now
 //console.log(JS_User.greeting()); //error bcoz we have freeezed the function above,,,so infreeze it first

console.log(JS_User.greeting()); //gives output 
// if we pass only js_user.greeting
console.log(JS_User.greeting); //gives
 
///create another function
 JS_User.greetingTwo = function(){ //targeting the name var of js_user function using $ n this keyword
    console.log(` helllo js user , ${this.Name}`)
 }
 console.log(JS_User.greetingTwo());