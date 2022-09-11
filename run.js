//setting const with querySelector from the html file to have easy access to the html file.
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')


//Setting the function for the monbile dropdown function,
 const mobileMenu = () => {
     menu.classList.toggle('is-active');
     menuLinks.classList.toggle('active');
 };

 //not adding to the click function on the mobile view.
menu.addEventListener('click', mobileMenu);

// show active menu when scrolling

const highlightMenu = () => {

const elem = document.querySelector('.highlight')
const homeMenu = document.querySelector('#home-page')
const aboutMenu = document.querySelector('#about-page')
const serviceMenu = document.querySelector('#services-page')
let scrollPos = window.scrollY

// adds highlight class to my menu items
if (window.innerWidth > 960 && scrollPos <600 ){
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
}else if (window.innerWidth > 960 && scrollPos <1400 ){
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    serviceMenu.classList.remove('highlight');
    return;
}else if (window.innerWidth > 960 && scrollPos <2500 ){
    serviceMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;

}

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


// Close menu while clicking on the menu item.

const hideMobileMenu = () => {
    const mobileBar = document.querySelector('.is-active')
    if (mobileBar){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    } 
};

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu);