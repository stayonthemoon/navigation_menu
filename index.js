const mainMenu = document.getElementById('mainMenu');
const hamburgerToggle = document.getElementById('hamburgerToggle');
const hamburgerMenu = document.getElementById('hamburgerMenu');

let activeItem = 'home';

function setActiveItem(id = false) {
    const mainButtons = mainMenu.querySelectorAll('.nav__button');
    const hamburgerButtons = hamburgerMenu.querySelectorAll('.hamburger_menu__button');

    mainButtons.forEach(button => {
        if (button.dataset.id === id) {
            button.classList.add('nav__button_active');
        } else {
            button.classList.remove('nav__button_active');
        }
    });

    hamburgerButtons.forEach(button => {
        if (button.dataset.id === id) {
            button.classList.add('hamburger_menu__button_active');
        } else {
            button.classList.remove('hamburger_menu__button_active');
        }
    });

    activeItem = id;
}

mainMenu.addEventListener('click', (event) => {
    const button = event.target.closest('.nav__button');
    if (button) {
        setActiveItem(button.dataset.id);
    }
});

hamburgerMenu.addEventListener('click', (event) => {
    const button = event.target.closest('.hamburger_menu__button');
    if (button) {
        setActiveItem(button.dataset.id, true);
        hamburgerMenu.classList.remove('hamburger_menu__list_visible');
        hamburgerToggle.classList.remove('open');
    }
});

hamburgerToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    hamburgerMenu.classList.toggle('hamburger_menu__list_visible');
    hamburgerToggle.classList.toggle('open');
});

// Close hamburger menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.hamburger_menu') && hamburgerMenu.classList.contains('hamburger_menu__list_visible')) {
        hamburgerMenu.classList.remove('hamburger_menu__list_visible');
        hamburgerToggle.classList.remove('open');
    }
});