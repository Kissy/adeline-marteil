var dropdownMenu;

$(document).on('mouseenter', '.dropdown-menu-button', function() {
    $(this).children('.dropdown-menu').stop(true, true).slideDown(100);
}).on('mouseleave', function() {
    $(this).children('.dropdown-menu').stop(true, true).slideUp(100);
});
$(document).on('submit', '#contact_form', function() {
    $('<div class="alert alert-success" style="display: none;">' +
                '<button type="button" class="close" data-dismiss="alert">×</button>' +
                '<strong>Thanks !</strong> Your form was submitted successfully.' +
            '</div>').appendTo('#contact_form_alerts').slideDown('fast').delay(5000).slideUp('fast', function() {
                $(this).remove();
            });
    $('#contact_form').find('input:not(hidden), textarea').val('');
});
$(document).on('keyup', '#search_input', runSearch);

var searchData, filteredData;
function runSearch() {
    var search = $(this).val().toLowerCase();
    var results = filteredData.find('li').filter(function(index) {
        return $(this).attr('data-id').toLowerCase().indexOf(search) != -1;
    });
    searchData.quicksand(results, {
        duration: 250
    });
}

$(document).ready(function() {
    searchData = $('#search_data');
    filteredData = searchData.clone();
    $('#home-slider').pikachoose({
        text: {previous: "", next: ""},
        showCaption:false
    });
    $('#post-slider').pikachoose({
        text: {previous: "", next: ""},
        showCaption:false
    });
});