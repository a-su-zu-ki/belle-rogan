/**
 * Scroll
 */

export function to(_target, _diff, _speed) {
  var $target = $(_target).length ? $(_target) : $('.l-container'),
      scrollTop = $(window).scrollTop(),
      position = $target.length ? $target.offset().top : 0,
      distance = Math.abs(position - scrollTop),
      speed = _speed || Math.min(1000, Math.max(500, distance / 2)); // Adjust speed based on distance

  $('body,html').animate({scrollTop: position}, speed, 'swing');
}

export function setAnchorLink() {
  $('a[href^="#"]').on('click', (e) => {
    const $this = $(e.currentTarget),
          href = $this.attr('href');
    if(href != '#') {
      to(href, 1);
      return false;
    }
  });
}

export function setInView() {
  function init() {
    var scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
    $('[data-js-fadeinup],[data-js-inview],[data-js-fadeinup-wrapper] > *').each((index, element) => {
      var $element = $(element);
      if($element.hasClass('is-inview')) {
        return;
      } else {
        var position = $element.offset().top;
        if (scroll > position - windowHeight){
          $element.trigger('INVIEW').addClass('is-inview');
        }
      }
    });
  }
  $(window).resize(init).scroll(init);
  init();
}
