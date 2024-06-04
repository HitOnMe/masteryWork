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
var rotated = false;
document.getElementById('buy__option').onclick = function() {
    var div = document.getElementById('buy__arrow'),
        deg = rotated ? 0 : 180;
    div.style.webkitTransform = 'rotate('+deg+'deg)'; 
    div.style.mozTransform    = 'rotate('+deg+'deg)'; 
    div.style.msTransform     = 'rotate('+deg+'deg)'; 
    div.style.oTransform      = 'rotate('+deg+'deg)'; 
    div.style.transform       = 'rotate('+deg+'deg)'; 
    rotated = !rotated;
}
function myFunction(y) {
    var x = document.getElementById("FAQ__"+y);
    x.style.display = x.style.display != "block"?"block":"none";
  }
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  
let moon = document.querySelector('.moon')
let sun = document.querySelector('.sun')
function switchTheme(e) {
    
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); 
        moon.classList.remove('active')
        sun.classList.add('active')
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
        moon.classList.add('active')
        sun.classList.remove('active')
    }    
}
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;


if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        sun.classList.add('active')       
    } else{
    sun.classList.remove('active')
    }

}

toggleSwitch.addEventListener('change', switchTheme, false);

 
  