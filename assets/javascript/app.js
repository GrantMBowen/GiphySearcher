var moviesArray = ["Shawshank Redemtion", "The Matrix", "Cool Hand Luke", "Rebel Without a Cause", "Gone with the Wind", "Open Range"];

$(document).ready(function() {
    for (var i = 0; i < moviesArray.length; i++) {
        $("#movie-buttons").append("<button type = 'button' onclick='searchGif(\"" + moviesArray[i] + "\")' class='btn btn-warning' style='margin: 5px' value=' " + moviesArray [i] + "'> " + moviesArray[i] + " </button>");
   }
});

function movieButtonClicked() {
    var userInput = $('#movie-input').val().trim();

    if (userInput) {
        $('#movie-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-success' value=' " + userInput + "'>" + userInput + "</button>");
    }
}

function searchGif(gifName) {
    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=LzFwoZvUsteMC912e7ifoGYF8kv9dxSz',
        type: 'GET',
    })
    .done(function(response) {
        displayGif(response);
    })
}

function displayGif(response) {
    $('#movies').empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
        '" data-still=" ' + response.data[i].images.fixed_height_still.url +
        ' " data-animate=" ' + response.data[i].images.fixed_height.url + '"data-state="still" class="movImage" style= "width:250px">';

        image = '<div class="col-md-4">' + image + "</div>";
        $("#movies").append(image);
    }

    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }
    });
}
