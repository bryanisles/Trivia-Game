// listing all global variables
var myQuestions = [{
	// question 1
	myQuestion:"How many colors are there in the spectrum when white light is separated?",
	myAnswers: [5.0 ,7.0 ,4.5 ,3.2],
	myCorrectAnswer: 7.0// myQuestions[0].myAnswers[1]
},{
	// question 2
	myQuestion:"An example of a non-newtonian fluid is?",
	myAnswers:["milk", "water", "pitch","oobleck"],
	myCorrectAnswer: "oobleck" //myQuestions[1].myAnswers[0]
},{
	// question 3
	myQuestion:"What is the force that opposes the relative motion of two bodies that are in contact?",
	myAnswers:["Gravity","Tension","Friction","Significant-Other"],
	myCorrectAnswer: "Friction" //myQuestions[2].myAnswers[0]
},{
	// question 4
	myQuestion:"On a clear cloudless day, why is the appearance of the sky blue?",
	myAnswers:["Oceanic Reflection", "Atmospheric Refractive Properties", "Blue LED light","Chemical Aerosol"],
	myCorrectAnswer: "Atmospheric Refractive Properties" //myQuestions[3].myAnswers[1]
},{
	// question 5
	myQuestion:"What is the product of the mass of a body and its linear velocity",
	myAnswers:["Momentum","Force","Energy","Weight"],
	myCorrectAnswer: "Momentum"
},{
	// question 6
	myQuestion:"A derivative represents the rate of change of something.  What is the derivative of a velocity function with respect to time?",
	myAnswers:["Velocity","Jerk","Acceleration","Distance"],
	myCorrectAnswer: "Acceleration"
},{
	// question 7
	myQuestion:"What describes a substance that exists in more than one form, differing in physical rather than chemical properties?",
	myAnswers:["Supercritical","Allotropic","Two-Phase fluids","Unobserved particle"],
	myCorrectAnswer: "Allotropic"
},{
	// question 8
	myQuestion:"What does c represent in the equation e=mc^2?",
	myAnswers:["Speed of Light", "Celsius","Capacitance","Convergence"],
	myCorrectAnswer: "Speed of Light"
}];

var timer;
var myFirstTime = 120;
var myIter = 0;
var myZero = 0;
var myMaxIter = 128;
var myRand;
var myStyleCnt = 0;

var onClickStart = function() {
	myCont.myStart();
};

var userConfirmation = function() {
	var tempConfirm = confirm("play again");
	if(tempConfirm){
		myCont.myClearFunc();	
	}
};

var myCont = {
	myCorrectCounter: myZero,
	myIncorrectCounter: myZero,
	myCounter: myFirstTime,
// ===================================================================================================
/* Working code for discretizing questions

	mySelectedQuestions:[],
	myCheckAnsweredQuestions: function(){
		do{
			myIter++;
			myRand = Math.floor(Math.random()*myQuestions.length);
			if (myIter > myMaxIter) {
				alert("was not able to locate a proper number under the max iterations");
				break;
			}
		} while (myCont.mySelectedQuestions.indexOf(myRand) > -1);
		myCont.mySelectedQuestions.push(myRand);
		console.log(myQuestions[myRand].myQuestion);
		return myRand;
	},
	myNextQuestion: function(){
		var tempRand = myCont.myCheckAnsweredQuestions();

		myQuestions[tempRand];
	},*/
// ===================================================================================================
	// countdown function
	myCountdown: function() {
		myCont.myCounter--;
		$("#myCounter").html(myCont.myCounterConversion);
		if(myCont.myCounter <= 0){
			console.log("Time is up");
			myCont.myCompletion();
		}
	},
	myCounterConversion: function(){
		var myMinutes = Math.floor(myCont.myCounter / 60);
		var mySeconds = myCont.myCounter % 60;

		var myMinStr = myMinutes.toString();
		var mySecStr = mySeconds.toString();

		var tempMin;
		var tempSec;

		if(myMinStr.length == 1){
			tempMin = "0" + myMinStr;
		} else {
			tempMin = myMinStr;
		}

		if(mySecStr.length == 1) {
			tempSec = "0" + mySecStr;
		} else {
			tempSec = mySecStr;
		}

		return tempMin + ":" + tempSec;
	},
	//initialize function
	myStart: function() {
		timer = setInterval(myCont.myCountdown, 1000);
		$("#subwrapper").prepend("<h3>Time: <span id='myCounter' style='font-family:consolas;'>" 
			                      + myCont.myCounterConversion()
			                      + "</span></h3>")
		$("#start").remove();
		for(var i = 0; i < myQuestions.length; i++) {
			$("#subwrapper").append("<h3>" 
				                     + myQuestions[i].myQuestion 
				                     + "</h3>")
			for(var j = 0; j < myQuestions[i].myAnswers.length; j++) {
				$("#subwrapper").append("<input type='radio' name='myQuestion-" 
					                    + i 
					                    + "' value='"
					                    + myQuestions[i].myAnswers[j]
					                    +"'><h4 style='display:inline;padding:0 5px;'>" 
					                    + myQuestions[i].myAnswers[j])+"</h4> ";
			}
		}
	},
	// completion function
	myCompletion: function() {
		for(var i = 0; i < myQuestions.length; i++) {
			$.each($("input[name='myQuestion-"
				      + i 
				      +"']:checked"),function() {
				if(this.value == myQuestions[i].myCorrectAnswer) {
					myCont.myCorrectCounter++;
				} else {
					myCont.myIncorrectCounter++;
				}
			});	
		}
		this.myResult();
	},
	// Result output function
	myResult: function() {
		clearInterval(timer);
		$("#subwrapper h2").remove();
		$("#subwrapper").html("Game Over");
		var correctDiv
		$("#subwrapper").append("<h3>Total Correct: " 
			                     + this.myCorrectCounter 
			                     +"</h3>");
		$("#subwrapper").append("<h3>Total Incorrect: " 
			                     + this.myIncorrectCounter 
			                     +"</h3>");
		$("#subwrapper").append("<h3>Total Unanswered: " 
			                     + (myQuestions.length 
			                     	- (this.myIncorrectCounter 
			                     		+ this.myCorrectCounter))
			                     +"</h3>");
		var tempConfirm = setTimeout(userConfirmation, 3000);
		
	},
	myClearFunc: function() {
		myCont.myCounter = myFirstTime;
		myCont.myCorrectCounter = myZero;
		myCont.myIncorrectCounter = myZero;
		myCont.mySelectedQuestions = [];
		$("#subwrapper").html("<div id='start' onclick='onClickStart()'>Start</button>")
		switch (myStyleCnt) {
			case 0:
				var tempBtnStyle = "warning";
				break;
			case 1:
				var tempBtnStyle = "danger";
				break;
			case 2:
				var tempBtnStyle = "success";
				break;
			case 3:
				var tempBtnStyle = "info";
				break;
			default:
				var tempBtnStyle = "default";
				myStyleCnt = -1;

		}
		myStyleCnt++;
		$("#start").attr("class","btn btn-" + tempBtnStyle);
		
	} 
};

$(document).ready(function(){
	console.log(myQuestions.length);
})
