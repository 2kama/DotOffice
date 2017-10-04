$(document).ready(function() {


		cordova.plugins.backgroundMode.enable();

	    cordova.plugins.backgroundMode.overrideBackButton();














        var num = 0;



        $.ajax({
                  url: 'http://dotgroupltd.com/dot/v1/jobs/all?token=' + localStorage.userToken,
                  type: 'get',
                  data: {
                      
                  },
                  headers: {
                      device: "app",   //If your header name has spaces or any other char not appropriate
                  },
                  dataType: 'json',
                  success: function (data) {
                      

                         if(data.status == "ok") {

                            $.each(data.data.jobs, function (i, item) {

                            

                                if(item.accepted_by == ""){

                                  num++;


                                }

                           });
                      
                      }
                      else {

                      }


                  }


            });



          var noty = localStorage.msgcount + num;

          cordova.plugins.notification.badge.set(noty);



          cordova.plugins.backgroundMode.setDefaults({
          title: "DOT Office",
          text: "You have " + noty + " notification(s)",
          icon: 'icon', // this will look for icon.png in platforms/android/res/drawable|mipmap
          color: "#ffffff", // hex format like 'F14F4D'
          resume: true,
          hidden: false,
          bigText: true
      }); 








	    

  setInterval(function() {




  


	    	var num = 0;



	    	$.ajax({
                  url: 'http://dotgroupltd.com/dot/v1/jobs/all?token=' + localStorage.userToken,
                  type: 'get',
                  data: {
                      
                  },
                  headers: {
                      device: "app",   //If your header name has spaces or any other char not appropriate
                  },
                  dataType: 'json',
                  success: function (data) {
                      

                         if(data.status == "ok") {

                         		$.each(data.data.jobs, function (i, item) {

                            

		                            if(item.accepted_by == ""){

		                            	num++;


		                            }

		                     	 });
                      
              			  }
              			  else {

              			  }


              		}


          	});



          var noty = localStorage.msgcount + num;

          cordova.plugins.notification.badge.set(noty);



          cordova.plugins.backgroundMode.setDefaults({
	        title: "DOT Office",
	        text: "You have " + noty + " notification(s)",
	        icon: 'icon', // this will look for icon.png in platforms/android/res/drawable|mipmap
	        color: "#ffffff", // hex format like 'F14F4D'
	        resume: true,
	        hidden: false,
	        bigText: true
	    }); 



          }, 60000);
	     





});

