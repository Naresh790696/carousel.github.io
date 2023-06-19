
const Cardref = document.querySelectorAll(".container");
const Prebtn = document.querySelector(".preBtn");
const Nexbtn = document.querySelector(".nexBtn");

Cardref.forEach((element) => {
    let carddimensition = element.getBoundingClientRect();
    let cardwidth = carddimensition.width;

    Prebtn.addEventListener("click", () => {
        element.scrollLeft -= cardwidth
    });
    Nexbtn.addEventListener("click", () => {
        element.scrollLeft += cardwidth
    });
})
