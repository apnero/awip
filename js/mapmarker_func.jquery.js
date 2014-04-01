$(document).ready(function(){
	
		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "41.4169", "longitude":"-73.3997", "icon": "img/map-marker.png", "baloon_text": '<strong><a href="http://www.sportsplexbethel.com" target="_blank">Sportsplex</a></strong> 13 Stony Hill Rd, Bethel, CT'}
			]
		};
		
		var myMarkers2 = {"markers": [
				{"latitude": "41.441583", "longitude":"-73.404036", "icon": "img/map-marker.png", "baloon_text": '<strong><a href="http://www.anytimefitness.com/gyms/169/brookfield-ct-06804" target="_blank">Anytime Fitness in Brookfield</a></strong> 195 Federal Rd, Brookfield, CT'}
			]
		};
		
		var myMarkers3 = {"markers": [
				{"latitude": "41.129518", "longitude":"-73.385458", "icon": "img/map-marker.png", "baloon_text": '<strong><a href="http://www.achievefit.net/" target="_blank">Achieve Rehab and Fitness in Norwalk</a></strong> 27 Lois St, Norwalk, CT'}
			]
		};
		
		//set up map options
		$("#map").mapmarker({
			zoom	: 14,
			center	: '13 Stony Hill Rd, Bethel CT 06801',
			markers	: myMarkers
		});
		
		//set up map options
		$("#map.second.map").mapmarker({
			zoom	: 14,
			center	: '195 Federal Rd, Brookfield, CT',
			markers	: myMarkers2
		});

		//set up map options
		$("#map.third.map").mapmarker({
			zoom	: 14,
			center	: '27 Lois St, Norwalk, CT',
			markers	: myMarkers3
		});

	});
	