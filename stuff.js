

/* console.log("hi");
let x = 4;
const y = 7;
console.log(x);
console.log(y);
/* let z = x+y;
console.log(z);
let z = x*y;
console.log(z);
let z = x/y;
console.log(z); 

let a = 12;
let b = 3;
let c = a < b;
console.log(c); */

let a = 5;
let b = 3;
let c = a % b; // Modular
console.log(c); // = 2 , outputs the remainder. 3 goes into 5 once r2

let d = 4;



/* alert("Hello world"); */

function isoddeven(num){
    if (num % 2 == 0){
        console.log("number is even")
    }

else if (num == 7){
    console.log
    ("number is 7");
}
else if (num % 2 == 1){
    console.log
    ("number is odd");
}
}

console.log(isoddeven(d));

// divisible by three is fizz, divisble by 5 is buzz, divisible by both is fizzbuzz, none of the above return the number 

/* function fizzbuzz(num){
    let array = []
    for (let i = 0; i <= num; i++) {
        if (i % 3 == 0
        && num % 5 == 0)
        {
     return ("fizzbuzz");
        }
else if (i % 3 == 0) {
    array.push ("fizz");
}
else if (i % 3 == 0) {
    array.push ("buzz");
}
else {
    array.push (i);
}
}
return(array);
}

console.group(fizzbuzz(15)); */

function lessthan10(num) {
    if (num < 10){
        return num
    }
    else {
        return(num + " is equal to or more than 10" );
    }
}

console.log(lessthan10(5))
console.log(lessthan10(4))
console.log(lessthan10(56))


/* Write a program that will ask you your name It will then display ‘Hello Name’ where ‘Name’ is the name you have entered. E.g. What is your name? Ada Hello Ada

Extension: have the program respond with “Hello, Your Majesty” ****if**** the name Charles or Elizabeth is entered. */


function charlesOrElizabeth(name) {
    if (name == "Charles" || name == "Elizabeth") {
        return ("Hello, your Majesty");
    }
else {
    return ("Hello " + name);
}
}

let name = "Sam"

console.log(charlesOrElizabeth(name));
name = "Elizabeth"
console.log(charlesOrElizabeth(name));
name = "Charles"
console.log(charlesOrElizabeth(name)); 

/* Write a program that will display a knock-knock joke, where the user can input their responses to trigger the following line of the joke. 

Extension: have the program flag up when the incorrect response is entered e.g. not “who’s there” */

function knockKnock() {
    let answer = prompt("Knock knock")
    let answerTwo = prompt("Tank") 
    if (answer == "Who's there?") {
      return prompt("Tank!")
    if (answerTwo == ("Tank who?")) {
        return ("You're welcome")
    }
    else {
        return ("Try again")
    }



    
    }
}

console.log(knockKnock())
