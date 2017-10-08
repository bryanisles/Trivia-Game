var myQuestions = [{
	// question 1
	myQuestion:"Mathematically @ standard conditions, what is the relative mass of Earth to itself @ standard conditions?",
	myAnswers: [1.0 ,0.5 ,0.88 ,1.23],
	myCorrectAnswer: 1.0// myQuestions[0].myAnswers[0]
},{
	// question 2
	myQuestion:"An example of a non-newtonian fluid is?",
	myAnswers:["oobleck","milk", "water", "pitch"],
	myCorrectAnswer: "oobleck" //myQuestions[1].myAnswers[0]
},{
	// question 3
	myQuestion:"How much force is applied against us from the ground?",
	myAnswers:["equal to our weight", "equal to the earth's weight", "equal to the gravitation attractive force","equal to the earth's mass times earth's gravitation constant"],
	myCorrectAnswer: "equal to our weight" //myQuestions[2].myAnswers[0]
},{
	// question 4
	myQuestion:"On a clear cloudless day, why is the appearance of the sky blue?",
	myAnswers:["It's the reflection of the ocean", "It is due to the atmospheric index of refraction", "Due to someone shining a blue light towards the sky during the day","There is some chemical aerosol that is dispersed in the atmosphere that gives it that appearance"],
	myCorrectAnswer: "It is due to the atmospheric index of refraction" //myQuestions[3].myAnswers[1]
}];

var timer = 0;

var myCont = {
	myCorrectCounter: 0,
	myIncorrectCounter: 0,
	myCounter: 10,
	myCountdown: function() {
		myCont.myCounter--;
		$("#myCounter").html(myCont.myCounter);
		if(myCont.myCounter <= 0){
			console.log("Time is up");
			myCont.done();
		}
	},
	myStart: function() {
		timer = setInterval(myCont.myCountdown, 1000);
		$("#subwrapper").prepend("<h2>Time Remaining: <span id='myCounter'>"+myCont.myCounter+"</span> Seconds</h2>")
		$("#start").remove();
		for(var i = 0; i < myQuestions.length; i++) {
			$("#subwrapper").append("<h2>" + myQuestions[i].myQuestion + "</h2>")
			for(var j = 0; j < myQuestions[i].myAnswers.length; j++) {
				$("#subwrapper").append("<input type='radio' name='myQuestion-" + i + "' value='"+ myQuestions[i].myAnswers[j]+"'>" +myQuestions[i].myAnswers[j]);
			}
		}
	},
	done: function() {
		for(var i = 0; i < myQuestions.length; i++) {
			$.each($("input[name='myQuestion-"+i+"']:checked"),function() {
				console.log(this);
				console.log($(this).val());
				console.log(myQuestions[i].myCorrectAnswer);
				console.log($(this).val() == myQuestions[i].myCorrectAnswer);
				if($(this).val() == myQuestions[i].myCorrectAnswer) {
					myCont.myCorrectCounter++;
				} else {
					myCont.myIncorrectCounter++;
				}
			})	
		}
		this.myResult();
	},
	myResult: function() {
		clearInterval(timer);
		$("#subwrapper h2").remove();
		$("#subwrapper").html("Game Over");
		$("#subwrapper").append("<h3>Correct Answers: " +this.myCorrectCounter+"</h3>");
		$("#subwrapper").append("<h3>Incorrect Answers: " +this.myIncorrectCounter+"</h3>");
		$("#subwrapper").append("<h3>Unanswered: " + (myQuestions.length - (this.myIncorrectCounter + this.myCorrectCounter))+"</h3>");
	}
}

$(document).ready(function(){

	$("#start").on("click", function(){
		console.log("Clicked");
		myCont.myStart();
	});

});

