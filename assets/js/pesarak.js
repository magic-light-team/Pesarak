// use Object.assign(game, newGame)

var disableOptions = [];

let remainAchievments = [];
let earnedAchievments = [];

let game = {
	time: 700,
	energy: 50,
	totalScore: 0,
	stageId: 1,
	allChoises: [],
}

let newGame = {
	time: 700,
	energy: 50,
	totalScore: 0,
	stageId: 1,
	allChoises: [],
}

var exports = {}; // type script problem

$(document).ready(function () {
	//console.log('level1',level1);
	//stages = level1;
	//startGame();

	showStartMenu();
	achievementSFX = new sound('achievement.mp3');
	tapSFX = new sound('tap.wav');
	//remainAchievments = achievments.slice(0); // clone from file
	//remainAchievments = Object.assign({}, achievments);
	remainAchievments = JSON.parse(JSON.stringify(achievments));
	earnedAchievments = [];

	//$('#achievmentModal').modal('show')
	//showAchivement(achievments[1])

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

function showStartMenu() {
	$('div.card').css('background-image', "url('assets/image/main.jpg')");
	$('.card-header').addClass('hidden');
	$('.card-body').html(`
		<div class="row align-items-center">
			<div class="col">
				<img src="assets/image/pesarak.png"  alt="pesarak">
			</div>
		</div>
		<div class="row align-items-center text-white" style="height: 120px">
			<div id="content" class="col">
				<h5 class="card-title"> پسرک </h5>
				<p class="card-text">به بازی پسرک خوش آمدید</p>
			</div>
		</div>
		<div class="row align-items-center" style="height: 80px">
			<div class="col">
				<button type="button" style="min-width: 150px" class="selectable btn btn-lg btn-success"
					onClick="startGame()">
					شروع بازی
				</button>
			</div>
		</div>
		<div class="row align-items-center" style="height: 100px">
			<div class="col">
				<button type="button" style="min-width: 150px" class="selectable btn btn-lg btn-info" onClick="showAbout()">
					درباره ما
				</button>
			</div>
		</div>
	`);
}

function showAbout() {
	$('div.card').css('background-image', "url('assets/image/main.jpg')");
	$('.card-header').toggleClass('hidden');
	$('.card-header').html(`
		<h4> تیم توسعه بازی </h4>
		<p> معرفی اعضای تیم مجیک لایت </p>
	`);
	$('.buttons-wrapper').toggleClass('hidden');
	$('.card-body').html(`
	<div class="row align-items-center team-card">
		<div class="col">
			<div class="card text-center">
				<img class="card-img-top" src="assets/image/amir.jpg" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title"> امیر سالار سلیمانی </h5>
					<p class="card-text"> مدیر تیم و طراح بازی </p>
				</div>
			</div>
		</div>
	</div>
	<div class="row align-items-center team-card">
		<div class="col">
			<div class="card text-center">
				<img class="card-img-top" src="assets/image/hosein.jpg" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title"> حسین فراهانی </h5>
					<p class="card-text"> برنامه نویس </p>
				</div>
			</div>
		</div>
	</div>
	<div class="row align-items-center team-card">
		<div class="col">
			<div class="card text-center">
				<img class="card-img-top" src="assets/image/mohsen.jpg" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title"> محسن شعبانیان </h5>
					<p class="card-text"> برنامه نویس </p>
				</div>
			</div>
		</div>
	</div>
	`);
	$('.buttons-wrapper').toggleClass('hidden');
	$('.buttons-wrapper').html(`
	<button type="button" class="selectable btn btn-lg" onClick="showStartMenu();">بازگشت به منو
                            </button>
	`);
}

const quotes = [
	{ type: "chat", author: "آندره موروا", body: "مردمی که آرام تر و کندتر پیر می شوند آنهایی هستند که با فرهنگ و فرزانگی، دلیل و برهان زندگانی را درک نموده اند." },
	{ type: "social-network", author: "آرتور شوپنهاور", body: "مادام که مجلات ادبی، معلومات مختصر و پیش پا افتاده ی مردمان معمولی را چاپ می کنند، به ویژه ابزار مکارانه ای برای سرقت وقت مردم زیبایی شناس هستند؛ وقتی که باید برای پیشرفت فرهنگ به شاهکارهای اصیل هنری اختصاص یابد." },
	{ type: "home-work", author: "ولتر", body: "افرادی که بزرگترین خدمت را به دانش و فرهنگ نموده اند، نویسندگان و پژوهشگرانی بوده اند که در انزوا می زیسته اند و هرگز در گفتگوهای دانشگاهی شرکت نکرده و حقایق صد در صد اثبات نشده را در آکادمی ها ابراز نداشته اند." },
	{ type: "other", author: "لو هولتر", body: "ده درصد از زندگی‌تان وقایعی است که با آن روبه‌رو می‌شوید و نود درصدِ باقی‌مانده شیوه‌ی برخورد و پاسخ‌گویی به آنهاست" },
];

function showScore(opId, totalScore) {
	//TODO : Calculate game Score
	$('div.card').css('background-image', "url('assets/image/main.jpg')");
	$('.card-header').css('display', 'block');
	$('.card-header').html(`
		<h4> نتیجه بازی </h4>
	`);

	var author = "";
	var quote = "";

	switch (opId) {
		case 1:
			author = quotes[0].author;
			quote = quotes[0].body;
			break;
		case 2:
			author = quotes[1].author;
			quote = quotes[1].body;
			break;
		case 3:
			author = quotes[2].author;
			quote = quotes[2].body;
			break;
		default:
			author = quotes[3].author;
			quote = quotes[3].body;
	}

	$('.card-body').html(`
	<div id="content" class="row align-items-center" style="height: 400px">
		<div class="col">
			<h5 class="card-title">یک روز دیگر تمام شد</h5>
			<p>`+ quote + `</p>
			<p style="text-align: left;">`+ author + `</p>
			<p class="card-text" style="color: lightblue">امتیاز نهایی: `+ totalScore + `</p>
			<p class="card-text" style="color: lightgreen">تعداد تصمیمات درست: 14</p>
			<p class="card-text" style="color: lightcoral">تعداد تصمیمات اشتباه: 6</p>
		</div>
	</div>
	`);
	$('.buttons-wrapper').toggleClass('hidden');
	$('.buttons-wrapper').html(`
	<button type="button" class="selectable btn btn-lg" onClick="startGame()">
	بازی دوباره </button>
	<button type="button" class="selectable btn btn-lg" onClick="showStartMenu()">
		منوی اصلی </button>
	`);
}

function startGame() {

	//TODO : start game effect
	rebuildRemainAchievment();

	stages = levelInfo;

	$('.card-header').removeClass('hidden');
	$('.card-header').html(`
		<nav class="nav nav-pills nav-justified">
			<div class="nav-item nav-link">
				<div>انرژی</div>
				<div id="energy">48</div>
			</div>
			<div class="nav-item nav-link">
				<div>امتیاز</div>
				<div id="totalScore">0</div>
			</div>
			<div class="nav-item nav-link">
				<div>ساعت</div>
				<div id="time">8:00</div>
			</div>
		</nav>
	`);
	$('.card-body').html(`
		<div id="content" class="row align-items-center" style="height: 400px">
			<div class="col">
				<h5 class="card-title"></h5>
				<p class="card-text"></p>
			</div>
		</div>
	`);
	$('.buttons-wrapper').toggleClass('hidden');

	game = newGame;

	makeStage();
};


function makeStage() {
	$('#totalScore').html(game.totalScore);
	$('#time').html(makeTime(game.time));
	$('#energy').html(game.energy);

	$('#stageId').html(game.stageId);

	let currentStage = stages.find(x => x.stageId === game.stageId);
	if (!currentStage) {
		console.log('can not find stage')
		return;
	}
	//console.log(currentStage);

	$('div.card').fadeOut(500, function () {

		// start change after fade out

		$('#level').html(currentStage.level);
		$('#section').html(currentStage.section);
		$('#content .card-title').html(currentStage.name);
		$('#content .card-text').html(currentStage.desc);
		$('div.card').css('background-image', "url('assets/image/" + currentStage.background + "')");
		$('.buttons-wrapper').empty();

		$.each(currentStage.options, function (index, eventOption) {

			var notEnoughEnergy = eventOption.event.addedEnergy + game.energy < 0;
			var isDisable = (notEnoughEnergy || disableOptions.includes(eventOption.optionId)) ? "disabled" : "";
			var btnTitle = notEnoughEnergy ? ' title="به اندازه کافی انرژی نداری!"' : "";

			var otherClass = eventOption.color;

			if (eventOption.event.needOptions) {
				$.each(eventOption.event.needOptions, function (index, needOption) {
					if (!game.allChoises.includes({
						stageId: needOption.stageId,
						optionId: needOption.optionId
					})) {
						console.log('I have');
						isDisable = "disabled";
						otherClass += " notAllowed";
						if (needOption.message) {
							btnTitle = ' title="' + needOption.message + '"';
						}
					}
				})
			}

			$('.buttons-wrapper').append('<button type="button" class="btn btn-lg ' + otherClass +
				'" data-option="' + eventOption.optionId + '" data-nextStage="' + eventOption.event.nextStage +
				'" data-addedTime="' + eventOption.event.addedTime + '" data-addedEnergy="' + eventOption.event.addedEnergy + 
				'" data-score="' + eventOption.event.score + '" ' + isDisable + btnTitle +
				'>' + eventOption.title + '</button>');
		})

		// fade in after change done
		$('div.card').fadeIn(500)
	})
};

const alertColor = ['alert-primary', 'alert-secondary', 'alert-success', 'alert-danger', 'alert-warning',
	'alert-info', 'alert-light', 'alert-dark'
];

$(document).on('click', 'button[data-option]', function (e) {
	tapSFX.play();

	let opId = Number(e.target.getAttribute('data-option'));

	let nextStage = Number(e.target.getAttribute('data-nextStage'));
	let score = Number(e.target.getAttribute('data-score'));
	let addedTime = Number(e.target.getAttribute('data-addedTime'));
	let addedEnergy = Number(e.target.getAttribute('data-addedEnergy'));

	// let option = game.currentStage.options.find(x => x.optionId === opId);
	// if (!option) {
	// 	console.log('can not find option')
	// 	return;
	// }
	// let event = option.event;

	game.totalScore += score;
	game.time += addedTime;
	game.energy += addedEnergy;

	if (game.energy === 0) {
		showAchivement(achievments.find(ach => ach.achievmentId == 5));
	}


	// wrong
	// if (event.setGameTime) {
	// 	game.time = event.setGameTime;
	// }

	if (game.stageId == nextStage) {
		// add to disable option
		disableOptions.push(opId);
		//console.log(disableOptions);
	} else if (nextStage == -1) {
		//window.location.href = 'score.html';
		showScore(opId, game.totalScore);
	} else {
		disableOptions = [];
	}

	game.allChoises.push({
		stageId: game.stageId,
		optionId: opId
	});

	checkAchievment(game.stageId, opId);

	game.stageId = nextStage;

	var randomAlertColor = alertColor[Math.floor(Math.random() * alertColor.length)];

	$('div.jumbotron>div.container').append(
		'<div class="alert text-left ' + randomAlertColor +
		' alert-dismissible fade show" role="alert"><strong>تغییرات:</strong> score:' +
		(score < 0 ? score : ('+' + score)) + ' - time: ' + (addedTime < 0 ? addedTime :
			('+' + addedTime)) +
		' - energy: ' + (addedEnergy < 0 ? addedEnergy : ('+' + addedEnergy)) +
		'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
	);

	makeStage();
});

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

// bad performance
function checkAchievment(stId, opId) {

	//find achievment whit this stageId,optionIg
	$.each(remainAchievments, function name(index, achievment) {
		if (achievment.chooses.find(x => x.stageId === stId && x.optionId === opId)) {

			achievment.chooses = achievment.chooses.filter(x => x.stageId !== stId || x.optionId !== opId);

			if (achievment.chooses.length === 0 &&
				!earnedAchievments.find(x => x.achievmentId === achievment.achievmentId)) {
				showAchivement(achievment);
			}
		}
	});
	//achievments.includes()
}

function showAchivement(achievment) {
	remainAchievments = remainAchievments.filter(ach => ach.achievmentId !== achievment.achievmentId);

	if (earnedAchievments.find(x => x.achievmentId === achievment.achievmentId)) {
		console.log('earn this achievment before!');
		return;
	}

	earnedAchievments.push(achievment);
	achievementSFX.play();
	$('#achievmentModal img').attr('src', achievment.pic)
	$('#achievmentModal #achievmentName').html(achievment.name)
	$('#achievmentModal').modal('show');
}

function rebuildRemainAchievment() {
	$.each(remainAchievments, function name(index, achievment) {
		if (achievment.rebuild) {
			achievment.chooses = JSON.parse(JSON.stringify(achievments.find(x => x.achievmentId == achievment.achievmentId).chooses));
		}
	});
}

//$('#myModal').modal(options)
//$('#myModal').modal('show')
//$('#myModal').modal('hide')
//$('#myModal').on('hidden.bs.modal', function (e) { })

// a button click event for show dev mode
$(document).keypress(function(event){
	let code = event.keyCode || event.which;
	let char = String.fromCharCode(code); 
	if( char === 'm'|| char === 'M'){
		$('.jumbotron.jumbotron-fluid').css('display','block');
	}else if( char === 'n'|| char === 'N'){
		$('.jumbotron.jumbotron-fluid').css('display','none');
	}
})