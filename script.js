const container = document.querySelector("#container");

// Array of colors
var color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];

// Function to create a 16x16 grid of divs
function createInitialGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        let div = document.createElement("div");
        div.classList.add("div"); // Add class "div" to each new div

        // Add mouseover event to change color on hover
        div.addEventListener("mouseover", function() {
            div.style.background = color[Math.floor(Math.random() * color.length)];
        });

        container.appendChild(div); // Append each new div to the container
    }
}

// Create the initial grid when the page loads
createInitialGrid();

const btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    // Prompt the user for input
    let input = prompt("Enter the number of pixels you want (Max: 100)");

    // Parse the input as an integer
    let a = parseInt(input);

    // Check if the input is a valid number and within the range
    if (!isNaN(a) && a > 0 && a <= 100) {
        make_div(a);
    } else {
        alert("Invalid Input");
    }
});

function make_div(num) {
    // Clear existing divs
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Calculate size of each div based on the number of divs per row
    const divSize = Math.floor(400 / num); // 400 is the width of the container

    // Create new divs based on user input
    for (let i = 0; i < num * num; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("div"); // Add class "div" to each new div

        // Set the dynamic size for the divs
        newDiv.style.height = `${divSize}px`;
        newDiv.style.width = `${divSize}px`;

        // Add mouseover event to change color on hover
        newDiv.addEventListener("mouseover", function() {
            newDiv.style.background = color[Math.floor(Math.random() * color.length)];
        });

        container.appendChild(newDiv); // Append each new div to the container
    }
}
