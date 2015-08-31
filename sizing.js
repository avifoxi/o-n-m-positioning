$(document).ready(function() {
	
	var $textParent = $('.text-parent'),
		$text = $('.center-text');

	centerText();
	$( window ).resize( function(){
		centerText();
	})

	function centerText(){
		var colHeight = $textParent.height();
		var textHeight = $text.height();
		$text.css('top', colHeight / 2 - textHeight / 2);
	}


});