$('document').ready(function () {
    $('.item a').on('click', function() {

        if ($(this).parent().hasClass('open')) {
            $('.item').removeClass('open');
            $(this).attr('aria-expanded', 'false');
        } else {
            $('.item').removeClass('open');
            $(this).parent().addClass('open'); 
            $(this).attr('aria-expanded', 'true');
        }
    });
});