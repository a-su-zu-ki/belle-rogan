import * as fn from "./modules/functions.js";
import * as scroll from "./modules/scroll.js";
import { Carousel } from "./modules/carousel.js";


function initSlide() {
  var slider = '[data-slide]',
      args = {
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
        fade: true,
        arrows: true,
        dots: true,
        customPaging: function(slider, i) {
          var $slide = $(slider.$slides[i]);               // クローンを気にしなくてOK
          var color  = $slide.data('slide-color'); 
          return '<button style="background:' + color + '"><span class="u-hidden-txt">' + (i+1) + '</span></button>';
        },
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false, 
        variableWidth: true
      };

  function init(elem) {
    var $this = $(elem);
    new Carousel(elem, args, args);

    $this.slick('slickPause');

    $this.parent().on('INVIEW', function() {
      $this.slick('slickPlay');
    });
  }

  $(slider).each(function() {
    init(this);
  });
}

function initGallery() {
  var selector = '[data-gallery]';
  var args = {
    autoplay: true,
    autoplaySpeed: 0,     // 連続スクロール用
    speed: 8000,          // 流れる速さ（長め推奨）
    cssEase: 'linear',    // 一定速度
    centerMode: true,
    slidesToShow: 1,      // variableWidth時は実質無視される
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    dots: false,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    variableWidth: true   // 各スライドに幅を持たせておく
  };

  var $targets = $(selector);
  if (!$targets.length) {
    console.warn('No element matched for', selector);
    return;
  }

  $targets.each(function () {
    var $this = $(this);
    if (!$this.hasClass('slick-initialized')) {
      new Carousel(this, args, args);
    }
    $this.slick('slickPause');
    $this.parent().on('INVIEW', function() {
      $this.slick('slickPlay');
    });
  });

  
}

$(function() {
  initSlide();
  initGallery();
  fn.setEvent();
  fn.setBreakPoint([767, 1366]);
  fn.setLayout(fn.checkLayout());
  scroll.setAnchorLink();
  scroll.setInView();
  
});