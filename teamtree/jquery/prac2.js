// function myCode() {
// 	$(".warning").hide().show("slow");
// }

// $(document).ready(myCode);


// ------------------ Spoiler----------------------------

//Prevent Spoiler Phobes from seeing spoilers
//Solution: hisde spoilers and reveal them through user interaction

//Plan it out

// 1. Hide spoiler
$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3. When Button Pressed
	//3.1 Show Spoiler
$("button").click(function(){
	$(this).prev().show();
	
	//3.2 Get rid of button
	$(this).remove();
});


	


