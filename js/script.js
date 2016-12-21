$(function() {
    var searchField = $('#query');

    $('#search-form').submit(function(e) {
        e.preventDefault();
    });
})

function search() {
    // Clear Results
    $('#results').html('');

    // Get Form Input
    q = $('#query').val();
    var searchURL = 'http://en.wikipedia.org/w/api.php?callback=?';
    // Run GET Request on API
    $.getJSON(searchURL, {
            action: 'query',
            generator: 'search',
            gsrnamespace: '0',
            gsrsearch: q,
            gsrlimit: '10',
            prop: 'extracts',
            exintro: '1',
            exlimit: 'max',
            exsentences: '2',
            explaintext: '1',
            format: 'json'
        })
        .done(function(data) {
            console.log(data);
        });
}