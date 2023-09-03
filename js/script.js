// $('.slider').slick({
//     infinite: true,
//       dots: true,
//       arrows: false,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       fade: true,
//       fadeSpeed: 1000
//   });



$(function () {

    //Sticky header
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.navbar').addClass('sticky_header');
        }
        else {
            $('.navbar').removeClass('sticky_header');
        }
    });


    //==== Back-to-top button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    //==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });

    // venoBox
    new VenoBox({
        selector: '.my-video-links',
    });

    // lightbox
    lightbox.option({
        //'resizeDuration': 200,
        //'wrapAround': true,
        'fitImagesInViewport': true,
      });

});