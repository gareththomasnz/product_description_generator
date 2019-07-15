$('input').keyup(function () {
    text = '';
    var product_name = $('#prod_name').val();
    var product_compare_price = $('#prod_compare_price').val();
    var product_description = $('#prod_description').val().replace(/\n/g, '<br/>');
    text = text1 + product_name + text2 + product_compare_price + text3 + product_description + text4;
    $('#out').html(text);
});

$('#prod_description').keyup(function () {
    text = '';
    var product_name = $('#prod_name').val();
    var product_compare_price = $('#prod_compare_price').val();
    var product_description = $('#prod_description').val().replace(/\n/g, '<br/>');
    text = text1 + product_name + text2 + text3 + product_description + text4;
    $('#out').html(text);
});

var text1 = "<p><span>Grab your Discounted ";
var text2 = " </span>while the store <b>LAUNCH DISCOUNT</b><span> is on. Once we reach 300-unit sales, we will be increasing the price back up.";
var text3 = "</span><b> This is absolutely a great gift!</b></p>\n" +
    "<p><b>ORDER NOW because these are FLYING off our shelves! Limit to 5 per customer max!</b></p><br/>\n" +
    "";
var text4 = "<br/><br/><br/>" +
    "<p><b><i>THIS PRODUCT HAS A LIMITED PRODUCTION AND IS NOT AVAILABLE IN STORES. THEY WILL SELL OUT FAST!</i></b></p>\n" +
    "<p><span>Click</span><span> </span><b><i>ADD TO CART<span> </span></i></b><span>to Order Yours Now!</span></p>\n" +
    "<p><b>Satisfaction Guaranteed with Every Order. All prices are listed in USD.</b></p>\n" +
    "<p><b>Shipping Info:</b></p>\n" +
    "<p><b>- Estimated Delivery Time: US 10-25 Days; Worldwide 15-30 Days.</b></p>\n" +
    "<h2><b>OUR GUARANTEE</b></h2>\n" +
    "<p><span>We truly believe we make some of the most innovative products in the world, and we want to make sure we back that up with a risk-free ironclad 30-day guarantee.</span></p>\n" +
    "<p><span>If you don't have a positive experience for ANY reason, we will do WHATEVER it takes to make sure you are 100% satisfied with your purchase.</span></p>\n" +
    "<p><span>Buying items online can be a daunting task, so we want you to realize that there are absolutely ZERO risks in buying something and trying it out. If you don't like it, no hard feelings we'll make it right.</span></p>\n" +
    "<p><span>We have 24/7 Ticket and Email Support. Please contact us if you need assistance.</span></p>";

