$(function(){
   /* Адаптивное меню */
   $('.icon span').click(function(){
      if($('.menu').is(':hidden')) {
         $('.menu').css('display','flex');
         $('.icon span').html('&#10006;');
      } 
      else {
         $('.menu').removeAttr('style');
         $('.icon span').html('&#9776;');
      }
   });
   /*  */
});