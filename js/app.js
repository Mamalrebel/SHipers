$(document).ready(function() {
    $('.navigation li').click(function() {
        $('.navigation li').removeClass('active')
         $(this).addClass('active')
    });
});

$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:2000,
    center:true,
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
