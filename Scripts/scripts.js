// Toggle the navbar menu icons with change in device width

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// display the menu with mouse click
menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// On scroll the menu disappear
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}