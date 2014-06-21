function prologue(onFinish) {
	$(document.body).append($('<div>').attr('id', 'intro')
		.append($('<p>').text('You feel like making waffles. But you don\'t know how to make waffles.'))
		.append($('<button>').text('Learn how to make waffles').click(function(){ prologue_research(onFinish); })));
}

function prologue_research(onFinish) {
	$('#intro').remove();
	$(document.body).append($('<div>').attr('id', 'discover')
		.append($('<p>').text('In a series of generic plot developments, you experience a forboding yet enigmatic vision, conveniently trip on a flat surface, and find a scroll that happens to say "How to make waffles" on the ground.'))
		.append($('<button>').text('Read the scroll').click(function(){ prologue_read(onFinish); })));
}

function prologue_read(onFinish) {
	$('#discover').remove();
	$(document.body).append($('<div>').attr('id', 'scroll').css('position', 'relative')
		.append($('<p>').text('You read the scroll. It looks much longer than it really needs to be.'))
		.append($('<button>')
			.text('Go on a majestic journey to find the glorious waffle of the ancient times')
			.css({display: 'block', marginBottom: '1em'}).click(function(){ prologue_journey(onFinish); }))
		.append($('<img>').attr('src', 'scroll.png').css('position', 'absolute'))
		.append($('<div>').html('<p style="margin:0">How to make waffles</p><p><ol style="margin-left:30px">' +
			'<li>Find waffle</li><li>Click it</li><li>Go to step 2</li></ol></p>').css({
				position: 'absolute',
				margin: '55px',
				width: '490px',
				color: 'white',
				font: 'bold 20px sans-serif'
			})));
}

function prologue_journey(onFinish) {
	$('#scroll').remove();
}
