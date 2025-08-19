//arrays =>go on arrays js mdn
const myArr = [0, 2, 3,64, 21];
 
// study concept of shallow and deep copy on mdn site
console.log(myArr[0])
//2nd way to declare

 const myfrnd =["suraj", "varnika","ridhhi","jyoti"];

 console.log(myfrnd[1]);

 //3rd way to declare
   
 const myArry2 = new Array(1,2,4,35,8);
 console.log(myArry2[3]);

 // array - methods

 myArry2.push(209); //add values to array
 // to print whole array
 console.log(myArry2);

  myArry2.push(7);
  
 myArry2.pop();// to delete the last value =>no need to give arguement
  
 myArry2.unshift(11); //will insert new elemnts at start and thus needs to shift the rest elements ,,,sounds hectic when array is large sized,,,coz each elemnt needs to be shift by one pplace
 console.log(myArry2);
myArry2.shift(); //will remove the unshift val
console.log(myArry2);


//MORE-CONCEPTS

console.log(myArr.includes(2)); //whether arr includes val =2 or not =>give boolean answers

console.log(myArr.indexOf(5)); //index of element =5     (returns either 1 or -1)
console.log(myArr.indexOf(2));

const newArr = myArr.join();
 console.log(myArr);
 console.log(newArr);

 console.log(typeof myArr); //object
 console.log(typeof newArr); //string

 // slice, splice 
  
console.log("A" , myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3); //chnged original array

console.log(myn2);

console.log("C",myArr); //original array is chnged here


