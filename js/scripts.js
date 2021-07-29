// Sticky Top Nav
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            document.getElementById("header").classList.add("sticky-top");
        } else {
            document.getElementById("header").classList.remove("sticky-top");
        }
    });
});

// Animate menu icon
function myFunction(x) {
    x.classList.toggle("change");
}

// Multi-item carousel
