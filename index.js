$("#left").click(function(){
  $("#beep")[0].play();
});
$("audio").hide();

$("#brush").on('click', function() {
	$('.colors').toggleClass('colors-show');
});

$("#audio_left").on('click', function() {
	$('.on').toggleClass('mute');
});

$("#view").on('click', function() {

	if ( $('#overlay').css('visibility') == 'hidden' )
    $('#overlay').css('visibility','visible');
  else
    $('#overlay').css('visibility','hidden');

	$('.preview').toggleClass('noview');
});