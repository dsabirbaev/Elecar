


// popular cars slides

$('.popular-cars__cards ').slick({
  dots: true,
  arrows: false,
  infinite: true,   //бесконечный цикл
  speed: 300,
  slidesToShow: 3,
  autoplay:false,
  autoplaySpeed:800,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots slick-dots-3'
      }
    }
  ]

});


