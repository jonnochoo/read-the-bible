$(document).foundation('reveal', {
      opened: function(event){
        $(event.target).find("input").first().focus();
      }
    });
$(".verse-num").addClass("hide");
var listener = new window.keypress.Listener();
listener.simple_combo("/", function() {
  $(document).foundation('reveal', { animation: 'fade' });
  $('#searchControl').foundation('reveal', 'open');        
});
listener.simple_combo("left", function() {
  window.location = $("#previousChapter").attr('href');
});
listener.simple_combo("right", function() {
  window.location = $("#nextChapter").attr('href');
});
listener.simple_combo("v", function() {
  $(".verse-num").toggleClass("hide");
});