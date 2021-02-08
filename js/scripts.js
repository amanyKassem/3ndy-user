$(document).ready(function () {

    // show check in auth form
    $('.authForm input').blur(function(){
        if($(this).val()){
            $(this).next('.fa-check').addClass("toggleOpacity");
        } else{
            $(this).next('.fa-check').removeClass("toggleOpacity");
        }
    });

    // header active link
    $(".menuLinks li a[data-value]").click(function () {
        $("html , body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top - 140
        }, 1000);
        $(this).parent().addClass("active").siblings().removeClass("active");
        event.preventDefault();
    });

    // toggle menu
    $("header .toggle").click(function () {
        $(".overlay").css({
            "transform": "scaleX(1)"
        });

        $(".menu").addClass('ulDir');

    });

    $("header .overlay").click(function () {
        $(this).removeAttr("style");
        $(".menu").removeClass("ulDir");
    });


    // toggle fav
    $(".favBlock .fa-heart").click(function () {
        $(this).toggleClass("fav");
    });


    // toggle edit pass block
    $(".editPass , .confirmPass").click(function () {
        $('.editPassBlock').fadeToggle();
    });

    // upload profile image
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.changeImg img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".file-upload").on('change', function(){
        readURL(this);
    });


    // sliders
    $('#owl-demo').owlCarousel({
        center: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        autoplay: true,
        loop: true
    });



    //scroll top
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.fadeIn(1000);
        } else {
            scrollButton.fadeOut(1000);
        }
    });

    //click to scroll top
    scrollButton.click(function () {
        $('html,body').animate({scrollTop: 0}, 600);
    });

});

/* loading screen */
$(window).on('load', function () {

    $(".layer-preloader").fadeOut(700, function () {

        $(".lds-dual-ring").delay(1000).fadeOut(700);

        $("body").css("overflow-y", "auto");

    });

});