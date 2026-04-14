//more on loops
 //for of loop

//array  []  
//strings in array ["","",""]
 //object in array [{},{},{}]


  const arr =[1,2,3,4,5];
//   for (const element of object) { //object=>jispe loop lagana h 
     
//   }  syntax


 for (const num of arr) 
{
 console.log(num);
    
 }

 //strings
 const greetings ="hello!";
 for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
 }  

 //maps => The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

 const map=new Map();
 map.set('IN', "India");
 map.set('USA', "United states of America");
 map.set('Fr', "France");
 map.set('Eng', "England");
 map.set('Eng', "England"); //dont print copy values..map hold unique values in the order given

 console.log(map);
  
 //applying loop on maps
  for (const key of map) {
    console.log(key); //prints as in form of array


  }
   //to remove this
    for (const [key,value] of map){
console.log(key, '=>',value); //this will print value n keys seperately
    } 

    //forof loop on objects
    const myObject={
        game1:'NFS',
        game2:'spiderman'
    }
//  for (const [keys ,value] of myObject) {
//     console.log(keys, ':',values)  //SO ERROR COMES THUS OBJECTS ARE NOT ITERABLE
//  }

 const obj={
    js:'javasc',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
 }

 for (const key in obj) {  //forin loop can iterate objects as well, which forof can't
    //console.log(key); //print keys
    console.log(`${key} shortcut is for ${obj[key]}`);
    
 }

 //forin loop on arrays
  const programming =["js","rb","py","java","cpp","hye"];
  for (const key in programming) {
   //console.log(key) ;// gives index or keys
   console.log(`${key} -> ${programming[key]}`);
    
  }


  //forin loops on maps
//    for (const key in map) {
//     console.log(key); //nothing 
//    }


//foreach() loop