// FUNCTIONS => used to perform certain tasks, do allow code reusablilty
//syntax => write funtion followed by function name
function myfunc() {
    //define content or task of functions
    console.log("hello");
    console.log("goodmorning");
    console.log("whats going on there?");
}

//calling function
myfunc();


//more advanced way
//adding two numbers using functions
function addTwoNum(num1, num2) { //num1,num2 are parameters passed

    console.log(num1 + num2);
}
//now calling functions with diff arguments
addTwoNum();//give NaN as no argument is passed while calling functions
addTwoNum(3, 5); //give output

addTwoNum(3, "4"); // different parameters ,,now in output both will be treated as strings...(check conversion of datatypes concept)
addTwoNum(2, "a"); // output => 2a
//other way , storing func call in a variable

const result = addTwoNum(3, 10);
console.log(result + " is the result"); // give undefined as right now func is not returning any value

// function returning a value
function newfunc(x, y) {
    let outcome = x * y; //or directly write =>return x*y
    return outcome;
    console.log("richa"); // anything after return willl not be executed

}
const val = newfunc(7, 6);
console.log(val + " is the outcome "); // now give output


// MORE
function logInUser(username) { //yaha pr hum default value de skte h username ko  as username ="sam"
    //using if-else too
    if (username === undefined) { //runs when condition is true
        console.log("pls enter a username");
        return;
    }
    //undefined means false
    // simply can write
    //  if(!username){
    //  console.log("enetr name pls");
    // }


    //returning ,,,use backticks in case of string 
    //dollar($) ke andr koi bhi variable daal skte h 

    return `${username} just logged In`

}
//executign function
logInUser("Siddharth"); // see syntax n format here carefully as string is passed

//to print output
console.log(logInUser("sid")); //or store the fucntion calll in variable n then print it
let res = logInUser("richa");
console.log(res);
//if we dont pass argument
console.log(logInUser());  ///gives undefined

