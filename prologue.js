function prologue(onFinish) {
	$(document.body).append($('<div>').attr('id', 'intro')
		.append($('<p>').text('You feel like making waffles. But you don\'t know how to make waffles.'))
		.append($('<button>').text('Learn how to make waffles').click(function(){ prologue_research(onFinish); })));
}

function prologue_research(onFinish) {
	$('#intro').remove();
	$(document.body).append($('<div>').attr('id', 'discover')
		.append($('<p>').text('In a series of generic plot developments, you have an forboding yet enigmatic vision, trip over a conveniently placed rock, and find a scroll that happens to say "How to make waffles" on the ground.'))
		.append($('<button>').text('Read the scroll').click(function(){ prologue_read(onFinish); })));
}

function prologue_read(onFinish) {
	$('#discover').remove();
	$(document.body).append($('<div>').attr('id', 'scroll')
		.append());
}
