$(function () {
  var pagetopAppear = false;
  var pagetop = $('#page_top');

  // ハンバーガーメニュー
  var hamburger = $('.header_hamburger');
  var nav = $('.header_nav');

  hamburger.click(function () {
    hamburger.toggleClass('is-open');
    nav.toggleClass('is-open');
  });

  nav.find('.header_nav_link').click(function () {
    hamburger.removeClass('is-open');
    nav.removeClass('is-open');
  });

  // スクロールアニメーション
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.menu_item').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 100) {
        $(this).addClass("scrollin");
      }
    });

    if (scrollAmount > 100) {
      if (pagetopAppear == false) {
        pagetopAppear = true;
        pagetop.stop().animate({ 'right': '1.5rem' }, 500);
      }
    } else {
      if (pagetopAppear == true) {
        pagetopAppear = false;
        pagetop.stop().animate({ 'right': '-5rem' }, 500);
      }
    }
  });

  // TOPへ戻る
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 1000);
    return false;
  });
});

var height = window.innerHeight;
document.documentElement.style.setProperty('--vh', height / 100 + 'px');