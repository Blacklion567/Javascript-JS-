// A variable is a container for storing data
// Avariable behaves as if it was the value that it contains.

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment ( = assignment operation)

let firstname = 'Bro'; //strings
let age = 21; //numbers
let student = true; //booleans


console.log(firstname);
console.log(age);
console.log(student);

document.getElementById("p1").innerHTML = "Hello  " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

// How to accept user input

// Easy WAY with a window prompt

//let username = window.prompt("What's your name?")
//console.log(username)

// DIFFICULT WAY HTM1

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hellow " + username;

}