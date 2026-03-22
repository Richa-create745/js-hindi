

//about scopes03
let a = 10;
const b = 26;
var q = 89;
console.log(a);
console.log(b);
console.log(q);
//console.log(b);

//but all have different role in term of scope
if (true) {
   let x = 23;
   const p = 45;
   var q = 44;
   //curly braces show scope ..
   //in variables ka scope sirf in braces k andr hai...this is called "block scope"
}
//outside block,,,its called "global scope"
//console.log(x); //not defined bcoz out of scope print kr rhe h
//console.log(p); // same reason
console.log(q); // but this output as 44,,even its out of scope.....thats the major problem with "var"


if (true) {
   let a = 100;
   console.log("INNER VALUE OF a in its block is :" + a)
}

console.log(a) //still gives 10 =>global scope

// nested funtions =>inner function variables can access outer funtion variables but vice versa is not true

function one() {
   const username = "hitesh"
   function two() {
      const website = "utube"
      console.log(username)// accessible

   }
   //console.log(website);// not accessible  =>will give error

   two();
}
one();

// if else
if (true) {
   const userName = "richa"
   if (userName === "richa") {
      const webs = "google.com"
      console.log(webs +" "+ userName)
   }
   //console.log(webs); //out of scope => not accessible
}
//console.log(userName); // similarly not accesible

// ++++++++++++++++++INTERSETING CONCEPT +++++++++++++++++++++++++


addOne(5) ;//no error in this case if we access the function above function declaration
function addOne(num) {
   return num + 1;
}
addOne(5); // only returning not printing
console.log(addOne(5));


// addTwo(8) ; =>not possible in this case bocz thi s is different from the previous one
const addTwo = function(nums){ //this function is like a expression, holding return value laong wiht function declaration.
   return nums+2;
}
addTwo(8); //still only returning the value 
console.log(addTwo(8));