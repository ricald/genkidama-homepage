﻿$(function () {
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.menu_item').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 100) {
        $(this).addClass("scrollin");
      }
    });
  });
});

var height = window.innerHeight;
document.documentElement.style.setProperty('--vh', height / 100 + 'px');