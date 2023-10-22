const buttonUp = document.querySelector(".demonstration__button--up");
const buttonDown= document.querySelector(".demonstration__button--down");
const table = document.querySelector(".demonstration__table-image");

buttonUp.addEventListener('click', function(evt) {
        evt.preventDefault();
        table.classList.remove("animated-down");
table.classList.add("animated-up");
})

buttonDown.addEventListener('click', function(evt) {
        evt.preventDefault();
table.classList.remove("animated-up");
table.classList.add("animated-down");
})


