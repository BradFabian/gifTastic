$(document).ready(function() {

    var userInput = "";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=Mqi5t09DvIKIDGnmszL6uvWuCml9QX8o&limit=10";
    
    //clickfunction for the userInput///
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)
        //obtain a refference to the div where the gifs go//

        //create and save a div that will be a gif//

        //append the gif to the div//


      });

        

    

});

