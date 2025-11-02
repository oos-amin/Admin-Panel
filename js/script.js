'use strict'

// Variables 
const headerMenu = document.querySelector('.toggle-menu');
const sidebar = document.querySelector('.aside');
const sidebarItems = document.querySelectorAll('.aside-content__item');
const overlay = document.querySelector('.overlay');
const body = document.body;
const seeMoreBtn = document.querySelectorAll('.see-more__btn');
const tableContainer = document.querySelectorAll('.table-container');

// Hamburger menu
headerMenu.addEventListener('click', function () {
    headerMenu.classList.toggle('toggle-menu--active');
    sidebar.classList.toggle('aside--active');
    overlay.classList.toggle('overlay--show')
    body.classList.toggle('no-scroll')
});

// Overlay effects
overlay.addEventListener('click', function () {
    overlay.classList.remove('overlay--show')
    headerMenu.classList.remove('toggle-menu--active');
    sidebar.classList.remove('aside--active');
    body.classList.remove('no-scroll')
});

// Add function to Sidebar Menu
for (let i = 0; i < sidebarItems.length; i++) {
    sidebarItems[i].addEventListener('click', function () {
        document.querySelector('.aside-content__item--active').classList.remove('aside-content__item--active');
        sidebarItems[i].classList.add('aside-content__item--active');
    });
}

// Move search box and profile to Sidebar (Below 768px devices)
function moveElements() {
    const header = document.querySelector('.header');
    const searchBox = document.querySelector('.search-box');
    const profile = document.querySelector('.profile');


    if (window.innerWidth <= 1200) {
        if (!sidebar.contains(searchBox)) {
            sidebar.appendChild(searchBox);
        }
        if (!sidebar.contains(profile)) {
            sidebar.appendChild(profile);
        }
    } else {
        if (!header.contains(searchBox)) {
            header.insertBefore(searchBox, header.firstChild);
        }
        if (!header.contains(profile)) {
            header.appendChild(profile);
        }
    }
}

window.addEventListener('load', moveElements);
window.addEventListener('resize', moveElements);


// Show the rest content of tables
for (let i = 0; i < seeMoreBtn.length; i++) {
    seeMoreBtn[i].addEventListener('click', function () {
        seeMoreBtn[i].classList.add('hidden');
        tableContainer[i].classList.add('see-more__btn--active')
    })
};
