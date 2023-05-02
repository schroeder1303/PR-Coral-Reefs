// map options
var options = {
    center: [18.2208, -66.5901],
    zoom: 9
}

// create a Leaflet map in our division container with id of 'map'
var map = L.map('map', options);

// Leaflet providers base map URL
var basemap_source =
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'

// Leaflet providers attributes
var basemap_options = {
    attribution: '&copy; <a href="&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
};

// request some basemap tiles and add to the map
var tiles = L.tileLayer(basemap_source, basemap_options).addTo(map);


fetch("data/reef.geojson")
      // after it is returned...
      .then(function (response) {
        // Parse the JSON into a useable format, then return it
        return response.json();
      })
      // The returned response is now data in a new then method
      .then(function (data) {
        // This is the JSON from our response
        console.log(data);
        drawMap(data);
           
      })
      // If there is an error, log it to the console
      .catch(function (error) {
        console.log(error);
      });



function drawMap(data) {
    const reefs = L.geoJson(data, {
        style: function (feature) {
            var threat = feature.properties.threat;
            var color;
            switch (threat) {
                case 0:
                    color = '#fff5f0';
                    break;
                case 100:
                    color = '#fca486';
                    break;
                case 1000:
                    color = '#67000d';
                    break;
                default:
                    color = 'gray';
            }
            return { color: color };
        }
    }).addTo(map);
}




