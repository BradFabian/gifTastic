$(document).ready(function() {

 



    $("button").on("click", function() {
      console.log("sumbit pressed");
      
     var person = $(this).attr("data-person");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=Mqi5t09DvIKIDGnmszL6uvWuCml9QX8o&limit=10";

    


    //ajax to call the api//
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      
       
        var results = response.data;
        console.log(results)
          // Looping over every result item
          for (var  j = 0; j < results.length; j++) {

          // Only taking action if the photo has an appropriate rating
            if (results[j].rating !== "r" && results[j].rating !== "pg-13") {
              // Creating a div with the class "item"
              var gifDiv = $("<div class='item'>");

              // Storing the result item's rating
              var rating = results[j].rating;

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag
              var personImage = $("<img data-state='still' class='gif'>");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              personImage.attr("src", results[j].images.fixed_height.url);

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(personImage);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#celebrities").prepend(gifDiv);

            }
          }
       });

     }); 


     $(".gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
     
});

