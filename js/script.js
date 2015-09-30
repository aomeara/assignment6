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

		if (city === "new york" || city === "new york city" || city === "nyc") {
			changeImage(3);
		} else if (city === "san francisco" || city === "sf" || city === "bay area"){
			changeImage(4);
		} else if (city === "los angeles" || city === "la" || city === "lax"){
			changeImage(2);
		} else if (city === "austin" || city === "atx"){
			changeImage(0);
		} else if (city === "sydney" || city === "syd"){
			changeImage(5);
		} else {
			changeImage(1);
		}


		return false;
	}



//	user selection an item from the drop down menu
	$("#city-type").change(updateBackground);





})();



//	store the users input 
//	input coreersponds to a specific background images
// 	change the background image


