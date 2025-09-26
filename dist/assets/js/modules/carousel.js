/**
 * Carousel
 * 
 * @param {string}  _container  - ターゲット要素
 * @param {object}  _args       - Splide のパラメータ
 * @param {string}  _onlyDevice - 限定するデバイス(限定しない場合は空)
 */

// [js] ---------------------------------------
// const carousel = new Carousel('*[data-js-carousel]');

import {getLayout} from "./functions.js";

export class Carousel {
  constructor(_container, _args, _sp_args, _onlyDevice) {
    this.container = _container ? _container : document.querySelector(_container);
    this.args = $.extend({
      arrows: true,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="c-circle-arrow-white is-flip"></i></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="c-circle-arrow-white"></i></button>',
      pauseOnFocus: false,
      pauseOnHover: false,
      slidesToShow: 1,
      infinite: false,
      variableWidth: true,
      dots: false
    }, _args);
    this.sp_args = $.extend({
      arrows: true,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="c-circle-arrow-white is-flip"></i></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="c-circle-arrow-white"></i></button>',
      pauseOnFocus: false,
      pauseOnHover: false,
      slidesToShow: 1,
      infinite: false,
      variableWidth: true,
      dots: false
    }, _sp_args);
    this.onlyDevice = _onlyDevice ? _onlyDevice : '';
    this.init();
  }

  init() {
    var _self = this;
    _self.generate();
    $(window).on('CHANGE_LAYOUT', function(e,data) {
      _self.generate();
    });
  }

  generate() {
    const _self = this,
          $target = $(_self.container);

    if($target.is('.slick-initialized')) {
      $target.slick('unslick');
    }
    if(!_self.onlyDevice || getLayout() == _self.onlyDevice) {
      if(getLayout() == 'sp') {
        $target.slick(_self.sp_args);
      } else {
        $target.slick(_self.args);
      }
    } 
  }

  setEvent() {
    var _self = this;
    $(window).on('CHANGE_LAYOUT', function(e,data) {
      _self.generate();
    });
  }
}