//more on loops


// while (condition) { //syntax

// } 
let p = 1;
while (p < 10) { //true

    console.log(p);
    p = p + 2;
}
let myArr = ["english", "hindi", "python", "binary", "java", "javascript"];
let arr = 0;
while (arr < myArr.length) {
    console.log(`value is ${myArr[arr]}`);
    arr++;
}


//do while loop

let score = 1;
do {
    console.log(`score is ${score}`);
    score++;
} while (score < 5);