//datatypes - summary
// on the basis of how data is stored in memory and how it can be accessed ,, datatypes are divided into two categories 
// PRIMITIVE (Call By Value) AND NON-PRIMITIVE(Refernce type)

//PRIMITIVE :7 categories =>String, Number, Boolean, null, undefined, Symbol(used to make a value unique ), BigInt 
 console.log(" **************DATATYPES SUMMARY******************");

const score = 100; //number
const scoreVal = 100.36; //number
const isLoggedIn = false; //boolean
const outSideTemp = null; //null
let userEmail; //simply undefined for now  or can manually do it undefined


const id = Symbol('1234'); // for making id unique ,use symbol , pass the value in it and it will return a new unique symbol value
const anotherid = Symbol('1234'); //although values of both ids are same but both are unique as due to symbol
// lets check whether above two are equal or not

console.log("whether id and anotherid are equal or not")
console.log(id == anotherid);

//BigInt
const bigNumber = 243433562353267n; //automatically used bigInt to store this large num or if num is too large then add 'n' after the num...


//NON-PRIMITIVE (reference type) : Arrays, Functions, Objects

//arrays
const heros = ["richa", "varnika", "suraj", "riddhi", "aman"];

//objects => in curly braces

let myObj = {
    name1: "suraj",
    name2: "varnika", //all are objects ,they can be of any datatype
    age: 42,
course: "B.Tech"

};

//functions
 //storing func in a variable

const myfunc = function(){
console.log("3rd August : Happy Friendship Day");
}


//how to find datatype of anything
 console.log(typeof bigNumber); // give bigint
 console.log(typeof outSideTemp); //=> object

  console.log(typeof myfunc); // =>function but called as object function 
   console.log (typeof anotherid) //symbol