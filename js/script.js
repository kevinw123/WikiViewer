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

    // Run GET Request on API
    $.get(
        "http://en.wikipedia.org/w/api.php?action=query", {
            format: 'json',
            prop: 'extracts',
            generator: 'search',
            exsentences: '2',
            exlimit: 'max',
            exintro: '1',
            explaintext: '1',
            gsrnamespace: '0',
            gsrsearch: q
        },
        function(data) {
            console.log(data);
            /*$.each(data.items, function(i, item) {
                // GetOutput
                var output = getOutput(item);
                // Display Results
                $('#results').append(output);
            });*/
        }
    );
}