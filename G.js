let btn_start = document.getElementById("start");
let btn_reset = document.getElementById("reset");
let btn_check = document.getElementById("check");

let main_div = document.getElementById("main-div");

let guess_box = document.getElementById("guess-box");
let all_guesses = document.getElementById("all-guesses");
let high_or_low = document.getElementById("high-or-low");


let low = 1;
let high = 10;
let random_num = Math.floor(Math.random() * high) + low;

let count_guess = 1;

function start() {
    main_div.style.visibility = "visible";
}

function checkGuess() {
    var your_guess = Number(guess_box.value);

    if (count_guess <= 3) {
        if (your_guess < random_num) {
            all_guesses.textContent += your_guess + " ";
            alert(" Correct answer is smaller!");
            count_guess++;
            guess_box.value = '';
        }
        else if (your_guess > random_num) {
            all_guesses.textContent += your_guess + " ";

            alert(" Correct answer is greater!");

            count_guess++;
            guess_box.value = '';
        }
        else {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = "Congratulations! You Have won!.";
            high_or_low.classList.add("success");
            guess_box.value = '';
            gameOver();
        }
    }
    else {
        all_guesses.textContent += your_guess + " ";
        high_or_low.textContent = "Sorry ! You have Lose!";
        high_or_low.classList.add("wrong");
        guess_box.value = '';
        gameOver();
    }
}

function gameOver() {
    btn_check.disabled = true;
    guess_box.disabled = true;
}