$(function() {
	$('#a-home').attr('href', '../');
	$('#a-query').attr('href', '../query-tool/');
	$('#a-disp').attr('href', '../user-disp/');
	$('#a-trace').attr('href', '../trace-tool/');
	$('#a-outlier').attr('href', '../outlier-tool/');
	$('#a-gang-move').attr('href', '../gang-move/');
	$('#a-heat-change').attr('href', '../heat-change/');
	$('#a-rivalry-net').attr('href', '../rivalry-net/');
	$('#a-hoods').attr('href', '../hoods/');
	$('#a-hood-disp').attr('href', '../hoods-disp/');
	$('#a-disp-plots').attr('href', '../disp-plots/');
	
	$('#action-panel').toggle();
	google.maps.event.addDomListener(document.getElementById('action-panel-button'), 'click', function() {
		$('#action-panel').toggle();
	});
	$('#action-panel-button').trigger('click');
	
	// lightbox
	$(".various").fancybox({
		maxWidth	: 700,
		maxHeight	: 700,
		fitToView	: false,
		width		: '70%',
		height		: '90%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});
