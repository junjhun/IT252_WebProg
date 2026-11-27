import { createGreeting } from "./greet.js";

const greetBtn = document.getElementById("greet-btn");
const greetingOutput = document.getElementById("greeting-output");
const nameInput = document.getElementById("name-input");


greetBtn.addEventListener("click", () => {
    const userName = nameInput.value.trim();

    if(userName === "") {
        greetingOutput.textContent = "Please enter a name.";
    } else {
        greetingOutput.textContent = createGreeting(userName);
    }
});
