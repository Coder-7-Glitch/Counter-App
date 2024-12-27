let counter = 0;
const count = document.getElementById("counter");
const add = document.getElementById("increment-btn");
const subtract = document.getElementById("decrement-btn");
const reset = document.getElementById("reset");
add.addEventListener('click', () => {
    counter++
    count.innerHTML = counter;
})
subtract.addEventListener('click', () => {
    counter--
    count.innerHTML = counter;
})
reset.addEventListener('click', () => {
    counter = 0
    count.innerHTML = counter;
})