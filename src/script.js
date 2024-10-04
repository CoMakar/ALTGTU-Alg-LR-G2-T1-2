'use strict';

const PI = 3.14;


window.onload = () => {
    console.info("Window loaded");

    let blink = document.getElementById("blink");

    setInterval(() => { 
        blink.classList.toggle("invisible");
    }, 1000)

    let length_input = document.getElementById("length-input");
    let length_display = document.getElementById("length-display");
    let radius_display = document.getElementById("radius-display");
    let square_display = document.getElementById("square-display");
    let invalid_length_status = document.getElementById("invalid-length-status");

    length_input.onchange = () => {
        console.info(`Length input: ${length_input.value}`);
        invalid_length_status.classList.add("hidden");

        if (length_input.value === "") {
            radius_display.textContent = "0";
            square_display.textContent = "0";
            length_display.textContent = "0";
            return;
        }

        let parsed_length = parseFloat(length_input.value);

        if (isNaN(parsed_length)) {
            console.error("Length must be a number");
            invalid_length_status.classList.remove("hidden");
            return;
        }

        console.info(`Parsed length: ${parsed_length}`);

        if (parsed_length <= 0) {
            console.error("Negative length");
            invalid_length_status.classList.remove("hidden");
            return;
        }
        
        let radius = parsed_length / (2 * PI);
        let square = PI * radius * radius;

        console.info(`Computed radius: ${radius.toFixed(2)}`);
        console.info(`Computed square: ${square.toFixed(2)}`);

        radius_display.textContent = `${radius.toFixed(2)}`;
        square_display.textContent = `${square.toFixed(2)}`;
        length_display.textContent = `${parsed_length}`;
    }

    let some_num_input = document.getElementById("some-num-input");
    let source_number_display = document.getElementById("source-number-display");
    let computed_number_display = document.getElementById("computed-number-display");
    let invalid_number_status = document.getElementById("invalid-number-status");

    some_num_input.onchange = () => {
        console.info(`Number input: ${some_num_input.value}`);
        invalid_number_status.classList.add("hidden");

        if (some_num_input.value === "") {
            source_number_display.textContent = "";
            computed_number_display.textContent = "";
            return;
        }

        let parsed_number = parseInt(some_num_input.value);
        
        if (isNaN(parsed_number)) {
            console.error("Number is not a number");
            invalid_number_status.classList.remove("hidden");
            return;
        }

        console.info(`Parsed number: ${parsed_number}`);

        if (parsed_number.toString().length != 3) {
            console.error("Non three-digit number");
            invalid_number_status.classList.remove("hidden");
            return;
        }

        // Evil array engineering
        // let computed_number = parsed_number.toString().split("");
        // computed_number.push(computed_number.reverse().pop());
        // computed_number = computed_number.join("");

        // Or just
        let computed_number = parsed_number.toString().split("").reverse().join("");

        console.info(`Computed number: ${computed_number}`);

        computed_number_display.textContent = computed_number;
        source_number_display.textContent = parsed_number;
    }
}