var time;
var energy;
var totalScore;
var stageId;

var currentStage;
var disableOptions = [];
var saveAllChoises = [];

var stages = [
	{
		stageId: 1,
		level: 1,
		section: 1,
		name: 'بیدار شدن',
		desc: 'ساعت زنگ می زند. می خواهی چکار کنی؟',
		options: [{
			optionId: 1,
			title: 'قطع زنگ و خوابیدن',
			color: 'btn-outline-secondary',
			event: {
				nextStage: 2,
				addedTime: 15,
				addedEnergy: 20,
				score: 10
			}
		},
		{
			optionId: 2,
			title: ' بیدار شدن و شستن و شو',
			color: 'btn-outline-warning',
			event: {
				nextStage: 10,
				addedTime: 5,
				addedEnergy: 0,
				score: 15
			}
		}
		]
	},
	{
		stageId: 2,
		level: 1,
		section: 1,
		name: 'بیدار شدن',
		desc: 'باز هم ساعت زنگ می زند. نمی خواهی بیدار شوی؟',
		options: [{
			optionId: 1,
			title: 'قطع زنگ و خوابیدن',
			color: 'btn-outline-secondary',
			event: {
				nextStage: 2,
				addedTime: 15,
				addedEnergy: 5,
				score: 5
			}
		},
		{
			optionId: 2,
			title: 'بیدار شدن',
			color: 'btn-outline-warning',
			event: {
				nextStage: 10,
				addedTime: 5,
				addedEnergy: 0,
				score: 15
			}
		}
		]
	},
	{
		stageId: 10,
		level: 1,
		section: 2,
		name: 'آماده شدن',
		desc: 'حالا که بیدار شدی می خواهی چکار کنی؟',
		options: [{
			optionId: 1,
			title: 'مرتب کردن اتاق',
			color: 'btn-outline-secondary',
			event: {
				nextStage: 11,
				addedTime: 15,
				addedEnergy: 5,
				score: 5
			}
		},
		{
			optionId: 2,
			title: 'خوردن صبحانه',
			color: 'btn-outline-warning',
			event: {
				nextStage: 12,
				addedTime: 5,
				addedEnergy: 0,
				score: 15
			}
		},
		{
			optionId: 2,
			title: 'جمع کردن وسایل برای  مدرسه',
			color: 'btn-outline-info',
			event: {
				nextStage: 13,
				addedTime: 5,
				addedEnergy: 0,
				score: 15
			}
		}
		]
	}
];

$(document).ready(function () {
	//console.log('level1',level1);
	stages = level1;
	startGame();

	//read level from file
	// $.getJSON("level/level1.json", function (data) {
	//     console.log(value);
	// });
	// $.ajax({
	//     dataType: "json",
	//     url: "level/level1.json",
	//     success: function (data) {
	//         console.log(data);
	//     }
	// });

});


function startGame() {
	totalScore = 0;
	time = 700;
	energy = 50;
	stageId = 1;
	makeStage();
};


function makeStage() {
	$('#totalScore').html(totalScore);
	$('#time').html(makeTime(time));
	$('#energy').html(energy);

	$('#stageId').html(stageId);

	currentStage = stages.find(x => x.stageId === stageId);
	if (!currentStage) {
		console.log('can not find stage')
		return;
	}
	console.log(currentStage);

	$('#level').html(currentStage.level);
	$('#section').html(currentStage.section);
	$('.card-title').html(currentStage.name);
	$('.card-text').html(currentStage.desc);

	$('.card-footer').empty();
	$.each(currentStage.options, function (index, value) {
		var isDisable = disableOptions.includes(value.optionId) ? " disabled" : "";
		$('.card-footer').append('<button type="button" class="btn ' + value.color +
			' btn-lg btn-block"  onclick="onClickOption(' + value.optionId + ')"' + isDisable + '>' + value.title +
			'</button>');
	})

};

const alertColor = ['alert-primary', 'alert-secondary', 'alert-success', 'alert-danger', 'alert-warning',
	'alert-info', 'alert-light', 'alert-dark'
];

function onClickOption(opId) {
	var option = currentStage.options.find(x => x.optionId === opId);
	if (!option) {
		console.log('can not find option')
		return;
	}
	var event = option.event;

	totalScore += event.score;
	time += event.addedTime;
	energy += event.addedEnergy;

	if (stageId == event.nextStage) {
		// add to disable option
		disableOptions.push(opId);
		console.log(disableOptions);
	} else {
		disableOptions = [];
	}

	stageId = event.nextStage;
	
	saveAllChoises.push({stageId:stageId,optionId:opId});

	var randomAlertColor = alertColor[Math.floor(Math.random() * alertColor.length)];

	$('div.jumbotron>div.container').append(
		'<div class="alert text-left ' + randomAlertColor +
		' alert-dismissible fade show" role="alert"><strong>تغییرات:</strong> score:' +
		(event.score < 0 ? event.score : ('+' + event.score)) + ' - time: ' + (event.addedTime < 0 ? event.addedTime :
			('+' + event.addedTime)) +
		' - energy: ' + (event.addedEnergy < 0 ? event.addedEnergy : ('+' + event.addedEnergy)) +
		'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
	);

	makeStage();
}

function makeTime(time) {
	var hour = Math.floor(time / 100);
	if (hour >= 24) {
		hour -= 24;
	}
	var min = time % 100;
	if (min >= 60) {
		hour++;
		min -= 60;
	}
	if (min < 10)
		return hour + ':0' + min;
	return hour + ':' + min;
};
//$('#myModal').modal(options)
//$('#myModal').modal('show')
//$('#myModal').modal('hide')
//$('#myModal').on('hidden.bs.modal', function (e) { })