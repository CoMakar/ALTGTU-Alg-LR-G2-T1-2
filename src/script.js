'use strict';

const PI = 3.14;


window.onload = () => {
    console.info("Window loaded");

    let length_input = document.getElementById("length-input");
    let length_display = document.getElementById("length-display");
    let radius_display = document.getElementById("radius-display");
    let square_display = document.getElementById("square-display");
    let invalid_length_elem = document.getElementById("invalid-length");

    length_input.onchange = () => {
        invalid_length_elem.classList.add("hidden");

        if (length_input.value === "") {
            radius_display.textContent = "";
            square_display.textContent = "";
            length_display.textContent = "";
            return;
        }

        let parsed_length = parseFloat(length_input.value)

        if (isNaN(parsed_length)) {
            console.error(`Invalid length input: ${length_input.value}; Length must be a number.`);
            invalid_length_elem.classList.remove("hidden");
            return;
        }

        console.info(`Parsed length: ${parsed_length}`);
        
        let radius = parsed_length / (2 * PI);
        let square = PI * radius * radius;

        radius_display.textContent = `${radius.toFixed(2)}`;
        square_display.textContent = `${square.toFixed(2)}`;
        length_display.textContent = `${parsed_length}`;

    }
}