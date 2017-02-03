
//Create a select and append to menu
var $select = $("<select></select");
$("menu").append($select);
//Cycle over menu links
//to iterate over a jQuery object use .each
$("menu a").each(function(){
	var $anchor = $(this);
	var $option = $("<option></option")

})
	//Create an option
	if($anchor.parent().hasClass("selected")){
		$option.prop("selected", true);
	}
	//options value is the href
	$option.val($anchor.attr("href"));
	//options text is the text of the links
	$option.text($anchor.text());
	//append option to select
	$select.append($option);
	//to manipulate objects
	//Bind change listener to the select
	$select.change(function(){

	})
//Bind click to button 
$button.click(function(){
	window.location = $select.val();
});
		//Go to select's location
	//Modify CSS to hide links on small resolution and show button and select
		//also hides select and button on larger width and show's links















