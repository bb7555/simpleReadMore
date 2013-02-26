// Simple Read More Expander
//Free to use and distribute

(function( $ ) {
  $.fn.readMore = function() {
  
   $(".read_more_toggle").click(function(){
	  
	   var boxNum = $(this).attr('data-box'); 
	   $("div[data-container='"+boxNum+"']").slideToggle();
   
		 if( $(this).text() === "READ MORE>>")
		 {
			 $(this).text("HIDE TEXT>>");
		 }else{
			 $(this).text("READ MORE>>");
		 }
	   
   });
	
	
  };
})( jQuery );