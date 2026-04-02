//learning about for loop

//print numbers from 1-20
for (let i = 1; i <= 20; i++) {
    const el = i;
    console.log(el);

}
//the "el" is not accessible outside the loop


//printing even numbers only 
console.log("even numbers")
for (let i = 0; i <= 20; i++) {
    if (((i >> 1) << 1) == i) {
        console.log(i);
    }
}


//loops inside loops
for (let index = 0; index < 2; index++) {
    console.log(`outer loop value: ${index}`);
    for (let j = 0; j < 2; j++) {
console.log(`inner value of loop is :${j}`);

    }
  
}  //printing table
let val =2;
 for(let i=1;i<=10;i++){
console.log(val+ "*" + i+ "=" + val*i)

}

///loop on arrays
let myArr =["richa ", "rohit", "yash","suraj", "aveeraj"];

for (let index = 0; index < myArr.length; index++) {
   //printing elemnets of even index
   if(index%2==0){
    console.log(myArr[index]);
   }
   
}

//break n continue keyword
//print numbers except multiples of 4
console.log("use of continue")
 for (let index = 0; index < 20; index++) {
if(index%4==0){
    continue; //skip n continue further
//when multiple of 4 comes , control goes back n statements below continue wont execute
}
console.log(index);
 }

 //print numbers , if 6 comes then break from there 

 console.log("use of break")
 for (let index = 0; index <=10; index++) {
    if(index ==6){
        break; //as soon as 6 comes it terminates the loop
    }
    console.log(index);

 }

