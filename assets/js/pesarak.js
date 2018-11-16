var time;
var energy;
var totalScore;
var stageId;

var currentStage;
var disableOptions = [];
var saveAllChoises = [];

var stages = [{
	stageId: 1,
	level: 1,
	section: 1,
	name: 'بیدار شدن',
	desc: 'ساعت زنگ می زند. می خواهی چکار کنی؟',
	background: "main.jpg",
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
}];

$(document).ready(function () {
	//console.log('level1',level1);
	//stages = level1;
	//startGame();

	showStartMenu();

	//$('#achievmentModal').modal('show')

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
	$('.card-header').css('display', 'none');
	$('.card-footer').css('display', 'none');
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
				<button type="button" style="min-width: 150px" class="selectable btn btn-success btn-lg"
					onClick="startGame()">
					شروع بازی
				</button>
			</div>
		</div>
		<div class="row align-items-center" style="height: 100px">
			<div class="col">
				<button type="button" style="min-width: 150px" class="selectable btn btn-info btn-lg" onClick="showAbout()">
					درباره ما
				</button>
			</div>
		</div>
	`);
}

function showAbout() {
	$('div.card').css('background-image', "url('assets/image/main.jpg')");
	$('.card-header').css('display', 'block');
	$('.card-header').html(`
		<h4> تیم توسعه بازی </h4>
		<p> معرفی اعضای تیم مجیک لایت </p>
	`);
	$('.card-footer').css('display', 'block');
	$('.card-body').html(`
	<div class="row align-items-center team-card" style="height: 400px;">
		<div class="col">
			<div class="card text-center" style="width: 18rem;margin: auto;min-height: auto">
				<img class="card-img-top" src="assets/image/amir.jpg" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title"> امیر سالار سلیمانی </h5>
					<p class="card-text"> مدیر تیم و طراح بازی </p>
				</div>
			</div>
		</div>
	</div>
	<div class="row align-items-center team-card" style="height: 400px">
		<div class="col">
			<div class="card text-center" style="width: 18rem;margin: auto;min-height: auto">
				<img class="card-img-top" src="assets/image/hosein.jpg" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title"> حسین فراهانی </h5>
					<p class="card-text"> برنامه نویس </p>
				</div>
			</div>
		</div>
	</div>
	<div class="row align-items-center team-card" style="height: 400px">
		<div class="col">
			<div class="card text-center" style="width: 18rem;margin: auto;min-height: auto">
				<img class="card-img-top" src="assets/image/mohsen.jpg" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title"> محسن شعبانیان </h5>
					<p class="card-text"> برنامه نویس </p>
				</div>
			</div>
		</div>
	</div>
	`);
	$('.card-footer').css('display', 'block');
	$('.card-footer').html(`
	<button type="button" class="selectable btn btn-outline-secondary btn-lg btn-block" onClick="showStartMenu();">بازگشت به منو
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
	$('.card-footer').css('display', 'block');
	$('.card-footer').html(`
	<button type="button" class="selectable btn btn-outline-secondary btn-lg btn-block" onClick="startGame()">
	بازی دوباره </button>
	<button type="button" class="selectable btn btn-outline-primary btn-lg btn-block" onClick="showStartMenu()">
		منوی اصلی </button>
	`);
}

function startGame() {

	//TODO : start game effect

	stages = levelInfo;

	$('.card-header').css('display', 'block');
	$('.card-header').html(`
		<nav class="nav nav-pills nav-justified">
			<a class="nav-item nav-link disabled" href="#">
				<div>انرژی</div>
				<div id="energy">48</div>
			</a>
			<a class="nav-item nav-link disabled" href="#">
				<div>امتیاز</div>
				<div id="totalScore">0</div>
			</a>
			<a class="nav-item nav-link disabled" href="#">
				<div>ساعت</div>
				<div id="time">8:00</div>
			</a>
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
	$('.card-footer').css('display', 'block');

	totalScore = 0;
	time = 700;
	energy = 50;
	stageId = 1;

	saveAllChoises = [];

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
	//console.log(currentStage);

	$('div.card').fadeOut(500, function () {

		// start change after fade out

		$('#level').html(currentStage.level);
		$('#section').html(currentStage.section);
		$('#content .card-title').html(currentStage.name);
		$('#content .card-text').html(currentStage.desc);
		$('div.card').css('background-image', "url('assets/image/" + currentStage.background + "')");
		$('.card-footer').empty();
		$.each(currentStage.options, function (index, eventOption) {

			var notEnoughEnergy = eventOption.event.addedEnergy + energy < 0;
			var isDisable = (notEnoughEnergy || disableOptions.includes(eventOption.optionId)) ? " disabled" : "";
			var btnTitle = notEnoughEnergy ? ' title="به اندازه کافی انرژی نداری!"' : "";

			var otherClass = eventOption.color;

			if (eventOption.event.needOptions) {
				$.each(eventOption.event.needOptions, function (index, needOption) {
					if (!saveAllChoises.includes({
						stageId: needOption.stageId,
						optionId: needOption.optionId
					})) {
						console.log('I have');
						isDisable = " disabled";
						otherClass += " notAllowed";
						if (needOption.message) {
							btnTitle = ' title="' + needOption.message + '"';
						}
					}
				})
			}

			$('.card-footer').append('<button type="button" class="btn ' + otherClass +
				' btn-lg btn-block"  data-option="' + eventOption.optionId + '"' + isDisable + btnTitle +
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
	tapSFX = new sound('tap.wav');
	tapSFX.play();

	let opId = Number(e.target.getAttribute('data-option'));
	var option = currentStage.options.find(x => x.optionId === opId);
	if (!option) {
		console.log('can not find option')
		return;
	}
	var event = option.event;

	totalScore += event.score;
	time += event.addedTime;
	energy += event.addedEnergy;

	if (event.setGameTime) {
		time = event.setGameTime;
	}

	if (stageId == event.nextStage) {
		// add to disable option
		disableOptions.push(opId);
		//console.log(disableOptions);
	} else if (event.nextStage == -1) {
		//window.location.href = 'score.html';
		showScore(opId, totalScore);
	} else {
		disableOptions = [];
	}

	stageId = event.nextStage;

	saveAllChoises.push({
		stageId: stageId,
		optionId: opId
	});

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

//$('#myModal').modal(options)
//$('#myModal').modal('show')
//$('#myModal').modal('hide')
//$('#myModal').on('hidden.bs.modal', function (e) { })