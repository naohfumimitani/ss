/* global $ MobileDetect */

//top画像切り替え
const imgs = $('.img');
let Img = -1;
imgs.hide()

function showNextImg() {
    Img++;
    imgs.eq(Img % imgs.length).fadeIn(2000).delay(6000).fadeOut(2000, showNextImg);
  }
  showNextImg();

//トップに戻る
  $(function(){
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });
