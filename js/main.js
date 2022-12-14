'use strict'

const menuBtn = document.querySelector('.navigation__button');
const menuList = document.querySelector('.navigation__list');
const menuItems = document.querySelectorAll('.navigation__item');

menuBtn.addEventListener('click', () => {
    toggleClasses();
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        toggleClasses();
    })
})

function toggleClasses() {
    menuBtn.classList.toggle('navigation__button_closed');
    menuBtn.classList.toggle('navigation__button_opened');
    menuList.classList.toggle('navigation__list_closed');
    menuList.classList.toggle('navigation__list_opened');
}
