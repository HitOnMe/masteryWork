/****************************************************** input function ****************************************/
/* navigate css element using ID */
function domID(id) {
    return document.getElementById(id);
}

/* navigate window element using ID */
function styleID(element) {
    return window.getComputedStyle(element);
}

/* navigate css element using selector */
function select(element) {
    return document.querySelector(element);
}
/* collect value from input */
function score(id) {
    var myScore = domID(id).value;
    return Number(myScore);
}



/****************************************************** output function ****************************************/
function html(id, content) {
    domID(id).innerHTML = content;
}
/****************************************************** method function ****************************************/
/* countUp js */
$('.mwcounter').countUp()
/* carousel js*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        767.98:{
            items:1
        },
        1499.98:{
            items:2
        }
    }
})
// Rotate arrow on click
let rotated = false;
domID('buy__option').onclick = function () {
    const div = domID('buy__arrow');
    const deg = rotated ? 0 : 180;
    div.style.transform = `rotate(${deg}deg)`;
    rotated = !rotated;
};
// Toggle FAQ display and rotate arrow
function myFunction(id) {
    const x = domID(`FAQ__${id}`);
    const a = domID(`button__arrow-${id}`);
    const deg = rotated ? 0 : 180;
    rotated = !rotated;
    let isExpanded = x.getAttribute('aria-expanded') === 'true';
    
    // Toggle the aria-expanded attribute
    x.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle the active class for bars and times
    x.classList.toggle('active');
    a.style.transform = `rotate(${deg}deg)`;
    
    
    
}
  // Adjust navbar height on scroll
function adjustNavbar() {
    const header = domID('header__fixed');
    header.style.height = (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) ? '70px' : '90px';
}
window.onscroll = adjustNavbar;

// Theme switching
const toggleSwitch = select('.theme-switch input[type="checkbox"]');
const moon = domID('moon');
const sun = domID('sun');

function switchTheme(e) {
    const isDark = e.target.checked;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    moon.classList.toggle('active', !isDark);
    sun.classList.toggle('active', isDark);
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    const isDark = currentTheme === 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleSwitch.checked = isDark;
    sun.classList.toggle('active', isDark);
}

toggleSwitch.addEventListener('change', switchTheme, false);
domID('navbar-toggler').onclick=function() {
    let bars = domID('bars');
    let times = domID('times');
    let isExpanded = this.getAttribute('aria-expanded') === 'true';
    
    // Toggle the aria-expanded attribute
    this.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle the active class for bars and times
    bars.classList.toggle('active');
    times.classList.toggle('active');
  };
 
  function loadContent(elementId, url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(elementId).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

loadContent('header', '../index.html #header__fixed');
loadContent('footer', '../index.html #footer__fixed');