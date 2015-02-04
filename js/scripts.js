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
    about = $('#about');
    if (st <= wh) {
      $('#headerContent').css('transform','translate3d(0,' + -(st/5) + 'px,0)');
      $('#headerContent').css('opacity', (1-st/wh*2).toFixed(2));
    }
    if (st <= (about.scrollTop() + wh)) {
      $('#about h1, #about p').css('opacity', ((st)/(about.offset().top)).toFixed(2));
    }
    if (st <= (about.offset().top + wh)) {
      $('#headerbg').css('transform','translate3d(0,' + (40-(st/(about.offset().top+wh)*40)) + 'px,0)');
      $('#headerbg').css('opacity', (1-st/(about.offset().top)*0.5) );
    }
    //$('#metropolis').css('transform','translate3d(0,' + Math.sin(time++)*20 + 'px,0)');
  }, 10);
    
  $('[data-toggle="tooltip"]').tooltip();
});
