$(document).ready(function(){
	
		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "41.4169", "longitude":"-73.3997", "icon": "img/map-marker.png", "baloon_text": '<strong>Sportsplex</strong> 13 Stony Hill Rd, Bethel CT 06801'}
			]
		};
		
		var myMarkers2 = {"markers": [
				{"latitude": "41.3912", "longitude":"-73.2882", "icon": "img/map-marker.png", "baloon_text": '<strong>Sportsplex</strong> 13 Stony Hill Rd, Bethel CT 06801'}
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
			center	: '3 Simm Lane, Newtown, CT',
			markers	: myMarkers2
		});

	});
	