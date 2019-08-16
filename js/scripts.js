$(document).ready(function() {
  var headerHeight = $('header').innerHeight();
  $("nav ul li a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top - headerHeight
     }, 300, function(){
   });

   });
});
