//control tatements
// if - statement
//  if(condition){ //this condition should be true to run if code block

//  }
if (23) { // conditon must be true =>non-zero expression is considered true whther mathematical or not
    console.log("hey my name is richa");
}

//more example
if (34 <= 89) {
    console.log("treu statement");
}

if (78 == 29) { //won't run
    console.log("false");
}
 
if(23!=21){
    console.log("again true");
}

if(3 =="3"){
    console.log("give yes but values are different in their daattype")
}
 if(2=== "2") { // wont run as it is not true
    //strict equality that check value + datatype
    console.log("using strict equality");
 }
const isLoggedIn = false;
if(!isLoggedIn){
    console.log("!(NOT) =>reverse the role")
}
 
let num = 432;
if(num >300){
    console.log("showing results")
}


if(2+3 -5){ //wont run bcoz expression result is zero
    console.log("hello")
}
 


// +++++++++++++++++++++++++++++++++++++++++++++++++++
 
//if-else => either if runs or else
     if(2+3-5){
        console.log(" if-else");
     }
     else{
        console.log("else  block")
     }

     const score =400;
     if(score >200){
        const powerr = "flying";
        console.log(`the birds are : ${powerr}`)
     }

     //console.log(`power is : ${powerr}`) ; //wont run as out of scope
      

     //short hand notation

     const balance =1000;
     if(balance>5000 ) console.log("sufficient amount");

     //using else if
     else if(balance >2000){
        console.log("less amount");

     }
      else{
        console.log("invalid data");
      }

        
      //using logical operators
       if( 4>3 && 7<10){ // && checks all conditions.. returns true if all conditions r true
       // let part = "company";
        console.log("statement true");
       }

       if( 4>=9 || 8<33 || 54 >12){// || oPERATOR checks n return true even if one condition is true
console.log("hey guys, using || statement ");
       }