  
    MicroModal.init();
    
    function linkspopup() {
      MicroModal.show("modal-2");
      }


  // show modal on load

  // window.onload = function() {
  //     setTimeout(function() {
  //       MicroModal.show('modal-1');  
  //     }, 2000);     
  //   }




    var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.next a',
      prevEl: '.prev a',
    },
    autoplay: {
        delay: 3000,
      },
    loop: true,
    centeredSlides: true,
    slidesPerGroup: 1,
    });


    
    // window.onload = function() {
    //   setTimeout(() => {
    //     MicroModal.show('modal-1');  
    //   }, 2000);     
    // }


    // function linkspopup() {
    // MicroModal.show("modal-2");
    // }


    // var swiper = new Swiper('.swiper-container', {
    // navigation: {
    //   nextEl: '.next a',
    //   prevEl: '.prev a',
    // },
    // autoplay: {
    //     delay: 5000,
    //   },
    // loop: true,
    // centeredSlides: true,
    // slidesPerGroup: 1,
    // });
 




