const swiper = new Swiper('.swiper', {
  // Optional parameters
  // 옵션
  // direction:'vertical',
  loop:true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function showNav(){
  document.querySelector('#main-nav').classList.toggle('main-nav-active');
}
