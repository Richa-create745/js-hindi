//normal comparisons till now
console.log(2 > 1);
console.log(2 >= 1);
console.log(3 == 8);
console.log(2 != 5);

//types during comparison should be same
console.log("lets see new comparisons");
console.log("2" > 1);
console.log("02" > 1);
//few more  ...such type can cause confusions so try to avoid them
console.log("few more");
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); // =>true as  , here null is converted to a number zero 
 
console.log("few more for undefined");
console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined<0);
 //strict checkinh
 console.log("strict check");
 console.log("2" === 2); //here  gives false bcoz in case of === it checks dtatypes too, thus here datatypes are different in this case
