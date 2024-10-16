/**
 * 2.6 - Connecting HTML to JavaScript!
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("die").addEventListener("mouseenter", a);
document.getElementById("die").addEventListener("mouseleave", b);

/*** Functions ***/

// Return a random integer from `min` to `max`, inclusive
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function a() {
    document.getElementById("die").textContent = "👻"
}

function b() {
    document.getElementById("die").textContent = "🎲"
}