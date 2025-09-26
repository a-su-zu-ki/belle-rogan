import * as fn from "./modules/functions.js";
import * as scroll from "./modules/scroll.js";
import { Carousel } from "./modules/carousel.js";


function initItem() {
  var slider = '[data-slide]',
      args = {
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        slidesToShow: 1,
        arrows: true,
        dots: true,
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

$(function() {
  fn.setEvent();
  fn.setBreakPoint([767, 1366]);
  fn.setLayout(fn.checkLayout());
  scroll.setAnchorLink();
  scroll.setInView();
  initItem();
});