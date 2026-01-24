
//  study string functions and methods from console or websites


const name = "Richa";

const repoCount = 50;

//concatenate both 
console.log(name + repoCount + " is my repository count on github");//older way =>not preferred

//instead use back ticks and put your string as ${string here}

console.log(` hello my name is ${name}  and my repository count is ${repoCount}`);

// another name of declaring string

const gameName = new String('richasharma') //using objects of js and giving value to constructor of string
console.log(gameName[0]); //accessing zeroth key
console.log(gameName.__proto__); //will give object 
   

 //gives length -->directly available
console.log(gameName.length );
console.log(gameName.toUpperCase()); //but will not change original value
 console.log(gameName.charAt(6)); //pass index and check which character was there
  //reverse
   console.log(gameName.indexOf('s')) ; // will give index of the input character

   //dividing a string to a substrinhg
  const newString= gameName.substring(0,6) // starting from 0th index to (4-1) index 
  console.log(newString);

  // .slice => can give range as input and negative value as well
const anotherString = gameName.slice(-10 , 6); // -10 = length-10 =1  => now it will print from index 1 to index 6
console.log(anotherString)

 //trim and replace func.      
 const newStringOne = "  hyGuys  " ;  //removing unnecessary spaces
 console.log(newStringOne);
 console.log(newStringOne.trim()); // visit trim js on MDN docs for more info


 const url ="https://richa.com/richa%26sharma" ; //browser dont understand spaces in between any url
 //replcing %26 by -
console.log(url.replace('%26', '-'));
//even we can ask qustions ,whether url include the given data/name or not
 console.log(url.includes('suraj'));
 console.log(url.includes('varnika'));
console.log(url.includes('richa'));
const routine  = new String('helllo-guys-whatsup');
/* split => will split the string 
"-" => acts as a separator
*/
console.log(routine.split('-')) //study split more 
  