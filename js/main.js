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
        0:{
            items:1
        },
        991.98:{
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

$(document).ready(function(){
  $('.faq__group').click(function() {
    var target = $(this).data("target");
    var faqDetail = $(target);
    var faAngleDown = $(this).find('i.col-1');
    // Toggle class active và điều khiển hiệu ứng xoay của icon
    faqDetail.toggleClass("active__2");
    faAngleDown.toggleClass("active__1");
  });
})

function featureExchange(id) {
  $(document).ready(function () {
    // Function to handle click events
    function handleClick(element) {
      var target = $(element).data("target");
      var featureDetail = $(target);
      var featureArrow = $(element).find('.feature__arrow');
      var featureTitle = $(element).find('h3');
      var featureAll = document.querySelectorAll('.feature__content');

      // Hide all button classes and feature contents
      $('.feature__button').not(element).removeClass('ft__border');
      $('.feature__arrow').not(featureArrow).removeClass('activeArrow');
      $(featureAll).not(featureDetail).removeClass('activeHeight');
      $('.feature__title').not(featureTitle).removeClass('h3__active');

      if (window.matchMedia('(max-width: 767.98px)').matches) {
        //Add transition to all alements
        $(featureAll).addClass('activeSmooth');
        // Toggle class to this element
        $(element).toggleClass('ft__border');
        $(featureDetail).toggleClass('activeHeight');
        $(featureArrow).toggleClass('activeArrow');
        $(featureTitle).toggleClass('h3__active');
      } else {
        // Only target feature can be shown
        $(featureAll).not(featureDetail).addClass('notForshow');
        $(featureDetail).removeClass('notForshow');
        // Remove transition to all elements
        $(featureAll).removeClass('activeSmooth');
        // Add class to this element
        $(featureDetail).addClass('activeHeight');
        $(featureTitle).addClass('h3__active');
        $('.feature__arrow').addClass('notForshow');
        $(element).addClass('ft__border');
      }
      // Save the state to localStorage
      localStorage.setItem('activeFeature', target);
    }

    // Handle click event for buttons
    $(id).click(function () {
      handleClick(this);
    });

    // Restore the state from localStorage when the page is loaded
    var activeFeature = localStorage.getItem('activeFeature');
    if (activeFeature) {
      var activeButton = $('[data-target="' + activeFeature + '"]');
      if (activeButton.length) {
        handleClick(activeButton[0]);
      }
    }
    // function change elements properties in different window sizes
    const parent1 = domID('card__1');
    const parent2 = domID('card__2');
    const parent3 = domID('card__3');
    const featureArrow = document.querySelectorAll('.feature__arrow');
    const babyChild = document.querySelectorAll('.feature__button');
    const beautyCard = document.querySelectorAll('.feature__card');
    const babyCard = document.querySelectorAll('.feature__content');
    const child1 = babyChild[1];
    const child2 = babyChild[2];

    // Store the initial state
    const storeChildren1 = [...parent1.children];
    const storeChildren2 = [...parent2.children];
    const storeChildren3 = [...parent3.children];

    function moveChildElement() {
      if (window.innerWidth > 767.98) {
        parent1.appendChild(child1);
        parent1.appendChild(child2);
        parent1.classList.add('activeFlex');
        parent2.classList.add('notForshow');
        parent3.classList.add('notForshow');
        babyChild.forEach(function (baby) {
          baby.style.textAlign = 'center';
          baby.style.borderBottom = '3px solid #cfcccc';
        });
        beautyCard.forEach(function (card) {
          card.style.outline = 'none';
        });
        $(featureArrow).addClass('notForshow');
      } else {
        // Restore the initial state
        storeChildren1.forEach(child => parent1.appendChild(child));
        storeChildren2.forEach(child => parent2.appendChild(child));
        storeChildren3.forEach(child => parent3.appendChild(child));
        parent2.classList.remove('notForshow');
        parent3.classList.remove('notForshow');
        babyCard.forEach(function(cardBaby){
          cardBaby.classList.remove('notForshow')
        })
        babyChild.forEach(function (baby) {
          baby.style.textAlign = 'left';
          baby.style.borderBottom = '1px solid var(--font-color)';
        });
        beautyCard.forEach(function (card) {
          card.style.outline = '1px solid var(--font-color)';
        });
        $(featureArrow).removeClass('notForshow');
      }
    }

    moveChildElement();
    window.addEventListener('resize', moveChildElement);
  });
}
function handleResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    moveChildElement(); // Gọi lại hàm xử lý khi kích thước đã ổn định
  }, 200); // Thời gian chờ sau khi resize để gọi lại hàm, ví dụ 200ms
}

featureExchange('.feature__button');
  // Adjust navbar height on scroll
function adjustNavbar() {
    const header = domID('header__fixed');
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        header.classList.add('navbar__fixed')
    } else{
        header.classList.remove('navbar__fixed')
    }
}
window.onscroll = adjustNavbar;
//prevent user from clicking button before the end of navbar toggle effect
multipleShow('#navbar-toggler', '#navbarNavDropdown')

function multipleShow(togglerClass, collapseClass){
  document.addEventListener('DOMContentLoaded', function () {
    var navbarTogglers = document.querySelectorAll(togglerClass);
    var navbarCollapses = document.querySelectorAll(collapseClass);
    
    navbarTogglers.forEach(function(navbarToggler, index) {
      var navbarCollapse = navbarCollapses[index];
      var isAnimating = false;

      navbarToggler.addEventListener('click', function () {
        if (isAnimating) return;
        isAnimating = true;

        setTimeout(function () {
          isAnimating = false;
        }, 300); // Duration of the collapse animation in ms

        // Toggle button states
        var isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
        navbarToggler.disabled = true;

        navbarCollapse.addEventListener('transitionend', function () {
          navbarToggler.disabled = false;
        }, { once: true });
      });
    });
  });
}

// Theme switching
const toggleSwitch = select('.theme-switch input[type="checkbox"]');
const moon = domID('moon');
const sun = domID('sun');

function switchTheme(e) {
    const isDark = e.target.checked;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    moon.classList.toggle('activeShow', !isDark);
    sun.classList.toggle('activeShow', isDark);
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    const isDark = currentTheme === 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleSwitch.checked = isDark;
    sun.classList.toggle('activeShow', isDark);
    moon.classList.toggle('activeShow', !isDark);
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
$(document).ready(function(){
    var $clearBtn = $('.form-control-clear');
    var $input = $('#popup-content input');

    // Kiểm tra ngay khi trang tải
    if ($input.val()) {
        $clearBtn.show();
    }

    // Lắng nghe sự kiện nhập liệu
    $input.on('input', function() {
        if ($(this).val()) {
            $clearBtn.show();
        } else {
            $clearBtn.hide();
        }
    });

    // Xóa nội dung khi nhấp vào nút xóa
    $clearBtn.on('click', function() {
        $input.val('').trigger('input').focus();
    });
});
loadContent('header', '../index.html #header__fixed');
loadContent('footer', '../index.html #footer__fixed');
$(document).ready(function() {
    $('#open-popup').magnificPopup({
      items: {
        src: '#popup-content',
        type: 'inline'
      },
      closeOnBgClick: false, // Vô hiệu hóa đóng khi click vào nền
      closeOnContentClick: false, // Vô hiệu hóa đóng khi click vào nội dung
      showCloseBtn: false, // Ẩn nút close mặc định
      callbacks: {
        open: function() {
          // Cho phép cuộn trang khi popup mở
          $('html').css('overflow', 'auto');
        },
        close: function() {
          // Đặt lại trạng thái cuộn trang khi popup đóng
          $('html').css('overflow', '');
        }
      }
    });

    // Thêm sự kiện click cho nút đóng
    $('#popup-content').on('click', '#close-popup', function() {
      $.magnificPopup.close();
    });
  });
  // luôn hiển thị nút hành động buy bên phải màn hình
  document.addEventListener('DOMContentLoaded', function () {
    var offcanvasElement = document.getElementById('offcanvasRight');
    var offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    offcanvas.show();
  });
  
  