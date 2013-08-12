jQuery.fn.webkitRepaint = function () {
  return this.each(function(){
  	var elem = jQuery(this).get(0);
    var disp = elem.style.display;
    elem.style.display = 'none';
    elem.offsetHeight;
    elem.style.display = disp;
  });
};
