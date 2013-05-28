$(function() {

  // Calculator
  var 
      $plus  = $('.basket-goods-i-count_control__plus'),
      $minus = $('.basket-goods-i-count_control__minus');

  var 
      price = 0,
      summ  = 0,
      total = 0,
      count = 0;

  $plus.click(function() {
    price = $(this).closest('.basket-goods-i').data('price');
    count = $(this).closest('.basket-goods-i').find('.basket-goods-i-count_input').val();
    count++;
    $(this).closest('.basket-goods-i').find('.basket-goods-i-count_input').val(count);
    summ = (price * count).formatMoney();
    $(this).closest('.basket-goods-i').find('.show-price_sum').text(summ);
    $(this).closest('.basket-goods-i').find('.js-summary-info').text(count + ' x ' + summ + ' руб.');
    totalPrice();
  });

  $minus.click(function() {
    price = $(this).closest('.basket-goods-i').data('price');
    count = $(this).closest('.basket-goods-i').find('.basket-goods-i-count_input').val();
    if (count >= 2) {
      count--;
      $(this).closest('.basket-goods-i').find('.basket-goods-i-count_input').val(count);
      summ = (price * count).formatMoney();
      $(this).closest('.basket-goods-i').find('.show-price_sum').text(summ);
      $(this).closest('.basket-goods-i').find('.js-summary-info').text(count + ' x ' + summ + ' руб.');
      totalPrice();
    }
  });

  // Add accessory
  $('.basket-goods-i_add-accessory').click(function() {
    if ( $(this).closest('.basket-goods-i').find('.basket-units').is(':hidden') ) {
      $(this).closest('.basket-goods-i').find('.basket-units').show();
      $(this).addClass('basket-goods-i_add-accessory__current');
    } else {
      $(this).closest('.basket-goods-i').find('.basket-units').hide();
      $(this).removeClass('basket-goods-i_add-accessory__current');
    }    
    return false;
  });

});

function totalPrice() {
  var 
      total = 0, 
      price = 0,
      summ  = 0;
  $('.basket-goods-i').each(function() {
    price = parseInt( $(this).data('price') );
    count = parseInt( $(this).find('.basket-goods-i-count_input').val() );
    summ  = (price * count);    
    total += summ;    
  });
  $('.js-total-price').text(total.formatMoney());
}