var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var layerUrl = "https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}";
var layerAttribution = "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>";

// // Step 2: Build out all map layers

var myMap = L.map("map", {
    center : [37.09, -95.71],
    zoom : 3.5,
});

var layer = L.tileLayer(layerUrl, {
    attribution : layerAttribution,
    id : "light-v9",
    accessToken : API_KEY
}).addTo(myMap);



// Step 1: Retrieve data (decide what data) with API call --- Use the .then method as done before
d3.json(queryUrl).then(function(weekData) {

    var eqDepthColors = ["#FF2D00", "#FFAD00", "#D2FF00", "#52FF00", "#00FF2D", "#00FFAD"];

    function colorPicker(eqDepth) {
        if (eqDepth > 100) {
            return eqDepthColors[0];
        }
        else if (eqDepth > 80) {
            return eqDepthColors[1];
        }
        else if (eqDepth > 60) {
            return eqDepthColors[2];
        }
        else if (eqDepth > 40) {
            return eqDepthColors[3];
        }
        else if (eqDepth > 20) {
            return eqDepthColors[4];
        }
        else {
            return eqDepthColors[5];
        }
    }


    // Step 3: Plot earthquake data markers
    // Size of marker: features.properties.mag
    // Color of marker: features.geometry[2] - 2 because 3rd in list
    function markerStyle(feature) {
        return {
            fillColor : colorPicker(feature.geometry.coordinates[2]), // Set conditions to create bins for the way earthquakes are colored
            radius : (feature.properties.mag * feature.properties.mag), // This lets us accentuate size for stronger earthquakes
            color : colorPicker(feature.geometry.coordinates[2]),
            opacity : 0.5
        };
    }

    

    L.geoJSON(weekData, {
        pointToLayer : function(feature, coord) {
            return L.circleMarker(coord);
    
        },
        style : markerStyle,
        // Step 4: Add a pop-up with extra info
        // features.geometry.id - DONT INCLUDE Proved to be mostly unhelpful
        // features.properties.time - DONT INCLUDE Time as provided incomprehensible
        // features.properties.mag
        // features.geometry.depth
        // features.properties.type
        // features.properties.place
        // features.properties.url
        onEachFeature: function(feature, layer) {
            layer.bindPopup(
                `
                Magnitude: ${feature.properties.mag}<br>
                Depth: ${feature.geometry.coordinates[2]}<br>
                Type: ${feature.properties.type}<br>
                Location: ${feature.properties.place}<br>
                ${feature.properties.url}
                `
            )}
      
    }).addTo(myMap);

    // Step 5: Add a legend that provides context for the map data
    // Size of marker: features.properties.mag - This is likely unnecessary... it might be visually clear but might be useful in contrast with color of marker
    // Color of marker: features.geometry.depth

    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function(myMap) {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 20, 40, 60, 80, 100],
            colors = eqDepthColors;
    
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML += '<i style="background:' + colors[i] + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
    
        return div;
    };
    legend.addTo(myMap);


});




