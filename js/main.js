$(function () {
    $('.rev_slider').slick({

  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed:1000,

  centerMode: true,
  centerPadding: '250px',

  prevArrow: "<img src='/slick/fonts/prev.png' class='prev' alt='1'>",
    nextArrow: "<img src='/slick/fonts/next.png' class='next' alt='2'>",
    })
})

$(function () {
  $('.resp_slider').slick({

slidesToShow: 2,
autoplay: true,
autoplaySpeed: 2000,
speed:1000,


prevArrow: "<img src='/slick/fonts/prev.png' class='prev' alt='1'>",
  nextArrow: "<img src='/slick/fonts/next.png' class='next' alt='2'>",
  })
})


$('.aniview').AniView();

var options = {
  animateClass: 'animate__animated', // for v3 or 'animate__animated' for v4
  animateThreshold: 100,
  scrollPollInterval: 20
}

$('.aniview').AniView(options);