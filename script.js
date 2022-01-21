function toggle() {
    var element = document.getElementById("nav-t");
    element.classList.toggle("nav-content")
}

function darkTheme() {
    var body = document.querySelector("body");
    var nav = document.getElementById("navbar");
    body.classList.toggle("theme");
    nav.classList.toggle("theme-nav");
    var moon = document.getElementById("moon");
    moon.classList.toggle("light-icon");
    moon.classList.toggle("uil-sun");
    var home = document.querySelector("#h-the");
    home.classList.toggle("sell-theme");
    var footer = document.querySelector(".last");
    footer.classList.toggle("home-theme");
    var home = document.querySelector(".home");
    home.classList.toggle("home-theme");
    var icon = document.querySelector(".row3");
    icon.classList.toggle("ic-theme");

}