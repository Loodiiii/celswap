document.addEventListener('DOMContentLoaded', function () {

    const splide1 = new Splide('.splide-1', {
        perPage: 4,
        type: 'loop',
        focus: 'center',
        pagination: false,
        arrows: false,
        drag: false,
        keyboard: false,
        autoplay: true,
        interval: 0,
        easing: "linear",
        speed: 3000,
        pauseOnHover: false,
        gap: "0em"//,
        // breakpoints: {
        //     1024: {
        //         gap: "5em"
        //     }
    }).mount();

    const splide2 = new Splide('.splide-2', {
        perPage: 4,
        type: 'loop',
        focus: 'center',
        pagination: false,
        arrows: false,
        drag: false,
        keyboard: false,
        autoplay: true,
        interval: 0,
        easing: "linear",
        speed: 3000,
        pauseOnHover: false,
        gap: "10em"//,
        // breakpoints: {
        //     1024: {
        //         gap: "5em"
        //     }
    }).mount();
});