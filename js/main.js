$(document).ready(() => {
    $('.js-close-open-question').on('click', function(){
        $(this).toggleClass('select');

        $(this).parent().next().slideToggle();
    })
})