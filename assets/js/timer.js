function timer( time, step ) {
	this.timeBar = document.getElementById('timeBar'); // Progress bar element.
	this.currentWidth = this.timeBar.style.width.replace( '%', '' ); // Get current progress.

	this.decrease = function() {
		this.currentWidth--;
		console.log(this.currentWidth)
	}

	this.increase = function() {
		this.currentWidth++;
	}

	// Set updated with again.
	this.update = function() {
		timeBar.style.width = this.currentWidth + '%';
	}

}

function reduceTime() {
	var progress = new timer();
	if ( progress.currentWidth > 0 ) {
		progress.decrease();
		progress.update();
	} else {
		selectRand();
		progress = new timer();
	}
}

function startTimer() {
	console.log('run');
	setInterval( reduceTime, 100 );
}

function selectRand() {
	var $selectables = $('selectable');
    $selectables.eq([Math.floor(Math.random()*$selectables.length)]).trigger('click');
}

document.onload = startTimer();