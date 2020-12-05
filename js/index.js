console.log("this worked");

$(".subLevel").click(function() {
    $(this).toggleClass("active");
    $(this).siblings(".accordion").find(".bodyParagraph").toggleClass("expand");
});

$(".subLevel2").click(function() {
    $(this).toggleClass("active");
    $(this).siblings(".accordion").find(".bodyParagraph").toggleClass("expand");
    $(this).siblings(".accordion").find(".workEx").toggleClass("expand"); 
});

$(".hamburger").click(function() {
    $(this).siblings(".dropdown").toggleClass("drop");
});
