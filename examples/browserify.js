
var $ = require('jquery');
require('JQueryLinedText');

$(function() {
	$('#warning').hide();
	$(".lined").linedtextarea(
		{selectedLine: 1}
	);
});