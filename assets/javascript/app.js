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