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
            //console.log(data);
            $.each(data.query.pages, function(i, item) {
                // GetOutput
                var output = getOutput(item);

                // Display Results
                $('#results').append(output);
            });
        });
}


// Build Output
function getOutput(item) {
    var pageId = item.pageid;
    var title = item.title;
    var extract = item.extract;
    //console.log(pageId);
    //console.log(title);
    //console.log(extract);
    // Build Output String
    var output = '<li>' + 
        '<div class="list-right">' +
        '<a target="_blank" href="https://en.wikipedia.org/?curid=' + pageId + '"><h3>' + title + '</h3>' +
        '<p>' + extract + '</p></a>' +
        '</div>' +
        '</li>';

    return output;
}
