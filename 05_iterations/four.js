//more on js


const coding=["ruby","c++","python","js","java"];
 const values=coding.forEach( (item )=>{
    console.log(item);
    return item;
 });
 console.log(values); //for each() loop retruns no value whether u write return or not

 //so does w need to use for loop? No, lets see then how

 const mynums=[1,2,3,4,5,6,7,8,9,10];
 const newnums=mynums.filter( (num)=> num>4 // .filter return values as per our condition...here num is a variable//means we need all values num from array which are graeter tha 4
 );
 console.log(newnums);

 //another way of writing
 const arr=[1,2,3,4,5,6,7,8,9,10,11,12];
 const vals=arr.filter((ans)=>{
    //ans>4; //in this case when we have used {} thus now we r in a scope so use return keyword

    return ans>5;
 });
 console.log(vals); 


 //lets see how foreach n fiction is used //make an object books
  const books=[
      {title:'book one', genre:'fiction',publish: 1931,edition:1992},
      {title:'book two', genre:'history',publish: 1981,edition:2004},
    {title:'book three', genre:'non-fiction',publish: 1951,edition:1999},
    {title:'book four', genre:'non-fiction',publish: 2001,edition:2009},
    {title:'book five', genre:'history',publish: 2021,edition:2026},
    {title:'book six', genre:'science',publish: 2007,edition:1986},
    {title:'book seven', genre:'history',publish: 1901,edition:2011},

  ];
  //user have to print books based on some condtions
   const userbooks= books.filter((bk)=>bk.genre==='history')// print those books haveing genre history
   console.log(userbooks);

   //priting book with  genre fiction
    const book=books.filter((bks)=>bks.genre==='fiction');
    console.log(book);