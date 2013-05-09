// DOM READY
// ----------------------------------------------------------------------------------------------------
$(function() {

  $.stickyFooter(40);

  // Money format for price
  $('.js-price-format').each(function() {
    var price = parseInt($(this).text()).formatMoney();
    $(this).text(price);
  });

  // Insert img
  $('.insert-img').each(function() {
    var caption = $(this).attr('title');
    if (caption) {
      $(this).closest('p').addClass('p-r').css('z-index', '1000');
      var tpl = '<div class="insert-img_caption">' + caption + '</div>'
      $(this).after(tpl);
    }
  });

});

// DOCUMENT SCROLL
// ----------------------------------------------------------------------------------------------------
$(window).scroll(function() {});

// WINDOW LOAD
// ----------------------------------------------------------------------------------------------------
$(window).load(function() {});

// WINDOW RESIZE
// ----------------------------------------------------------------------------------------------------
$(window).smartresize(function() {

  $.stickyFooter(40);

});

// Custom function
Number.prototype.formatMoney = function(c, d, t){
  var n = this,
    c = c == undefined ? 0 : isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "," : d,
    t = t == undefined ? " " : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}