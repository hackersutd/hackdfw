$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function() {
      window.location.hash = target;
    });
  });
  var time=0;
  setInterval(function() {
    wh = $(window).height();
    st = $(document).scrollTop();
    if (st <= wh) {
      $('#headerContent').css('transform','translate3d(' + -(st) + 'px,0,0)');
      $('#headerContent').css('opacity', (1-st/wh*5).toFixed(2));
    }
    //$('#metropolis').css('transform','translate3d(0,' + Math.sin(time++)*20 + 'px,0)');
  }, 10)
});
