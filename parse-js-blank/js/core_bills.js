$(function() {
    //define jQuery as $
    Parse.$ = jQuery;
    
    Parse.initialize("KXIfDvwzfsjWsc4bsYMMxAu6XacQVps37ZAP1Rqf",        "x1c3bnr1LC2nxdg1pGM1Or9XYihqMxyhuODyluRg");
        
        var bankNote = Parse.Object.extend("bankNote");
        var myBankNote = new bankNote();
        var query = new Parse.Query(bankNote);
        console.log(myBankNote);
        var now= new Date();
        //finding objects
        //query.equalTo("edad", "25");
    
        query.find({
          success: function(results) {
            console.log("Successfully retrieved " + results.length + " records.");
            var jsonArray = [];
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) { 
              jsonArray.push(results[i].toJSON());
              // var object = results[i];
              // $('.search_container').append(object.get('nombres'));
//             console.log(object.id + ' - ' + object.get('nombres')+ ' - ' +object.get('twitter'));
            }
            //load home page template
            var source = $('#main').html();
            var template = Handlebars.compile(source);
            var html = template(jsonArray);  // here's example with some details [link](http://screencast.com/t/XvPFuafRuIW)
        $('#main .search_container').append(html);
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });
        
       
});    
    