var swiper = new Swiper(('.swiper.first'), {
    spaceBetween: 10,
    initialSlide: 2,
    observer: true,
    loop: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
        nextEl: ".swiper-button-next.first",
        prevEl: ".swiper-button-prev.first",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            slidesPerGroup: 1,
            centeredSlides: true,
        },
    },
});

var swiper2 = new Swiper('.swiper.second', {
    spaceBetween: 100,
    initialSlide: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next.sec",
        prevEl: ".swiper-button-prev.sec",
    },
    autoHeight: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
            centeredSlides: true,
        },
    },
});

var swiper3 = new Swiper('.swiper.third', {
    initialSlide: 1,
      pagination: {
        el: ".swiper-pagination.third",
        clickable: true,
      },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    },
});

var swiper4 = new Swiper('.swiper.four', {
    spaceBetween: 30,
    initialSlide: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next.four",
        prevEl: ".swiper-button-prev.four",
    },
    pagination: {
        el: ".swiper-pagination.four",
        clickable: true,
      },
    autoHeight: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
    },
});