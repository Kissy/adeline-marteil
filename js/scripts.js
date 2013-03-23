var dropdownMenu;

$('.dropdown-menu-button').on('mouseenter', function() {
    $(this).children('.dropdown-menu').stop(true, true).slideDown(100);
}).on('mouseleave', function() {
    $(this).children('.dropdown-menu').stop(true, true).slideUp(100);
});
$(document).ready(function() {
    $('#home-slider').nivoSlider({
        directionNav: false
    });
    $('#post-slider').nivoSlider({
        directionNav: true,
        controlNavThumbs: true
    });
});