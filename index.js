// Mobile Navbar
const navbarBurger = document.getElementById("navbar-burger")
const navbar = document.getElementById("navbar")

navbarBurger.addEventListener('click', () => {
navbar.classList.toggle('is-active');
});