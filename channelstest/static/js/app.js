(function() {
  var $ = jQuery;

  socket = new WebSocket("ws://" + window.location.host + "/");

  socket.onmessage = function(e) {
    var data = JSON.parse(e.data);
    var el = $('.task-queue').find('#' + data.id);
      el.append(' DONE');
      setTimeout(function() {
        el.remove();
      }, 2000);
  }

  $('a.task').click(function() {
    if ( $(this).hasClass('sleep-5000') ) {
      var el = $('<div id="sleeping-for-five">Sleeping for 5 seconds</div>');
      el.appendTo('.task-queue');
      socket.send(JSON.stringify({ sleep: 5, id: 'sleeping-for-five' }));
    }
    if ( $(this).hasClass('sleep-2500') ) {
      var el = $('<div id="sleeping-for-two-five">Sleeping for 2.5 seconds</div>');
      el.appendTo('.task-queue');
      socket.send(JSON.stringify({ sleep: 2.5, id: 'sleeping-for-two-five' }));
    }
    return false;
  });
})();
