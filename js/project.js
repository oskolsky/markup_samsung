// DOM READY
// ----------------------------------------------------------------------------------------------------
$(function() {

  $.stickyFooter(40);

  /* Rotate banners */
  setTimeout(function(){
    $('.banners_i.__rotate').toggleClass('__rotate1 __rotate2')
  }, 3000);

   
  $('.page__newyear').find('.section').parallax("50%", 0.2);

  $('.scroll-pane').jScrollPane();

  $('#tabs').tabs();

  $('.js-tabs-open').click(function(event) {
    $('#tabs').tabs({'active': 1});
    return false;
  });

  // Scroll to
  $('.js-scroll-to').click(function() {
    var el = $(this).attr('href');
    var destination = $(el).offset().top;
    $('html, body').animate({scrollTop: destination}, 500);
    return false;
  });

  // Money format for price
  $('.js-price-format').each(function() {
    var price = parseInt($(this).text()).formatMoney();
    $(this).text(price);
  });

  // Insert img
  $('.insert-img').each(function() {
    var caption = $(this).attr('title');
    if (caption) {
      var data_location = $(this).attr('data-location');
      if (data_location == 'side') {
        var tpl = '<span class="insert-img_caption insert-img_caption__side">' + caption + '</span>';
        $(this).closest('p').addClass('p-r').css({'z-index': '1000'});
      } else if (data_location == 'center') {
        var tpl = '<span class="insert-img_caption insert-img_caption__center">' + caption + '</span>';
        $(this).closest('p').addClass('p-r').css({'text-align': 'center'});
      }
      $(this).after(tpl);
    }
  });

  // Gallery
  $('.gallery').find('.gallery-nav_i').click(function() {
    var rel = $(this).attr('rel');
    $('.gallery').find('.gallery_viewport').find('.gallery_viewport_i').hide();
    $('.gallery').find('.gallery_viewport').find('.gallery_viewport_i.__' + rel).fadeIn();
    $('.gallery').find('.gallery-nav_i').removeClass('gallery-nav_i__current');
    $(this).addClass('gallery-nav_i__current');
    return false;
  });

  
  $('.js-availability-toggle').click(function() {
    if ($('.availability-section').hasClass('availability-section__fade')) {
      $('.availability-section').removeClass('availability-section__fade');
      $('.availability-section').css({height: '100%'});
      $(this).text('Свернуть список');
    } else {
      $('.availability-section').addClass('availability-section__fade');
      $('.availability-section').css({height: '150px'});
      $(this).text('Развернуть список');
    }
    return false;
  });

  $('.catalog-filter_help').hover(function() {
    var 
        title = $(this).parent('span').attr('data-title'),
        tpl = '<div class="catalog-filter_tooltip">' + title + '</div>';
    $(this).parent('span').append(tpl);  
  }, function() {
    $(this).parent('span').find('.catalog-filter_tooltip').remove();
  });

  // DIALOGS
  // ----------------------------------------------------------------------------------------------------
  /* Open dialog */
  $(document).on('click', '[data-dialog]', function() {
    $.arcticmodal('close');
    var $this = $(this),
        id = $this.data('dialog');
    $.arcticmodal({
      type: 'ajax',
      url: '/views/dialogs/_' + id + '.html',
      afterLoadingOnShow: function() {
      }
    });
    return false;
  });

  /* Close dialog */
  $(document).on('click', '.dialog_close', function() {
    $.arcticmodal('close');
    return false;
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