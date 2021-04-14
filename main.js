"use strict";

var menuNav = document.getElementById('menu_nav');

var menuTrigger = document.getElementById('menu_trigger');

var headshot = document.getElementById('headshotImage');




function menuToggle() {
  if (menuNav.style.display === "flex") {
    menuNav.style.display = "none";
    menuTrigger.style.border = "4px solid purple"
    headshot.src = "headshot_clown.png";
    headshot.style.opacity = '0.5';
  } else {
    menuNav.style.display = "flex";
    menuTrigger.style.border = "8px solid yellow";
    headshot.src = "headshot.png";
    headshot.style.opacity = '1';
  }
  console.log("The menu has been toggled!")
}

menuTrigger.onclick = menuToggle;

window.onresize = function() {
  if (window.innerWidth >= 600) {
    menuNav.removeAttribute("style");
    menuTrigger.removeAttribute("style");
  } ;
}
