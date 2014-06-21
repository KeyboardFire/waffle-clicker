function prologue(onFinish) {
	$(document.body).append($('<div>').attr('id', 'intro')
		.append($('<p>').text('You feel like making waffles. But you don\'t know how to make waffles.'))
		.append($('<button>').text('Learn how to make waffles').click(function(){ prologue_research(onFinish); })));
}

function prologue_research(onFinish) {
	$('#intro').remove();
}