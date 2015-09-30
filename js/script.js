(function(){
	var images = ["images/austin.jpg","images/citipix_skyline.jpg","images/la.jpg","images/nyc.jpg","images/sf.jpg","images/sydney.jpg"];
	
//	add options to the dropdown menu	
	var options = ["New York", "San Francisco", "Los Angeles", "Austin", "Sydney"];
	var i;

	for (i=0; i < options.length; i++){
		$("#city-type").append("<option>"+options[i]+"</option>");
	}
	
	function changeImage(arrayIndex) {
		$("body").css("background", 'url(' + images[arrayIndex] + ')')
	}

	function updateBackground() {
		var input = $("#city-type").val();
		var city = input.toLowerCase();
		console.log(city);
		
		switch (city) {
			case "new york":
				changeImage(3);
				break;
			case "san francisco":
				changeImage(4);
				break;
			case "los angeles":
				changeImage(2);
				break;
			case "austin":
				changeImage(0);
				break;
			case "sydney":
				changeImage(5);
				break;
			case "select a city":
				changeImage(1);
				break;	

			return false;	
		} 
	}



//	user selection an item from the drop down menu
	$("#city-type").change(updateBackground);





})();



//	store the users input 
//	input coreersponds to a specific background images
// 	change the background image


