let correctPassword = "pogi25";
let userPassword;
do {
    userPassword = prompt("Please enter your password:");
    if (userPassword !== correctPassword) {
        alert("Invalid password, try again");
    }
} while (userPassword !== correctPassword);

alert("Welcome! You've entered the correct password.")
