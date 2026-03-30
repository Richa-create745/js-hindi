// IIFE => Immediately Invoked Function Expressions
// 


function Chai(){
    console.log(`DB CONNECTED`);
}
Chai();



 // immediately invoking a function
 //  // The function is wrapped in parentheses to make it an expression, and the () at the end immediately invokes it. This ensures that variables inside the function are not accessible outside its scope
 (function chai(){ 
    //named IIFE
    console.log(`db connected`);
 })() ;  // semi-colon is important to end the function. ootherwise the IIFE functions dont know when to get stop , so to end use ';'... else error will come

 //IIFE => An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs immediately after it is defined. It is commonly used to create a private scope and avoid polluting the global namespace.
 


 //IIFE using arrow function
  (() => {
    console.log(`hey everyone `);
  }) ();

  //passing arguments =>parametrized IIFE
   ((name,age)=> { 
    console.log(`hye my name is ${name} and my age is ${age}`)
   }) ('richa', 21);

