$(document).ready(function() {
	
	var header = $('#header'),
		spacer = $('#spacer'),
		cols = $('.col')
		textToCenter = $('p.center-text');

	normalizePage();
	$( window ).resize( function(){
		normalizePage();
	})

	function normalizePage(){
		padHeader();
		normalizeCols();
	}

	function padHeader(){
		var headerPad = header.height();
		spacer.height( headerPad );
	}

	function normalizeCols(){
		// this is not my ideal solution -- 
		// there are bugs with multiple resizes
		// definitely something to improve
		textToCenter.css({
			marginTop: 0
		});
		var max = 0,
			test = 0,
			textHeight = textToCenter.height(),
			marginTop = 0;
		
		cols.each(function( index, col ){
			test = $( col ).height();
			if ( test > max ){
				max = test;
			}
		});

		textToCenter.parent().height( max );
		marginTop = ( max - textHeight )  / 2 ;
		
		textToCenter.css({
			marginTop: marginTop
		});
	}


});