$(document).ready(function() {

    $(document).on("click", ".hero", function() {

        var character = $(this).attr("data-character");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=BZ4nrtkLSYMkvzP4rRPdieBJEF69cwkH";

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function(response) {
            // promises to get the result of ajax request.

                var results  = response.data;

                $("#gifs-appear-here").empty();

                for (var i = 0; i < 10; i++) {
                        
                    var gifDiv = $("<div>");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var characterImage = $("<img>");
                    characterImage.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(p);
                    gifDiv.prepend(characterImage);

                    $("#gifs-appear-here").prepend(gifDiv);
                }
            
            });









    });



})