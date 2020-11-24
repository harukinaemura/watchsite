$(function(){
 
    /* TOP-Pageボタン制御 */
    $('.page-top').hide();  // TOP-Pageボタン非表示
  
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {    // スクロールが100に達したらボタン表示
          $('.page-top').fadeIn();
        } else {
          $('.page-top').fadeOut();
        }
    });
  
    $('.page-top').click(function () {      // TOP-Pageボタンクリックされた時
        $('body,html').animate({scrollTop: 0}, 500);  // TOPへスクロール
        return false;
    });

    /* WayPoint */
   $('.watch-white1 img').waypoint(function(){
    if($('.watch-white1 img').css('visibility') == 'visible') {
      //すでに表示中のときは何もしない
    }
    else {
      $('.watch-white1 img').css('visibility','visible');
      $('.watch-white1 img').toggleClass('animated fadeInLeft');
    }
    },{offset: '50%'}
    );

    $('.watch-white2 img').waypoint(function(){
      if($('.watch-white2 img').css('visibility') == 'visible') {
        //すでに表示中のときは何もしない
      }
      else {
        $('.watch-white2 img').css('visibility','visible');
        $('.watch-white2 img').toggleClass('animated fadeIn');
      }
      },{offset: '50%'}
      );

      $('.watch-black1 img').waypoint(function(){
        if($('.watch-black1 img').css('visibility') == 'visible') {
          //すでに表示中のときは何もしない
        }
        else {
          $('.watch-black1 img').css('visibility','visible');
          $('.watch-black1 img').toggleClass('animated fadeInDown');
        }
        },{offset: '50%'}
        );

        $('.watch-black2 img').waypoint(function(){
          if($('.watch-black2 img').css('visibility') == 'visible') {
            //すでに表示中のときは何もしない
          }
          else {
            $('.watch-black2 img').css('visibility','visible');
            $('.watch-black2 img').toggleClass('animated fadeInUp');
          }
          },{offset: '50%'}
          );

          $('.watch-pink1 img').waypoint(function(){
            if($('.watch-pink1 img').css('visibility') == 'visible') {
              //すでに表示中のときは何もしない
            }
            else {
              $('.watch-pink1 img').css('visibility','visible');
              $('.watch-pink1 img').toggleClass('animated fadeInUp');
            }
            },{offset: '50%'}
            );

            $('.watch-pink2 img').waypoint(function(){
              if($('.watch-pink2 img').css('visibility') == 'visible') {
                //すでに表示中のときは何もしない
              }
              else {
                $('.watch-pink2 img').css('visibility','visible');
                $('.watch-pink2 img').toggleClass('animated fadeInDown');
              }
              },{offset: '50%'}
              );

              $('.watch-garary img').waypoint(function(){
                if($('.watch-garary img').css('visibility') == 'visible') {
                  //すでに表示中のときは何もしない
                }
                else {
                  $('.watch-garary img').css('visibility','visible');
                  $('.watch-garary img').toggleClass('animated fadeIn');
                }
                },{offset: '50%'}
                );

               
     
});