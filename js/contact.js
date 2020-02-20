$(window).scroll(function () {
    var y = $(window).scrollTop()
    if (y <= 500) {
        $('.navbar').css('background-color', '#3EC0F4');
    } else if (y <= 800) {
        $('.navbar').css('background-color', 'rgba(70, 219, 249, 0.9)');
    } else {
        $('.navbar').css('background-color', '#6ae7e7');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#top-nav').fadeIn();
    } else {
        $('#top-nav').fadeOut();
    }
});

$('#top-nav').hide().click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});