var dropdownMenu;

$(document).on('mouseenter', '.dropdown-menu-button', function() {
    $(this).children('.dropdown-menu').stop(true, true).slideDown(100);
}).on('mouseleave', '.dropdown-menu-button', function() {
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

var searchData, filteredData, noResults, previousSearch = '';
function runSearch(event) {
    var search = $(this).val().toLowerCase();
    if (searchData.size() == 0) {
        if (event.which == 13) {
            window.location = '/work/#' + search;
        }
        return;
    }
    
    if (search == previousSearch) {
        return;
    }
    previousSearch = search;
    
    noResults.stop().hide('fast');
    var results = filteredData.find('li').filter(function(index) {
        return $(this).attr('data-id').toLowerCase().indexOf(search) != -1;
    });
    searchData.quicksand(results, {
        duration: 250
    });
    if (results.size() == 0) {
        noResults.stop().show('fast');
    }
}

$(document).ready(function() {
    searchData = $('#search_data');
    filteredData = searchData.clone();
    noResults = $('#no_results');
    $('#home-slider').pikachoose({
        text: {previous: "", next: ""},
        showCaption:false
    });
    $('#post-slider').pikachoose({
        text: {previous: "", next: ""},
        showCaption:false
    });
    $('input, textarea').placeholder();
    if (window.location.hash) {
        $('#search_input').val(window.location.hash.substring(1)).trigger('keyup');
    }
});