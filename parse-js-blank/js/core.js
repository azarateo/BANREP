parse-js-blank$(function() {
    //define jQuery as $
    Parse.$ = jQuery;
    
    Parse.initialize("7TlycTdYoIRguNbRzlvbgdAPAVPtZLEmqyABVXn2",
                     "Tb002zBkBoyAd0oP06ZZTv8rp2aNOBPyoZ6VMUko");
        var Cool4code = Parse.Object.extend("cool4code");
        var myCool4code = new Cool4code();
        var query = new Parse.Query(Cool4code);
    
        var now= new Date();    
       query.find({
         success: function(results) {
           console.log("Successfully retrieved " + results.length + " records.");
           // Do something with the returned Parse.Object values
           for (var i = 0; i < results.length; i++) { 
             var object = results[i];
               $(".search_container").append("<li>"+ object.get('nombres')+"</li>");
            console.log(object.id + ' - ' + object.get('nombres'));
           }
         },
         error: function(error) {
           alert("Error: " + error.code + " " + error.message);
         }
       });  
        
        var BlahView = Backbone.View.extend({
          el: '#test',
            
          initialize: function(){
                this.render();
          },    
            
          events: {
            "click search-input": "searchBills"
          },
        
          searchBills: function() {
            console.log("Accion buscar.");
          },
        
        });
        
        var blahView = new BlahView({ el: $('#myButtons') });
});    
    