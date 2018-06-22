$(document).ready(function() {

  /*var celebritiesNames = ['Clint Eastwood', 'Madonna', 'Danny Devito']
  console.log(celebritiesNames);

      function buttonGenerator() {
        $('#celebrityButtons').empty()
        for ( var i = 0; i < celebritiesNames.length; i++ ) {
          var button= $('<button>');
          button.addClass('celebrityButton btn btn-warning');
          button.append(celebritiesNames[i]);
          button.attr("data-person", celebritiesNames[i]);

          $('#celebrityButtons').prepend(button);
        }
      }
      buttonGenerator()*/

    $("button").on("click", function() {
      console.log("sumbit pressed");
      
     var person = $(this).attr("data-person");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=Mqi5t09DvIKIDGnmszL6uvWuCml9QX8o&limit=10";
    //ajax to call the api//
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      
       $('#celebrities').empty();
        var results = response.data;
        console.log(results)
          // Looping over every result item
          for (var  i = 0; i < results.length; i++) {

          // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              // Creating a div with the class "item"
              var gifDiv = $("<div>");

              // Storing the result item's rating
              var rating = results[i].rating;

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag
              var personImage = $("<img>");
              personImage.addClass('perImg')
              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              personImage.attr("src", results[i].images.fixed_height_still.url);

              personImage.attr('data-still',results[i].images.fixed_height_still.url);

              personImage.attr('data-animate', results[i].images.fixed_height.url);

              personImage.attr('data-state', 'still');

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(personImage);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#celebrities").prepend(gifDiv);

            }
          }
          $('.perImg').on('click', function() {
            
            var state = $(this).attr('data-state'); 
            console.log(this);

            if (state == 'still') {
            
            $(this).attr('src', $(this).data('animate'));
            
            $(this).attr('data-state', 'animate');

            } else {
                    
            $(this).attr('src', $(this).data('still'));
            
            $(this).attr('data-state', 'still');
            }      
        });
       });

     });
          //capture input and submit to have gifs and buttons appear//

           //user submitfunction//
          var inputGif = [''];
          console.log(inputGif)

          // function to add button//
          $('#submitCelebrity').on('click', function() {
            var celebrityGif = $("#celebrityInput").val().trim();
            newButton = $("<button/>").addClass( "btn btn-warning").attr('data-person',celebrityGif).html(celebrityGif).css({'margin': '1px'});

            $("#celebrityButtons").append(newButton);
                console.log("Work");

               


                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + celebrityGif + "&api_key=Mqi5t09DvIKIDGnmszL6uvWuCml9QX8o&limit=10";

                console.log(queryURL);
         
         // call api//
          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
          
            $('#celebrities').empty();
            var results = response.data;
            console.log(results)
              // Looping over every result item
              for (var  i = 0; i < results.length; i++) {
    
              // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                  // Creating a div with the class "item"
                  var gifDiv = $("<div>");
    
                  // Storing the result item's rating
                  var rating = results[i].rating;
    
                  // Creating a paragraph tag with the result item's rating
                  var p = $("<p>").text("Rating: " + rating);
    
                  // Creating an image tag
                  var personImage = $("<img>");
                  personImage.addClass('perImg')
                  // Giving the image tag an src attribute of a proprty pulled off the
                  // result item
                  personImage.attr("src", results[i].images.fixed_height_still.url);
    
                  personImage.attr('data-still',results[i].images.fixed_height_still.url);
    
                  personImage.attr('data-animate', results[i].images.fixed_height.url);
    
                  personImage.attr('data-state', 'still');
    
                  // Appending the paragraph and personImage we created to the "gifDiv" div we created
                  gifDiv.append(p);
                  gifDiv.append(personImage);
    
                  // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                  $("#celebrities").prepend(gifDiv);
    
                }
              }
              $('.perImg').on('click', function() {
                
                var state = $(this).attr('data-state'); 
                console.log(this);
    
                if (state == 'still') {
                
                $(this).attr('src', $(this).data('animate'));
                
                $(this).attr('data-state', 'animate');
    
                } else {
                        
                $(this).attr('src', $(this).data('still'));
                
                $(this).attr('data-state', 'still');
                }      
            });
           });
          });

          $("#celebrityInput").val("");
          return false;
    })

   


