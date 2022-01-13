$(".lookbook-img").eq(0).append("<img class='img-fluid' src='images/look1.png'>");
$(".lookbook-img").eq(1).append("<img class='img-fluid' src='images/look2.png'>");
$(".lookbook-img").eq(2).append("<img class='img-fluid' src='images/look1.png'>");
// $(".lookbook-title > h4").eq(0).html("men’s");
// $(".lookbook-title > h4").eq(1).html("women’s");
// $(".lookbook-title > h4").eq(2).html("your ");

$(".lookbook-title > div:nth-child(1)").addClass("lookbook_gender");
$(".lookbook-title > div:nth-child(2)").eq(0).addClass("look-text");
$(".look-text").wrapInner("<h6>get the look for under £200! </h6>")

$(".lookbook_gender").eq(0).wrapInner("<h4>Jane’s</h4>");
$(".lookbook_gender > h4 > span").eq(0).wrapInner("lookbook").addClass("fw-light");
$(".lookbook_gender > h4").eq(0).addClass("d-flex order-3");
$(".lookbook_gender").eq(1).wrapInner("<h4>men’s</h4>");
$(".lookbook_gender").eq(2).wrapInner("<h4>women’s</h4>");
$(".lookbook_gender").eq(3).wrapInner("<h4>your</h4>");

$(".lookbook_gender > h6").addClass("order-2");
$(".lookbook-title > p").eq(0).html("We invited actress Jane Marshall to join us for the day and choose her perfect outfit from our vast range of womens fashion.");
$(".lookbook-title > p").eq(1).html("This is of course not true as this is just a design for a website and this is simply filler text.");

$(".lookbook-title > p").eq(2).html("Lorem ipsum dolor sit amet eras facilisisconsectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.Elementum metus facilisis ut phasellu.");
$(".lookbook-title > p").eq(3).html("Pellentesque habitant morbi tristique senectus et netus et malesuada fames .Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.");
$(".lookbook-title > p").eq(4).html("See an item you like and click the  button to add it to your lookbook where you can create your own perfect look. It’s like your own boutique!");

$(".lookbook-title > span").html("lookbook");
$(".lookbook-img").eq(1).addClass("lookbook-img1");

$(".viewmore").hover(function () {
    $(this).css("border-color", "#00c8c8").css("background-color", "#00c8c8").css("color", "#ffffff");
}, function () {
    $(this).css("border-color", "#737373").css("background-color", "transparent").css("color", "#454647");
})