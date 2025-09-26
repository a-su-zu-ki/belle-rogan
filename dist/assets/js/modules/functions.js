/**
 *  Vars
 */

const vars = {
  breakpoint : [],
  layout : ''
}

/**
 * Functions
 */

export function getRandom(_min, _max) {
  return Math.random() * (_max - _min) + _min
}

export function setBreakPoint(_array) {
  vars.breakpoint = _array;
}

export function getBreakPoint() {
  return vars.breakpoint;
}

export function setLayout(_layout) {
  vars.layout = _layout;
}

export function getLayout() {
  return vars.layout; 
}

export function checkLayout() {
  if (window.matchMedia('(max-width:' + vars.breakpoint[0] + 'px)').matches) {
    return 'sp';
  } else if (window.matchMedia('(min-width:'+ (vars.breakpoint[0] + 1)+'px)').matches) {
    return 'pc';
  }
}

export function setEvent() {
  $(window)
    .resize(function() {
      var layout = checkLayout();
      if(vars.layout != layout) {
        vars.layout = layout;
        $(window).trigger('CHANGE_LAYOUT',[layout]);
      }
    });
}
