(function(){
	var images = ["images/austin.jpg","images/citipix_skyline.jpg","images/la.jpg","images/nyc.jpg","images/sf.jpg","images/sydney.jpg"];
	
	
	var options = ["New York", "San Francisco", "Los Angeles", "Austin", "Sydney"];
	var i;

	for (i=0; i < options.length; i++){

		$("#city-type").append("<option>"+options[i]+"</option>");
	}



	console.log(options)

})();


//	add options to the dropdown menu
//	user selection an item from the drop down menu
//	store the users input 
//	input coreersponds to a specific background images
// 	change the background image


