        saving objects
        myCool4code.save({
                    nombres: "Paola Vengas",
                    edad: '27',
                    twitter: "@pao"
              },{
              success: function(object) {
                $(".success").show();
              },
              error: function(model, error) {
                $(".error").show();
              }
        });