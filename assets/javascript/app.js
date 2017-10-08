var myQuestions = [{
	myQuestion:"Mathematically @ standard conditions, what is the relative mass of Earth to itself @ standard conditions?",
	myAnswers: [1.0 ,0.5 ,0.88 ,1.23],
	myCorrectAnswer:1.0
},{
	myQuestion:"An example of a non-newtonian fluid is?",
	myAnswers:["oobleck","milk", "water", "pitch"],
	myCorrectAnswer:"oobleck"
},{
	myQuestion:"How much force is applied against us from the ground?",
	myAnswers:["equal to our weight", "equal to the earth's weight", "equal to the gravitation attractive force","equal to the earth's mass times earth's gravitation constant"],
	myCorrectAnswer:"equal to our weight"
},{
	myQuestion:"On a clear cloudless day, why is the appearance of the sky blue?",
	myAnswers:["It's the reflection of the ocean", "It is due to the atmospheric index of refraction", "Due to someone shining a blue light towards the sky during the day","There is some chemical aerosol that is dispersed in the atmosphere that gives it that appearance"],
	myCorrectAnswer:"equal to our weight"
}];


$("#start").on("click", function(){
	$("#start").remove();
	// console.log(myQuestions.length);
	// console.log(typeof myQuestions);
	for(var i = 0; i < myQuestions.length; i++) {
		console.log(i);
		$("#subwrapper").append("<h2>" + myQuestions[i].myQuestion + "</h2>")
		for(var j = 0; j < myQuestions[i].myAnswers.length; j++) {
			$("#subwrapper").append("<input type='radio' name='myQuestion-" + i + "' value='"+ myQuestions[i].myAnswers[j]+"'>" +myQuestions[i].myAnswers[j]);
		}
	}
})
