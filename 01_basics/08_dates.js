// Dates

let myDate = new Date();
console.log(myDate);

//converting to string

console.log("to string : " + myDate.toString());

//more -functions

console.log("to date string : " + myDate.toDateString());
console.log("to ISO-string : " + myDate.toISOString());

console.log("to JSON : " + myDate.toJSON());

console.log("to local date string : " + myDate.toLocaleDateString());
console.log("to local string : " + myDate.toLocaleString());

console.log(typeof myDate); //IMPORTANT

//declaring a new date

let myCreatedDate = new Date(2025, 0, 3); //months start from 0 in javascript in case of single digit
console.log(myCreatedDate.toDateString());
console.log("another way ");
let newdate =new Date(2025,0,19,8,9);
console.log(newdate.toLocaleString());
 console.log("lets tr another way");
   
 //format : yyyy -mm-dd
 
 let date1 =new Date("2025-01-13"); //here months start from 1
 //but in india mostly followed - dd/mm/yyyy
 console.log(date1.toLocaleString());

 //we do have timestamps in js
 let mytimestamp = Date.now(); //in case of desinging quizez ,poles ,etc

 console.log(mytimestamp); //gives milisecond values from the date 1 january 1970 to till now
  
 //extracted value from this value
 console.log(myCreatedDate.getTime());

 console.log(Math.floor(Date.now() / 1000));



 let newDate = new Date();
 console.log(newDate);
 console.log(newDate.getMonth()); //give month ,starting from zero
 console.log(newDate.getDay()); 

 //in case we need to write full time 

 `${newDate.getDay()}` //also gives day

 //another method
 newDate.toLocaleString('default',{
    weekday:"long"
  
 } )