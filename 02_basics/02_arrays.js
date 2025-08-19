// arrays - part 2
 const arrays =[ "rahul", "rohan","atharv"];
 const dc= ["richa","varnika","prachi"];

//  arrays.push(dc); //gives array inside array  =>dc will be treated as another element in arrays  
//  console.log(arrays); //

//  console.log(arrays[3]); //will print array dc as it is third elemnt of arrays
//   console.log(arrays[3][0]); //give first element of dc-array =>richa

  //using concatenate to merge the arrays properly
  console.log("combined arrays-----------")
  const CombineArr = arrays.concat(dc);
  console.log(CombineArr);
   //another way  - can combine more than two 

   const arr = [1,2,3,4]
// MOSTLY PREFERRED WAY  -- spread  two arrays =>each element get spread out individually
   const allnew =[...arrays, ...dc, ...arr];
   console.log(allnew);


   // RARE CASE - ARRAY inside Arrays
   const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
   const real_another_array = another_array.flat(Infinity); // give depth as arguement matlab kitne arguement tkk array ko normlaise krn ah...for now we have do it infinite =>it will solve completely byitself

   console.log(real_another_array);





console.log(Array.isArray("hitesh")); // asking whether it is an array or not
console.log(Array.from("12345")) ;// makw an array from given value
//interseting case
console.log(Array.from({name: "richa"}))  ; // not able to convert this


let score1 =100;
 let score2 =200;
 let score3= 300;
 console.log(Array.of(score1,score2,score3));
