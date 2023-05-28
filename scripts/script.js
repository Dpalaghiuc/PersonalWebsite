/*
Student Name: Daniel Palaghiuc
File Name: script.js
Date: 17 APR2023
*/

// Hamburger menu function
function hamburger() {
  var menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Typed.js function on top of webpage
document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('.typed', {
    strings: [
      'An EOD Techncian',
      'An Army Veteran',
      'A Computer Science Student',
      'A Web Developer'
    ],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
  });
});


