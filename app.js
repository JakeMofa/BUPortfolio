$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 30) {
      $(".Classhead").css({
        background: "#6C5CE7",
        "box-shadow": "0 .2rem .5rem rgba(0,0,0,.4)",
      });
    } else {
      $(".Classhead").css({ background: "none", "box-shadow": "none" });
    }
  });

  $(".accordion-header").click(function () {
    $(".accordion .accordion-body").slideUp();
    $(this).next(".accordion-body").slideDown();
    $(".accordion .accordion-header span").text("+");
    $(this).children("span").text("-");
  });
});


 
// $('.navbar a').on('click', function (e) {
//   if (this.hash !== '') {
//     e.preventDefault();

//     const hash = this.hash;

//     $('html, body')
//       .animate({
//         scrollTop: $(hash).offset().top
//       },800);
//   }
// });


// const navMenu = document.getElementById('navMenu'),
//     sideNavbar = document.getElementById('sideNavbar'),
//     navClose = document.getElementById('navClose');

// showing menu
// sideNavbar.addEventListener('click', () => {
//     navMenu.classList.toggle('show')
// })

//hiding menu
// navClose.addEventListener('click', () => {
//     navMenu.classList.remove('show')
// })

// function func() {
//     window.alert("Your message has been sent successfully.");
// }


//Project swiper
let swiperProjectt = new Swiper('.projectt-container', {
  cssMode: true,
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  // mousewheel: true,
  // keyboard: true,
});