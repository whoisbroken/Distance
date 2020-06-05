const burger = document.querySelector('.burger-menu'),
      menuSidebar = document.querySelector('.menu-sidebar');

burger.addEventListener('click', () => {
    menuSidebar.classList.toggle('active');
})
