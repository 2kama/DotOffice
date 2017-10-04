$(document).ready(function() {







          $.ajax({
                  url: 'http://dotgroupltd.com/dot/v1/inbox?token=' + localStorage.userToken,
                  type: 'get',
                  data: {
                      
                  },
                  headers: {
                      device: "app",   //If your header name has spaces or any other char not appropriate
                  },
                  dataType: 'json',
                  success: function (data) {
                      console.log(data);

                      if(data.status == "ok") {

                        var counte = 0;

                         $.each(data.data.messages, function (i, item) {
                             
                              counte++;
                          });


                         var pis = counte - parseInt(localStorage.msgcount);


                         $('span.sup').html(pis);


                         if(pis >= 1) {
                            //navigator.vibrate(1000);
                         }






                      }

                      
                  }
              });







});