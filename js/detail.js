$(document).ready(function() {
    
  $('.img-select .img-item').click(function() {
    var imgSrc = $(this).find('img').attr('src');
    $('.img-showcase img').attr('src', imgSrc);
  });

  $('.purchase-info .btn').click(function() {
    var quantity = parseInt($('.purchase-info input').val(), 10);
    
    alert('Item added to cart : ' + quantity);
  });
});
