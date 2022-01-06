$(".lookbook-img").eq(0).append("<img class='img-fluid' src='images/look1.png'>");
$(".lookbook-img").eq(1).append("<img class='img-fluid' src='images/look2.png'>");
$(".lookbook-img").eq(2).append("<img class='img-fluid' src='images/look1.png'>");
// $(".lookbook-title > h4").eq(0).html("men’s");
// $(".lookbook-title > h4").eq(1).html("women’s");
// $(".lookbook-title > h4").eq(2).html("your ");

$(".lookbook-title > div").addClass("lookbook_gender");
$(".lookbook_gender").eq(0).wrapInner("<h4>men’s</h4>");
$(".lookbook_gender").eq(1).wrapInner("<h4>women’s</h4>");
$(".lookbook_gender").eq(2).wrapInner("<h4>your</h4>");

$(".lookbook-title > p").eq(0).html("Lorem ipsum dolor sit amet eras facilisisconsectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.Elementum metus facilisis ut phasellu.");
$(".lookbook-title > p").eq(1).html("Pellentesque habitant morbi tristique senectus et netus et malesuada fames .Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.");
$(".lookbook-title > p").eq(2).html("See an item you like and click the  button to add it to your lookbook where you can create your own perfect look. It’s like your own boutique!");


$(".lookbook-title > span").html("lookbook");
$(".lookbook-img").eq(1).addClass("lookbook-img1");

$(".viewmore").hover(function () {
    $(this).css("border-color", "#00c8c8").css("background-color", "#00c8c8").css("color", "#ffffff");
}, function () {
    $(this).css("border-color", "#737373").css("background-color", "transparent").css("color", "#454647");
})