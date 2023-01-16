// Первая карусель
$(document).ready(function(){
    $(".slide-one").owlCarousel({
      items:5,
      margin:10,
      loop:true,
      dots:true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsiveClass:true,
      responsive:{
        0:{
          items:1
        },
        520:{
          items:2
        },
        900:{
          items:3
        },
        1170:{
          items:4
        },
        1590:{
          items:5
        }
      }





    });
  });





// Вторая карусель
  $(document).ready(function(){
    $(".slide-two").owlCarousel({
      items:5,
      margin:10,
      loop:true,
      dots:true,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      responsiveClass:true,
      responsive:{
        0:{
          items:1
        },
        520:{
          items:2
        },
        900:{
          items:3
        },
        1170:{
          items:4
        },
        1590:{
          items:5
        }
      }

    });
  });