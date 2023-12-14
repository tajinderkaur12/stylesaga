$(document).ready(function () {

    $(".img-item img").on("click", function () {
      var imgSrc = $(this).attr("src");
      $(".img-showcase img").attr("src", imgSrc);
    });
    
    $(".purchase-info .btn").on("click", function () {
        var quantity = parseInt($(this).siblings("input[type='number']").val(), 10);
        var productName = $(this).closest(".product-content").find(".product-title").text();
        
        alert("Added " + quantity + " " + productName + " to the cart");
    });

    $(".purchase-info .btn:contains('Compare')").on("click", function () {
        var productName = $(this).closest(".product-content").find(".product-title").text();
        
    });
  });