jQuery.fn.webkitRepaint = function () {
  var elem = this.get(0);
  var disp = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight;
  elem.style.display = disp;
  return this;
}
