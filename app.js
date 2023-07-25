"use strict";
// Page Navigation
const $ = document.querySelector.bind(document);

$(".navbar ul").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("nav-link")) {
        const id = e.target.getAttribute("href");
        $(id).scrollIntoView({ behavior: "smooth" });
    }
});
