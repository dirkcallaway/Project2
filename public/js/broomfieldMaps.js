// Initialize and add the map
// eslint-disable-next-line no-unused-vars
function initMap() {
  var center = {
    lat: 39.9202695,
    lng: -105.089402
  };
  // The map, centered at Broomfield
  var map = new google.maps.Map(document.getElementById("broomfieldMap"), {
    zoom: 16,
    center: center
  });

  // The marker, positioned of stores
  var broomfield = [
    [
      "Original Pizza <br>\
    1300 W Midway Blvd, Broomfield, CO 80020 <br>\
    <a href = 'https://goo.gl/maps/yj3AnvX3egP2'>Get Directions</a>",
      39.921896,
      -105.0855385
    ],
    [
      "Shell <br>\
    1760 W Midway Blvd, Broomfield, CO 80020<br>\
    <a href = 'https://goo.gl/maps/g2nr8vh9KZq'>Get Directions</a>",
      39.9197676,
      -105.0905715
    ],
    [
      "At Home<br>\
    1660 W Midway Blvd, Broomfield, CO 80020<br>\
    <a href = 'https://goo.gl/maps/Fxxury8Np6n'>Get Directions</a>",
      39.9202413,
      -105.0913367
    ],
    [
      "Night Owl Lounge<br>\
    2000 W Midway Blvd, Broomfield, CO 80020<br>\
    <a href = 'https://goo.gl/maps/pnD3PSxPuuQ2'>Get Directions</a>",
      39.9217181,
      -105.094457
    ],
    [
      "Chipper's Lane<br>\
    100 Nickel St, Broomfield, CO 80020<br>\
    <a href = 'https://goo.gl/maps/r1cthvoo17q'>Get Directions</a>",
      39.9175507,
      -105.087833
    ],
    [
      "Infinitus Pizza PIE <br>\
    145 Nickel St, Broomfield, CO 80020 <br>\
    <a href = 'https://goo.gl/maps/4kD8ywYpYfS2'>Get Directions</a>",
      39.9194524,
      -105.0910642
    ]
  ];
  var infowindow = new google.maps.InfoWindow({});
  var newMarker, count;
  for (count = 0; count < broomfield.length; count++) {
    newMarker = new google.maps.Marker({
      position: new google.maps.LatLng(
        broomfield[count][1],
        broomfield[count][2]
      ),
      map: map,
      title: broomfield[count][0]
    });
    google.maps.event.addListener(
      newMarker,
      "click",
      (function(newMarker, count) {
        return function() {
          infowindow.setContent(broomfield[count][0]);
          infowindow.open(map, newMarker);
        };
      })(newMarker, count)
    );
  }
}
