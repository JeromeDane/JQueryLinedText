
var $ = require('jquery');
require('jquery-linedtextarea');

$(function() {
	$('#warning').hide();
	$(".lined").linedtextarea(
		{selectedLine: 1}
	);
});