$(function() {
    $(".theme-quiz td a").click(function() {
        if ($(this).children().hasClass("point-interrogation")) {
            // $(".point-interrogation").slideUp("slow");
            $(".point-interrogation").remove();
            $(".blind-test").slideDown("slow");
        } else {
            if ($(this).hasClass("background-none")) {
                $(this).children().css({opacity: 0, visibility: "visible"}).animate({opacity: 1.0}, 500);
                $(this).removeClass("background-none");
            } else {
                $(this).children().css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0}, 500);
                $(this).addClass("background-none");
            }
        }
    });
});