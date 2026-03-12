//more on functions
function calculateCartPrice(num1){
   return num1;   
}
console.log(calculateCartPrice(23)); //give 23
console.log(calculateCartPrice(23,33,43,53)); // but if the no of arguements are more, still output is 23
 // to solve this problem , we use "Rest operator"
  //eg:
  function calculate(...num2){
    return num2;
  }
 console.log(calculate(23,34,45,56)); //even though we will pass multiple arguments,,,we get them in output as in fr=orm of array
  //OR
  function calculatePrice(val1, val2, ...num){ //another syntax
    return num;
  }
   console.log(calculatePrice(200, 300, 400, 500, 600, 100));// first two value will go in val1 and val2 and rest will into the array 


   // how to handle objects in functions
    const user = {
username : "richa",
price : 199

    }
     
    // passinf n using this object in function
     function handleObject(anyobject){ //use dot(.) to access the object keys
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

     }
     handleObject(user); //all good till now
     //another way of passing objects
     handleObject({
        username : "viyom",
        price : 299
     })

// passing arrays
 const arr = [12, 34, 55, 67, 44];

 function returnval(getArray){  //here getArray is a generic argument that can accept any array, not just the above one we have created
return getArray[2]; //2 show index as we want val of index 2
 }

 console.log(returnval(arr));

 //another way
 console.log(returnval([200,400,78,9867]));