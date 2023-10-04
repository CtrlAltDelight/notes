console.log("Script loaded");

// increment button
let button = document.getElementById("incrementButton");
let display = document.getElementById("numberDisplay");

let number = 0;

button.addEventListener("click", function () {
	console.log("Button clicked");
	number += 1;
	display.innerHTML = number;
});

// student info
let studentInfo = document.getElementById("studentInfo");

let student = {
	name: "Luke Chigges",
	university: "Purdue University",
	major: "Computer Engineering",
};

for (let key in student) {
	studentInfo.innerHTML += `${key}: ${student[key]}\n`;
}
