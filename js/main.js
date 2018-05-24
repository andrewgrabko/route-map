;(function(){
	"use strict";

	function initMap() {
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	var map = new google.maps.Map(document.querySelector('.ba-map'), {
		center: {lat: 49.566424, lng: 34.577533},
		zoom: 14,
		disableDefaultUI: true,
		styles: [
		{elementType: 'geometry', stylers: [{color: '#342f3e'}]},
		{elementType: 'labels.text.stroke', stylers: [{color: '#342f3e'}]},
		{elementType: 'labels.text.fill', stylers: [{color: '#254866'}]},
		{
			featureType: 'administrative.locality',
			elementType: 'labels.text.fill',
			stylers: [{color: '#000'}]
		},
		{
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [{color: '#000'}]
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [{color: '#000'}]
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [{color: '#000000'}]
		},
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [{color: '#ffffff'}]
		},
		{
			featureType: 'road',
			elementType: 'geometry.stroke',
			stylers: [{color: '#212a37'}]
		},
		{
			featureType: 'road',
			elementType: 'labels.text.fill',
			stylers: [{color: '#9ca5b3'}]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [{color: '#333333'}]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry.stroke',
			stylers: [{color: '#1f2835'}]
		},
		{
			featureType: 'road.highway',
			elementType: 'labels.text.fill',
			stylers: [{color: '#f3d19c'}]
		},
		{
			featureType: 'transit',
			elementType: 'geometry',
			stylers: [{color: '#2f3948'}]
		},
		{
			featureType: 'transit.station',
			elementType: 'labels.text.fill',
			stylers: [{color: '#d59563'}]
		},
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [{color: '#17263c'}]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [{color: '#515c6d'}]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.stroke',
			stylers: [{color: '#17263c'}]
		}
		]
	});
	directionsDisplay.setMap(map);

	var onChangeHandler = function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay);
	};
	document.querySelector('.ba-button');addEventListener('click', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	directionsService.route({
		origin: document.getElementById('start').value,
		destination: document.getElementById('finish').value,
		travelMode: 'WALKING'

	}, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}


	window.addEventListener('load', initMap);

})();