// Initial array of Marvel Heroes
var marvelHeroes = ["Hulk", "Captain America", "Spider Man", "Black Panther", "Thor", "Captain Marvel", "Deadpool", "Thanos", "Doctor Strange"];

function displayHeroInfo() {
    var character = $(this).attr("character-name");
    console.log(this);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=BZ4nrtkLSYMkvzP4rRPdieBJEF69cwkH&limit=10";
    
    // Grabbing data with get method
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    // promises to get the result of ajax request
    .then(function(response){

        var results = response.data;
        console.log(results);
        
        $("#gifs-appear-here").empty();

        for (var i = 0; i < results.length; i++) {
        console.log(results[i]);

            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<div>").text("Rating: " + rating);
            var characterImage = $("<img>");
            characterImage.attr("src", results[i].images.fixed_height_still.url);

            characterImage.attr({
                "data-state": "still",
                "data-still": results[i].images.fixed_height_still.url,
                "data-animate": results[i].images.fixed_height.url,
                class: "gif"
            });  

            gifDiv.prepend(p);
            gifDiv.prepend(characterImage);
            
            $("#gifs-appear-here").append(gifDiv);
        };

        // Click gif files to change data-state
        $(".gif").on("click", function () {

            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });

    });
};

//function for diplaying hero data
function renderButtons() {

    // Preventing having repeated set of buttons that are already on the screen, when submitting with input value.
    $("#buttons").empty();

    // Looping through the array of heroes
    for (var i = 0; i < marvelHeroes.length; i++) {

        // Creating buttons for each hero in the array
        var a = $("<button>");

        // Adding a class of movie-btn to our button
        a.addClass("heroBtn");

        // Adding a data-attribute
        a.attr("character-name", marvelHeroes[i]);

        // Providing the character name on buttons
        a.text(marvelHeroes[i]);

        // Adding the button to the end of div id buttons
        $("#buttons").append(a);
    };
};

// Adding a click event
$(document).on("click", ".heroBtn", displayHeroInfo);

    renderButtons();

// Click event for the Submit button
$("#submit").on("click", function(event) {

    // Preventing to have dafault action when the page is refreshed
    event.preventDefault()

    // Grabbing the input value + trimming spaces
    var character = $("#input").val().trim();

    // Adding character from Search Input to the Array
    marvelHeroes.push(character);

    // Calling renderButtons which handles the processes of the array
    renderButtons();
});






// << My JS Codes Version 1 with commented out buttons on the HTML file, which still works very good >>


// $(document).ready(function() {

//     $(document).on("click", ".hero", function() {
//     // Instead of looking at individual id hero first and at the document second, which I used in the beginning: $(".hero").on("click", function())
//     // $(document).on("click", ".hero", function(): This looks at the document first, and then the id hero second.

//         var character = $(this).attr("data-character");
//         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=BZ4nrtkLSYMkvzP4rRPdieBJEF69cwkH";

//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         })

//             .then(function(response) {
//             // promises to get the result of ajax request.

//                 var results  = response.data;

//                 $("#gifs-appear-here").empty();

//                 for (var i = 0; i < 10; i++) {
                        
//                     var gifDiv = $("<div>");
//                     var rating = results[i].rating;
//                     var p = $("<p>").text("Rating: " + rating);
//                     var characterImage = $("<img>");
//                     characterImage.attr("src", results[i].images.fixed_height_still.url);

//                     characterImage.attr({
//                         "data-state": "still",
//                         "data-still": results[i].images.fixed_height_still.url,
//                         "data-animate": results[i].images.fixed_height.url,
//                         class: "gif"
//                     });

//                     gifDiv.prepend(p);
//                     gifDiv.prepend(characterImage);

//                     $("#gifs-appear-here").prepend(gifDiv);
//                 }

//                 // Click gif files to change data-state
//                 $(".gif").on("click", function () {

//                     var state = $(this).attr("data-state");
//                     if (state === "still") {
//                         $(this).attr("src", $(this).attr("data-animate"));
//                         $(this).attr("data-state", "animate");
//                     } else {
//                         $(this).attr("src", $(this).attr("data-still"));
//                         $(this).attr("data-state", "still");
//                     }
//                 });
//             });
//     });

//     $("#submit").on("click", function (event) {

//         event.preventDefault();
//             console.log("submit");

//         var createBtn = $("<button>");

//         createBtn.attr("class", "btn-primary btn hero");
//         createBtn.attr("data-character", $("#input").val());
//         createBtn.text($("#input").val());
//         console.log(createBtn);

//         $("#buttons").append(createBtn);
//     });

// })