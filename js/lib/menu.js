// Shorthand for $( document ).ready()
$(function() {


    $('.main-menu').on('click', function(e) {
        e.preventDefault();
        $('.main-menu-popup').bPopup({
            closeClass: 'close-popup',
            opacity: 0.4,
            follow: [false, false], //x, y
            position: ["0","52px"] //x, y

        });
    });

});