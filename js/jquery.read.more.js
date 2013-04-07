// Simple Read More Expander
//Free to use and distribute

(function($){
  $.fn.readMore = function(options) {
  
    var firstText = options.firstText;
    var lastText = options.lastText;

   $(".read_more_toggle").click(function(){
	  
	   var boxNum = $(this).attr('data-box'); 
	   $("div[data-container='"+boxNum+"']").slideToggle();
   
		 if( $(this).text() === firstText)
		 {
			 $(this).text(lastText);
		 }else{
			 $(this).text(firstText);
		 }
	   
   });
	
	
  };
})( jQuery );