//Loading the base map 
var BasemapAT_orthofoto = L.tileLayer('https://mapsneu.wien.gv.at/basemap/bmaporthofoto30cm/{type}/google3857/{z}/{y}/{x}.{format}', {
	maxZoom: 19,
	attribution: 'Datenquelle: <a href="https://www.basemap.at">basemap.at</a>',
	type: 'normal',
	format: 'jpeg',
	bounds: [[46.35877, 8.782379], [49.037872, 17.189532]]
});
var map = L.map('map', {
  center: [47.8069503, 13.0406775],
  zoom: 16,
  layers: [BasemapAT_orthofoto]
});

let webcamLayer;

fetch('data/webcams.geojson')
  .then(response => response.json())
  .then(data => {
    webcamLayer = L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: L.icon({
            iconUrl: 'css/images/webcam.svg',
            iconSize: [28, 28],
            iconAnchor: [14, 14]
          })
        }).bindPopup(feature.properties.embedUrl, { maxWidth: 400 });
      }
    });
  });
  
  

const zoomControlContainer = document.querySelector('.leaflet-control-zoom');

// Weather
if (zoomControlContainer) {
	const weatherButton = L.DomUtil.create('a', '', zoomControlContainer);

    weatherButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    weatherButton.title = 'Weather';
    weatherButton.href = '#';
    weatherButton.className = 'leaflet-control-zoom-in';

    weatherButton.classList.remove('leaflet-control-zoom-in');
    weatherButton.classList.add('leaflet-control-filter');

    let weatherActive = false;

	weatherButton.onclick = function (e) {
		e.preventDefault();
		weatherActive = !weatherActive;

		if (weatherActive) {
			if (webcamLayer) map.addLayer(webcamLayer);
			document.getElementById('weather-widget').style.display = 'block';
		} else {
			if (webcamLayer) map.removeLayer(webcamLayer);
			document.getElementById('weather-widget').style.display = 'none';
		}
	};
	
	const eventsButton = L.DomUtil.create('a', 'leaflet-control-filter', zoomControlContainer);
  eventsButton.innerHTML = '<i class="fa-solid fa-calendar"></i>';
  eventsButton.title = 'Events Calendar';
  eventsButton.href = 'https://www.salzburg.info/en/events/events-calendar';
  eventsButton.target = '_blank';
  eventsButton.rel = 'noopener noreferrer';
	
    const restaurantsButton = L.DomUtil.create('a', '', zoomControlContainer);

    restaurantsButton.innerHTML = '<i class="fa-solid fa-utensils"></i>';
    restaurantsButton.title = 'Restaurants';
    restaurantsButton.href = '#';
    restaurantsButton.className = 'leaflet-control-zoom-in';

    restaurantsButton.classList.remove('leaflet-control-zoom-in');
    restaurantsButton.classList.add('leaflet-control-filter');

    restaurantsButton.onclick = function (e) {
        e.preventDefault();
        console.log('Filter button clicked!');
    };
	
	const cafeButton = L.DomUtil.create('a', '', zoomControlContainer);

    cafeButton.innerHTML = '<i class="fa-solid fa-mug-saucer"></i></i>';
    cafeButton.title = 'Cafés';
    cafeButton.href = '#';
    cafeButton.className = 'leaflet-control-zoom-in';

    cafeButton.classList.remove('leaflet-control-zoom-in');
    cafeButton.classList.add('leaflet-control-filter');

    cafeButton.onclick = function (e) {
        e.preventDefault();
        console.log('Filter button clicked!');
    };
	
	const shopsButton = L.DomUtil.create('a', '', zoomControlContainer);

    shopsButton.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
    shopsButton.title = 'Shops';
    shopsButton.href = '#';
    shopsButton.className = 'leaflet-control-zoom-in';

    shopsButton.classList.remove('leaflet-control-zoom-in');
    shopsButton.classList.add('leaflet-control-filter');

    shopsButton.onclick = function (e) {
        e.preventDefault();
        console.log('Filter button clicked!');
    };
	
	const attractionsButton = L.DomUtil.create('a', '', zoomControlContainer);

    attractionsButton.innerHTML = '<i class="fa-solid fa-landmark"></i></i>';
    attractionsButton.title = 'Attractions';
    attractionsButton.href = '#';
    attractionsButton.className = 'leaflet-control-zoom-in';

    attractionsButton.classList.remove('leaflet-control-zoom-in');
    attractionsButton.classList.add('leaflet-control-filter');

    attractionsButton.onclick = function (e) {
        e.preventDefault();
        console.log('Filter button clicked!');
    };
	
	const transportationButton = L.DomUtil.create('a', '', zoomControlContainer);

    transportationButton.innerHTML = '<i class="fa-solid fa-bus-simple"></i>';
    transportationButton.title = 'Transportation';
    transportationButton.href = '#';
    transportationButton.className = 'leaflet-control-zoom-in';

    transportationButton.classList.remove('leaflet-control-zoom-in');
    transportationButton.classList.add('leaflet-control-filter');

    transportationButton.onclick = function (e) {
        e.preventDefault();
        console.log('Filter button clicked!');
    };
	
	const limousineButton = L.DomUtil.create('a', '', zoomControlContainer);

    limousineButton.innerHTML = '<i class="fa-solid fa-taxi"></i>';
    limousineButton.title = 'Salzburg Limousine (CADO)';
    limousineButton.href = '#';
    limousineButton.className = 'leaflet-control-zoom-in';

    limousineButton.classList.remove('leaflet-control-zoom-in');
    limousineButton.classList.add('leaflet-control-filter');

    limousineButton.onclick = function (e) {
        e.preventDefault();
        console.log('Filter button clicked!');
    };
	
	const wellnessButton = L.DomUtil.create('a', '', zoomControlContainer);

    wellnessButton.innerHTML = '<i class="fa-solid fa-spa"></i>';
    wellnessButton.title = 'Wellness';
    wellnessButton.href = '#';
    wellnessButton.className = 'leaflet-control-zoom-in';

    wellnessButton.classList.remove('leaflet-control-zoom-in');
    wellnessButton.classList.add('leaflet-control-filter');

    wellnessButton.onclick = function (e) {
        e.preventDefault();
        console.log('Filter button clicked!');
    };
	
	const outdoorButton = L.DomUtil.create('a', '', zoomControlContainer);

    outdoorButton.innerHTML = '<i class="fa-solid fa-person-hiking"></i>';
    outdoorButton.title = 'Outdoor';
    outdoorButton.href = '#';
    outdoorButton.className = 'leaflet-control-zoom-in';

    outdoorButton.classList.remove('leaflet-control-zoom-in');
    outdoorButton.classList.add('leaflet-control-filter');

    outdoorButton.onclick = function (e) {
        e.preventDefault();
        console.log('Filter button clicked!');
    };
	
	const mobilityticketButton = L.DomUtil.create('a', 'leaflet-control-filter', zoomControlContainer);
  mobilityticketButton.innerHTML = '<i class="fa-solid fa-ticket-simple"></i></i>';
  mobilityticketButton.title = 'Guest Mobility Ticket';
  mobilityticketButton.href = 'https://idp.feratel.com/auth/realms/card-msl01/protocol/openid-connect/auth?response_type=code&client_id=card-software&redirect_uri=https%3A%2F%2Fcard-software-msl.feratel.com%2Fsso%2FMSL01?language%3Dde%26mandantselect%3DMSL01%26realmcode%3DMSL01&state=084b3bf3-c8c8-451c-9b12-561325819026&login=true&scope=openid';
  mobilityticketButton.target = '_blank';
  mobilityticketButton.rel = 'noopener noreferrer';
  
  const concertButton = L.DomUtil.create('a', 'leaflet-control-filter', zoomControlContainer);
  concertButton.innerHTML = '<i class="fa-solid fa-music"></i>';
  concertButton.title = 'Schlosskonzerte Mirabell';
  concertButton.href = 'https://www.schlosskonzerte-salzburg.at/alle-konzerte';
  concertButton.target = '_blank';
  concertButton.rel = 'noopener noreferrer';
  
    const fortressButton = L.DomUtil.create('a', 'leaflet-control-filter', zoomControlContainer);
  fortressButton.innerHTML = '<i class="fa-solid fa-chess-rook"></i>';
  fortressButton.title = 'Festungskonzerte Best of Mozart';
  fortressButton.href = 'https://www.salzburghighlights.at/de/mozart-konzerte-salzburg/';
  fortressButton.target = '_blank';
  fortressButton.rel = 'noopener noreferrer';
}
