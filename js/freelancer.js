/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
    return false;
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function() 
{ 

size_li = $("#blogEntries li").size();
x=4;
$('#blogEntries li:lt('+x+')').show();
$('#loadMore').click(function (e) {
  e.preventDefault;
  x= (x+4 <= size_li) ? x+4 : size_li;
  $('#blogEntries li:lt('+x+')').show();
  if(x == size_li) {
    $('#loadMore').hide();
  }
});

     modals.init();
});

var modals = 
{
     autoplay:true,
     init:function()
     {
          $(".videoPlayer").dialog({
               width: 576,
               height: 324,
               autoOpen: false,
               resizable: false,
               show: {
                    effect: 'fade', 
                    duration: 1000
               },
               hide: {
                    effect: "fade",
                    duration: 1000
               }
          });

          $(".videoPlayer").each(function()
          {
               $('.ui-widget-header').remove();
          });

          $( ".playpause" ).click(function() 
          {
               var videoPlayerId = 'video1player';
               $("#" + videoPlayerId).dialog("open");
               if(modals.autoplay == true)
               {
                    $('#' + videoPlayerId)[0].play();
               }
               $('#overlay').fadeIn();
               $('.wrapper').css( "opacity", 0 );
          });

          $(document).mouseup(function (e)
          {
               if($('.videoPlayer').is(':visible'))
               {
                    var container = $(".videoPlayer");

                    if (!container.is(e.target) && container.has(e.target).length === 0) 
                    {
                         container.dialog("close");
                         $('#overlay').fadeOut(1500);
                         $('.wrapper').css( "opacity", 0.5 );

                         $('video').each(function() 
                         {
                              $(this)[0].pause();
                         });
                    }
               }
          });
     }
}