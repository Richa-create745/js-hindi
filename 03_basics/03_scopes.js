//about scopes
let a= 10;
const b=26;
var q= 89;
console.log(a);
console.log(b);
console.log(q);
//console.log(b);

//but all have different role in term of scope
 if(true) {
    let x= 23;
    const p= 45;
    var q= 44;
    //curly braces show scope ..
    //in variables ka scope sirf in braces k andr hai...this is called "block scope"
 }
 //outside block,,,its called "global scope"
 //console.log(x); //not defined bcoz out of scope print kr rhe h
 //console.log(p); // same reason
 console.log(q); // but this output as 44,,even its out of scope.....thats the major problem with "var"


 if(true){
    let a =100;
    console.log("INNER VALUE OF a in its block is :" + a)
 }

 console.log(a) //still gives 10 =>global scope
  