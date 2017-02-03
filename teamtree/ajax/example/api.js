 //Beginning the Project

// 1. The user clicks a button
// 2. The JavaScript program will et the word on that button
// 3. Make a GET request to Flickr.sending the word along
// 4. Receive the JSON response
// 5. Add a link and an <img> tag to the page


$(document).ready(function(){
	$('button').click(function(){
		$("button").removeClass("selected");
		$(this).addClass("selected");
		var flickerAPI = "http://api.flickr.com/services/feeds/photos-public.gne?jsoncallbackl=?";
		var animal = $(this).text();
		var flickrOptions = {
			tags: animal,
			format: "json"
		};
		function displayPhotos(data) {
			var photoHTML = '<ul>';
			$.each(data.items, function(i, photo){
				photoHTML += '<li class="grid-25 table=grid-50">';
				photoHTML += '<a href="' + photo.link + '" class="image>';
				photoHTML += '<img src="' + photo.media.m + '"></a></li>';				photoHTML
			});
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
		}
		$.getJSON(flickerAPI, flickrOptions, displayPhotos)
	});
});



//flickrAPI is flickers public photo feed
//flickrOptions data we want to send 
//displayPhotos is the callback option, the programming that runs
// when flickr sends back it's response

or 

$getJSON("http://api.flickr.com/services/feeds/photos-public.gne?jsoncallbackl=?",
{
	tags:animal,
	format: "json"
},
function(data){

}
);






$(document).ready(function(){
	$('form').submit(function(){
		evt.preventDefault();
		var $searchField = $("#search");
		var $submitButton = $('#submit');

		$searchField.prop("disabled", true);
		$submitButton.attr("disabled", true).val("searching...");
		var flickerAPI = "http://api.flickr.com/services/feeds/photos-public.gne?jsoncallbackl=?";
		var animal = $searchField.val();
		var flickrOptions = {
			tags: animal,
			format: "json"
		};
		function displayPhotos(data) {
			var photoHTML = '<ul>';
			$.each(data.items, function(i, photo){
				photoHTML += '<li class="grid-25 table=grid-50">';
				photoHTML += '<a href="' + photo.link + '" class="image>';
				photoHTML += '<img src="' + photo.media.m + '"></a></li>';				photoHTML
			});
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
			$searchField.prop("disabled, false");
			$submitButton.attr("disabled", false).val("Search");

		}
		$.getJSON(flickerAPI, flickrOptions, displayPhotos)
	});
});












