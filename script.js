const prevBTN = document.getElementById("prev");
const nextBTN = document.getElementById("next");
const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".item");
const btn = document.querySelector(".btn");
const saibaBTN = document.querySelectorAll(".saiba");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");
const listItems = document.querySelector(".item");

let active = 0;
const total = items.length;
let timer;
let currentIndex = 0;

function update(direction) {
    document.querySelector(".item.active").classList.remove("active");
    document.querySelector(".dot.active").classList.remove("active");
    
    if (direction > 0) {
        active = (active + 1)

        if (active === total) {
            active = 0;
        }
    } else if (direction < 0) {
        active = (active - 1)
        if (active < 0) {
            active = total - 1;
        }

    }

    items[active].classList.add("active");
    dots[active].classList.add("active");

    numberIndicator.textContent = String(active + 1).padStart(2, "0");
}
clearInterval(timer);
timer = setInterval(() => {
    update(1);
}, 5000);

prevBTN.addEventListener("click", () => {
   update(-1);
})
nextBTN.addEventListener("click", () => {
    update(+1);
})


