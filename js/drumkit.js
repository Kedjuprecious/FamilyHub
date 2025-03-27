function removeTransition(e) {
    if (e.propertyName !== "transform") return; // Ignore events that are not 'transform' transitions
    e.target.classList.remove("playing"); // Removes 'playing' class when transition ends
}

function playSound(e) {
    let keyCode;
    let key;

    if (e.type === "keydown") {
        keyCode = e.keyCode;
        key = document.querySelector(`div[data-key="${keyCode}"]`);
    } else if (e.type === "click") {
        key = e.currentTarget;
        keyCode = key.getAttribute("data-key");
    }

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    if (!audio) return; // If no matching audio is found, exit the function

    key.classList.add("playing"); // Adds a CSS class to visually indicate the key press
    audio.currentTime = 0; // Rewinds the audio to start
    audio.play(); // Plays the sound
}

// Select all elements with class "key" and convert NodeList to an array
const keys = Array.from(document.querySelectorAll(".key"));

// Add 'transitionend' event listener to each key
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// Add event listener for keyboard presses
window.addEventListener("keydown", playSound);

// Add event listener for mouse clicks on keys
keys.forEach(key => key.addEventListener("click", playSound));
