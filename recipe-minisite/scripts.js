// JS for responsive recipe

document.addEventListener("DOMContentLoaded", function(){

    // responds to clicks on the burger icon
    document.querySelector("navBurger").addEventListener("click", function(e){
        document.querySelector("nav").classList.toggle("clicked");

    });
});