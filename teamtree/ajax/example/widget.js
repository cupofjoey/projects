$(document).ready(function(){
	var url="../data/employees.json";
	$getJSON(url, function(response){
		var statusHTML = '<ul class="bulleted">';
		$.each(response, function(index, employee){
			if(employee.inoffice === true) {
				statusHTML+='<li class = "in">';
			}else{
				statusHTML += '<li class="out">';
			}
			statusHTML += employee.name + '</li>';
		});
		statusHTML += '</ul>';
		$('#employeeList').html(statusHTML);
	});
	
});




// You can loop using jQuery:
// $.each(array_or_object, callback)


// ---------- POST ----------

var url = "http://website.com/posts";
var data = {
	firstName: "Dave",
	lastName: "McFarland"
};
$.post(url, data, callback);

// --------$.ajax--------------

$.ajax(url, settings); //settings is a JS object with one or more key value pairs that contains settings that control how the AJAX request is made




$.ajax(url, {
	data: formData,
	type: "POST",
	success: function(response){
		$('signup').html("<p>Thanks for signing up!</p>")
	}
});

// ============== Handling Errors =================










