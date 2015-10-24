(function($){
//    var date = new Date("1/1/2001");
//
//    $('.my-clock').FlipClock(date.getTime(), {
//		clockFace: 'HourlyCounter',
//		countdown: false
//	});
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('.slider').slider({
        full_width: true
    });


$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
      

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 200
          }, 2000);
          return false;
        }
      }
    });


   



      /* Preloader */

      setTimeout(function(){
          jQuery('body').addClass('loaded');
      }, 10);

      function isEmail(email) {
          var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          return regex.test(email);
        }
      
      function handleComplete(){
        $("#name").val("").focus();
        $("#email").val("").focus();
        $("#message").val("").focus().blur();
        Materialize.toast('Thanks for your Message! I will revert back soon.', 3000);
          
      }

        $( "form#frmMessage" ).on( "submit", function( event ) {
          event.preventDefault();
            var formData = $(this).serializeObject();
          
            if(!isEmail(formData["entry.824636178"])){
                $(this).find('#email').addClass('invalid').focus();
                return false;
            }
                $.ajax({
					  type: "POST",
					  url: "https://docs.google.com/forms/d/1sx7iMb-hDoPmE_1pdIxbJ0Jlu2UtOlGDiMODNV0rq6U/formResponse",
					  data: formData,
					  success: function(response) {
					    console.log(response);
                         
					  },
                      error: function(res, status, err){
                         
                      },
                        complete:handleComplete,
					  dataType: "xml"
					});
            
        });
  }); // end of document ready
})(jQuery); // end of jQuery name space


