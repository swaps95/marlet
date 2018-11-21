/* Author: 

*/

 $(document).ready(function(){
      $('.your-class').slick({
				arrows:false,
				dots: true,
				autoplay:true,
				autoplaySpeed: 2000
			});
    });

 $(document).ready(function(){
      $('.work-text').slick({
				arrows:false,
				dots: true,
				autoplay:true,
				autoplaySpeed: 2000,
				responsive:[
					{
						breakpoint:767,
						settings: {
							dots:false
						}
					}
				]
				
			});
    });
$(document).ready(function(){
	var start = document.getElementById('header');
  var ham = document.getElementById('hamburger');

  ham.addEventListener('click',function(){
  if (start.style.display === "block") {
    start.style.display = "none";
  } 
  else { start.style.display = "block"; }
  
  })



});





