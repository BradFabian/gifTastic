$(document).ready(function() {
    $("#addCelebrity").on("click", function() {
    var userInput = $(this).attr("");

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=Mqi5t09DvIKIDGnmszL6uvWuCml9QX8o&limit=10";
    
    //ajax to call the api//
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)
       
        var results = response.data;

          // Looping over every result item
          for (var i = 0; i < results.length; i++) {

            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              // Creating a div with the class "item"
              var gifDiv = $("<div class='item'>");

              // Storing the result item's rating
              var rating = results[i].rating;

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag
              var personImage = $("<img>");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              personImage.attr("src", results[i].images.fixed_height.url);

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(personImage);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#celebrities").prepend(gifDiv);

              //also create button for celebrity search and append too div id celebrityButtons//
            }

        }

        

        


      });

        

    
    });    
});

