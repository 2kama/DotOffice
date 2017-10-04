$(document).ready(function() {





        setInterval(function() {
        $(".loader").fadeTo(800, 0.2).fadeTo(800, 1.0);

    
        }, 1800);



		$('.profileName').html(localStorage.dotUserName);


         $('.open_drawer_panel').click(function() {
            $('.drawer').fadeIn();
         });

         $('.ex').click(function(){
            $('.drawer').fadeOut();
         });
         $('.pi').click(function() {
            $('.star').fadeOut();
            $('.spy').html("");
            $('.moon').fadeOut();
         });
         $('.qu').click(function() {
              $('.moon').fadeOut();
         });
         $('.addjob').click(function() {
              $('.moon').fadeIn();
         })





         $('.logout').click(function() {

         		localStorage.userToken = "";
                          localStorage.dotUserID = "";
                          localStorage.dotUserName = "";

                          setTimeout("location.href = 'index.html';", 1000);

         });


         $('.es').click(function() {
         		setTimeout("location.href= 'index.html';", 0000);

         });




         $('.open_message').click(function() {
                setTimeout("location.href = 'inbox.html';", 0000);
         });











});