console.log("Hello from our fist script file!")
console.log(1 + 3)
console.log("Goodbye!")

const password = prompt("Please enter a new password")

// Password must be 6
// Password cannot include spaces

if (password.length >= 6) {
    console.log("Long enough password.");
} else {
    console.log("Password too short!");
}