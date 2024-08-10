// js basics 
// all types at one place 

// Declare variables
let name = "Archisha";
let age = 20;
let isStudent = true;

// Object representing a person
let person = {
    name: name,
    age: age,
    isStudent: isStudent,
    hobbies: ["Reading", "Coding", "Traveling"],
    introduce: function() {
        return `Hi, I'm ${this.name}. I'm ${this.age} years old.`;
    }
};

// Function to display a greeting
function greet(personName) {
    return "Hello, " + personName + "!";
}

// Conditional statement
if (age >= 18) {
    console.log(greet(name));
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Loop through numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}

// Array of favorite subjects
let subjects = ["Math", "Physics", "Computer Science"];

// Loop through the array and print each subject
subjects.forEach(function(subject) {
    console.log("Favorite Subject: " + subject);
});

// Higher-order function: Filter subjects that start with 'C'
let filteredSubjects = subjects.filter(function(subject) {
    return subject.startsWith("C");
});

console.log("Filtered Subjects:", filteredSubjects);

// Working with the person object
console.log(person.introduce());
console.log("Hobbies:", person.hobbies.join(", "));

// Adding event handling (for browser environment)
document.addEventListener("DOMContentLoaded", function() {
    // Creating a button dynamically
    let button = document.createElement("button");
    button.textContent = "Click Me!";
    
    // Adding an event listener to the button
    button.addEventListener("click", function() {
        alert(greet(person.name) + " Welcome to JavaScript learning.");
    });
    
    // Adding the button to the body of the document
    document.body.appendChild(button);
});
