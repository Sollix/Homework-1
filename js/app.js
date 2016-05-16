var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Pied Piper', 'BetaList', 'Trunk Club', 'Vinyl Me, Please'];
var startupY = ['farmers', 'astronauts', 'children', 'programmers', 'students', 'dogs', 'teachers','cats','theoretical physicists','twitter bots', 'ghosts', 'DeadHeads', 'people who still buy cassettes'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));


//creates a startup
$('#create').on('click', function(){
	 var random1 = Math.floor((Math.random() * startupX.length));
	 var random2 = Math.floor((Math.random() * startupY.length));
	 $('#xForY').empty()
	 $('#xForY').html('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
})

//favorites startups
$('#save').on('click', function(){
	var fav = $('#xForY').html()
	$('#favorites ul').append('<li>' + fav + '</li>')
})

//prints favorites to the console, working on finding an element-specific plugin that actually works
$('#print').on('click', function(){
	console.log($('#favorites').html())
})