// window.onscroll = function() {myFunction()};

function myFunction() {
    var navbar = document.getElementById("navbar");
    var navbarsmall = document.getElementById("navbar-small");
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            navbar.classList.add("navbar-ontop");
            navbarsmall.classList.add("navbar-ontop-small");

        } else {
            navbarsmall.classList.remove("navbar-ontop-small");
            navbar.classList.remove("navbar-ontop");

        }

}



var x = window.addEventListener("scroll", myFunction);




function openNav() {
    document.getElementById("target").style.width = "150px";
    document.getElementById("slide").style.width = "150px";
}


function closeNav() {

    document.getElementById("target").style.width = "0";
    document.getElementById("slide").style.width = "0";

}