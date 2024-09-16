


let features = $("#features").offset().top;

$(window).scroll( function() {

  let scrollTopBtn = $(window).scrollTop();
  if( scrollTopBtn > features ) {
    // $("#btnUp").css( "display", "block"); /* or */ $("#btnUp").fadeIn();
    $("#btnUp").fadeIn();
    $("#btnUp").on("click", function() {
      $(window).scrollTop(0);
    })
  } else {
    // $("#btnUp").css( "display", "none"); /* or */ $("#btnUp").fadeOut();
    $("#btnUp").fadeOut();
  }

})