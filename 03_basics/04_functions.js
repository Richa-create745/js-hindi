// about THIS and arrow function


//creating an object
const user = {
    username: "suyash",
    price: 99, 
    //a function inside an object
    welcomeMsg: function () {
        console.group(`${this.username} , welcome to the platform`); //this keyword is used to to access current context..jse filhal current context h object ka whole content.... so here we r accessing username
        console.log(this); //?
    }
}
user.welcomeMsg();

//if we chnage the username
user.username = "sam"; //so context is chn=anged now
user.welcomeMsg();
// try this line on console...it gives window
console.log(this) //gives this => {} that is empty object


//NOTE => BROWSER ke andr jo globale object ha uska naam h - window object

// function chai(){
//     let name = "richasharma"
//     console.log(this)
//      console.log(this.name) // undefined...as this context is working in objects only not in functions
// }
// chai()


//other way 
// const chai =function(){
//     let name = " suraj"
//     console.log(this.name) //again undefined
// }
// chai()


//ARROW FUNCTIONS
//USE => at place of function
const chai = () => {
    let name = "athrva"
    console.log(this.name) //undefined
    console.log(this) // gives e,pty object --> {}
}
chai()


// purely about arrow functions ....syntax is :
const addt = (num1, num2) => {
    return num1 + num2
}
console.log(addt(8, 3));

//other way ...called implicit return
const add = (num1, num2) => (num1 + num2) //or simply without parenthesis..... n if we enclose them in curly braces then add return  statement
console.log(add(8, 9));


const NAME = (n1,n2) => ({username : "aarjeev"})
console.log(NAME(3,2)) // keep the things in curly braces to avoid undefined


