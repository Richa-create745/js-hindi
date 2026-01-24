// numbers and maths in javascript

const score = 455; //here js have detected that the type of score is number ,,implicit way
console.log(score);
// explicitly defining that the value should be number only
const balance = new Number(100); //will give special casting that it is a number   =>Number is a prototype here and given val is primitve value

console.log(balance);

console.log(balance.toString());// now it converts to string 
console.log(balance.toString().length); //will give length after convertig number to string

console.log(balance.toFixed(2)); //suppose if the value is in decimal then it will give the precise value till the positions mentioned as parametres..here value is two=> two position fixed after decimal
const val = 23.8966;
console.log(val.toPrecision(3)); //so it will take starting three values and apply precision on them i.e.,  23.8 =>23.9
const val1 = 123.8966;
console.log(val1.toPrecision(3)); // now the three digits for precision are 123 and kuki after decimal 8 h so it will round off

// but if its is 123.2966 the it will give 123 only

// representation - easy
const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //add commas  to make representation easy ,,in US-standards 
console.log(hundreds.toLocaleString('en-IN')); //  commas as per indian style


// +++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++
console.log(" ++++++++++ MATHS ++++++++++++")

console.log(Math); //basically an object which has many properties , go to console for more values
console.log(Math.abs(-45)); // turns negative to positive

//round-off values
console.log(Math.round(4.6));
console.log(Math.round(5.6));

//ceiling values  and floor values
console.log(Math.ceil(4.1)); // as here we have 4.1 that is .1 more  than 4 thus it will move to higher value 5 directly
console.log(Math.floor(4.8)); // lowest value hi hega which is 4

console.log(Math.sqrt(9));

//min - max values
console.log(Math.min(2, 9, 0, 23, 12, -2));
console.log(Math.max(74, 0, 48, 55, 92));

console.log(Math.random()); //always give value between 0-1

// what if multiply by 10 
console.log(Math.random() * 10); //shift by one decimal
//if the value is something like 0.03 or 0.04 or etc ,,in such case by multipying by 10 will give 0 thus to avoid it add 1 also

console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1)

// trick
const min = 10;
const max = 20;
// thus we need values bet 10 - 20 ,where min can be atleast 10
//math.floor will give exact lowest value
console.log(Math.floor(Math.random() * (max - min + 1)) + min)