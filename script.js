function toggleMenu() {
    document.querySelector('.menu-links').classList.toggle('open');
    document.querySelector('.hamburger-icon').classList.toggle('open');
}
 
// Close the menu if someone clicks/taps outside of it
document.addEventListener('click', function (event) {
    const menu = document.querySelector('.menu-links');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
 
    if (!menu || !hamburgerMenu) return;
    if (!menu.classList.contains('open')) return;
 
    if (!hamburgerMenu.contains(event.target)) {
        menu.classList.remove('open');
        document.querySelector('.hamburger-icon').classList.remove('open');
    }
});
 
// If the window is resized past the tablet breakpoint, reset the menu state
window.addEventListener('resize', function () {
    if (window.innerWidth > 992) {
        const menu = document.querySelector('.menu-links');
        const icon = document.querySelector('.hamburger-icon');
        if (menu) menu.classList.remove('open');
        if (icon) icon.classList.remove('open');
    }
});
