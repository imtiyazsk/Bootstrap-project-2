$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#head").addClass("active");
    }
    else {
        $("#head").removeClass("active");
    }
});