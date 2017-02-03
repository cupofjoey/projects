var fs = require("fs");

fucntion mergeValues(values, content){
	//cycle over the keys
	for(var key in values) {
		//replace all {{key}} with the value from the values object
		content = content.replace("{{" + key + "}}", values[key]);
	}

	//return merged contnet
	return content;
}


function view(templateName, values, response){
	//Read from the template file
	var fileContents = fs.readFileSync('./views/' + templateName +'.html', {encoding: "utf8"});
	//Insert values in to the content
	filecontents = merValues(values, fileContents);
	//Write out the contents to the response 
		response.write(fileContents);
	
}

module.exports.view = view;





