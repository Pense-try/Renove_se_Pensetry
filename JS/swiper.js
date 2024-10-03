const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        720: {
          slidesPerView: 3,
          spaceBetween: 20
        },
    },    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });

const swiperTwo = new Swiper('.swiper-two', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        720: {
          slidesPerView: 3,
          spaceBetween: 20
        },
    },    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-two',
      clickable: true,
    },
  
  });