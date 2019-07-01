$(document).ready(function() {

    $(".hero").on("click", function() {

        var character = $(this).attr("data-character");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=BZ4nrtkLSYMkvzP4rRPdieBJEF69cwkH";

        $.ajax({
            url: queryURL,
            method: "GET"
        })









    });



})