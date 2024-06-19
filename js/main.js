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

    $(".faq__title").click(function() {
        var target = $(this).data("target");
        var faqDetail = $(target);
        var faAngleDown = $(this).find("i.fa-angle-down");
        var faAngleUp = $(this).find("i.fa-angle-up");
    
        faqDetail.slideToggle(100); // Hiệu ứng slideToggle cho đoạn văn bản
        
        // Toggle class active và điều khiển hiệu ứng xoay của icon
        faqDetail.toggleClass("active__1");
        faAngleDown.toggleClass("hidden");
        faAngleUp.toggleClass("hidden");
      });

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
document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.getElementById('navbar-toggler');
    var navbarCollapse = document.getElementById('navbarNavDropdown');
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
    offcanvasElement.style.transition='none';
  });
  
  