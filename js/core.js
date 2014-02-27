$(function() {

  Parse.$ = jQuery;

  // Conexion a parse
  Parse.initialize("KXIfDvwzfsjWsc4bsYMMxAu6XacQVps37ZAP1Rqf",
                   "x1c3bnr1LC2nxdg1pGM1Or9XYihqMxyhuODyluRg");
  console.log("conx establecida!");
  
  // BankNote Model
  var BankNote = Parse.Object.extend("Banknote", {
  // Default attributes for the todo.
    defaults: {
      content: "default bills",
      done: false
    },
  
  // Ensure that each todo created has `content`.
    initialize: function() {
      if (!this.get("content")) {
        this.set({
            "content": this.defaults.content
        });
      }
    },
  });
  
  // BankNote Collection
  var BankNoteList = Parse.Collection.extend({
  // Reference to this collection's model.
    model: BankNote,
    query: (new Parse.Query(BankNote)).equalTo("temperature", "hot")
  });

});
