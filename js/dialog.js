$(function() {

  // Geo dialog
  $('.open-dialog-geo').click(function() {
    $('.dialog__geo').fadeIn();
    return false;
  });

  // Call dialog
  $('.open-dialog-call').click(function() {
    $('.dialog__call').fadeIn();
    return false;
  });

  $('.dialog_close').click(function() {
    $('.dialog').fadeOut();
    return false;
  });

});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { $('.dialog').fadeOut(); }
});