$(document).ready(function() {
    $("#toggle").click(function() {
        $("header .nav-ul").slideToggle();
    });
});
$(function() {
	// Owl Carousel
	var owl = $(".owl-carousel");
		owl.owlCarousel({
		margin: 20,
		items:1,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		responsive: {
			0: {
			  items: 1
			},

			600: {
			  items: 1
			},

			1024: {
			  items: 3
			},

			1366: {
			  items: 3
			}
		  }
	});
});
$(function() {
	// Owl Carousel
	var owl = $(".active-slider");
		owl.owlCarousel({
		margin: 20,
		items:1,
		loop: true,
		nav: false,
		dots: true,
		animateOut: 'fadeOut',
		autoplay: true,
		responsive: {
			0: {
			  items: 1
			},

			600: {
			  items: 1
			},

			1024: {
			  items: 1
			},

			1366: {
			  items: 1
			}
		  }
	});
});

$(document).ready(function () {
    var products = [
        {
            name: "All",
            image:  "images/black frock.jpeg",
            description: "Lorem ipsum dolor sit amet.",
            category: "All",
            price: "All",
            color: "All",
        },
        {
            name: "All",
            image:  "images/Blue Floral Dress.jpeg",
            description: "Lorem ipsum dolor sit amet.",
            category: "All",
            price: "All",
            color: "All",
        },
        {
            name: "All",
            image:  "images/Denim jacket.jpeg",
            description: "Lorem ipsum dolor sit amet.",
            category: "All",
            price: "All",
            color: "All",
        },
        {
            name: "All",
            image:  "images/Grey pant.jpeg",
            description: "Lorem ipsum dolor sit amet.",
            category: "All",
            price: "All",
            color: "All",
        },
        {
            name: "All",
            image:  "images/knit top.jpeg",
            description: "Lorem ipsum dolor sit amet.",
            category: "All",
            price: "All",
            color: "All",
        },
        {
            name: "All",
            image:  "images/Winter jacket.jpeg",
            description: "Lorem ipsum dolor sit amet.",
            category: "All",
            price: "All",
            color: "All",
        },
    ];

    //product item//
    function createProductItem(product) {
        var listItem = $("<li>").addClass("layout-item");
        listItem.append('<img src="' + product.image + '">');
        listItem.append("<p>" + product.name + "</p>");
        listItem.append("<p>" + product.description + "</p>");
        listItem.append("<p>$" + product.price + "</p>");

        var purchaseInfo = $('<div class="purchase-info">');
        purchaseInfo.append('<input type="number" min="0" value="1">');
        purchaseInfo.append(
            '<button type="button" class="btn">Add to Cart <i class="fas fa-shopping-cart"></i></button>'
        );

        listItem.append(purchaseInfo);
        return listItem;
    }

    //filter products
    function filterProducts() {
        var selectedCategory = $("#clothing").val();
        var selectedPrice = $("#price").val();
        var selectedColor = $("#color").val();

        var filteredProducts = products.filter(function (product) {
            return (
                (selectedCategory === "all" || product.category === selectedCategory) &&
                (selectedPrice === "all" || product.price <= parseInt(selectedPrice)) &&
                (selectedColor === "all" || product.color === selectedColor)
            );
        });

        $("#layout").empty();
        filteredProducts.forEach(function (product) {
            $("#layout").append(createProductItem(product));
        });
    }

    $("#filter-options select").change(filterProducts);

    filterProducts();
});