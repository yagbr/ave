$(".footer-section > div:nth-child(1)").addClass("footer-head");
$(".footer-section > div:nth-child(2)").addClass("footer-body").addClass("f-f-montserrat");
$(".footer-head").wrapInner("<h3></h3>");
$(".footer-head").addClass("f-f-montserrat");
$(".footer-head > h3").eq(0).html("INFORMATION");
$(".footer-body").eq(0).wrapInner("<ul><li><a href=''>The brand</a></li><li><a href=''>Local stores</a></li><li><a href=''>Customer service</a></li> <li><a href=''>Privacy & cookies</a></li>  <li><a href=''>Site map</a></li></ul>");
$(".footer-head > h3").eq(1).html("Why buy from us");
$(".footer-body").eq(1).wrapInner("<ul><li><a href=''>Shipping & returns</a></li><li><a href=''>Secure shopping</a></li><li><a href=''>Testimonials</a></li> <li><a href=''>Award winning</a></li>  <li><a href=''>Ethical trading</a></li></ul>");
$(".footer-head > h3").eq(2).html("YOUR ACCOUNT");
$(".footer-body").eq(2).wrapInner("<ul><li><a href=''>Sign in</a></li><li><a href=''>Register</a></li><li><a href=''>View cart</a></li> <li><a href=''>View your lookbook</a></li>  <li><a href=''>Track an order</a></li> <li><a href=''>Update information</a></li></ul>");
$(".footer-head > h3").eq(3).html("LOOKBOOK");
$(".footer-body").eq(3).wrapInner("<ul><li><a href=''>Latest posts</a></li><li><a href=''>Men’s lookbook</a></li><li><a href=''>Women’s lookbook</a></li> <li><a href=''>Lookbooks RSS feed</a></li>  <li><a href=''>View your lookbook</a></li> <li><a href=''>Delete your lookbook</a></li></ul>");
$(".footer-head > h3").eq(4).html("CONTACT DETAILS");

$(".footer-section > .footer-body > div:nth-child(1)").addClass("address");
$(".footer-section > .footer-body > div:nth-child(2)").addClass("telephone");
$(".footer-section > .footer-body > div:nth-child(3)").addClass("email");
$(".footer-body > .address").wrapInner("<a href='http://maps.google.com/?q=1200 Head Office: Avenue Fashion,  180-182 Regent Street, London.' target='_blank'>Head Office: Avenue Fashion,  180-182 Regent Street, London.</a>");
$(".footer-body > .telephone").wrapInner("<label>Telephone: </label> <a href='tel:+0123-456-789'>0123-456-789 </a>");
$(".footer-body > .email").wrapInner("<label>Email: </label> </label> <a href='mailto:support@yourwebsite.com'>support@yourwebsite.com</a>");
$(".footer-head > h3").addClass("text-uppercase").addClass("fw-normal");
$(".footer-body > ul").addClass("list-unstyled");


$(".footer-body a").addClass("text-decoration-none").addClass("f-f-montserrat").addClass("fw-light");
// $(".footer-body a").addClass("text-decoration-none");

$(".footer-bottom-1").wrapInner("<strong>award winner </strong> <h4> fashion awards 2016</h4>");
$(".footer-bottom-1 > h4").addClass("fw-light");

$(".footer-bottom-2").wrapInner("<ul><li><a href=''><i class='fab fa-facebook-f'></i></a></li><li><a href=''><i class='fab fa-twitter'></i></a></li> <li><a href=''><i class='fab fa-instagram'></i></a></li> <li><a href=''><i class='fab fa-pinterest-p'></i></a></li> </ul>");
$(".footer-bottom-2 > ul").addClass("list-unstyled").addClass("d-flex justify-content-center");
$(".copyright").wrapInner("<h6> © 2016 Avenue Fashion™ </h6>");
$(".copyright > h6").addClass("mb-0").addClass("fw-normal");

$(".footer-body a").hover(function () {
    $(this).css("color", "#00c8c8");
}, function () {
    $(this).css("color", "#727272");
});

$(".footer-bottom-2 a i").hover(function () {
    $(this).css("transform", "rotate(20deg)").css("transition", ".2s");
}, function () {
    $(this).css("transform", "rotate(0deg)");
});