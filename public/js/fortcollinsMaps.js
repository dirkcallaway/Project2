// Initialize and add the map
// eslint-disable-next-line no-unused-vars
function initMap() {
  var center = {
    lat: 40.5887354,
    lng: -105.0768723
  };
  // The map, centered at fortcollins
  var map = new google.maps.Map(document.getElementById("fortcollinsMap"), {
    zoom: 16,
    center: center
  });

  // The marker, positioned of stores
  var fortcollins = [
    [
      "Snooze an A.M. Eatery <br>\
      144 W Mountain Ave, Fort Collins, CO 80524 <br>\
      <a href = 'https://goo.gl/maps/n1EDEzhhq472'>Get Directions</a>",
      40.5872901,
      -105.080394
    ],
    [
      "Curiosities <br>\
      242 Walnut St, Fort Collins, CO 80524<br>\
      <a href = 'https://goo.gl/maps/9pzgXP53fiv'>Get Directions</a>",
      40.5885554,
      -105.0778585
    ],
    [
      "Silver Grill Cafe<br>\
      218 Walnut St, Fort Collins, CO 80524<br>\
      <a href = 'https://goo.gl/maps/q1jmiE5WGrF2'>Get Directions</a>",
      40.5888941,
      -105.078376
    ],
    [
      "CopperMuse Distillery<br>\
      244 N College Ave #105, Fort Collins, CO 80524<br>\
      <a href = 'https://goo.gl/maps/eotBPWtiW2G2'>Get Directions</a>",
      40.5899981,
      -105.078849
    ],
    [
      "Beau Jo's<br>\
      205 N College Ave, Fort Collins, CO 80524<br>\
      <a href = 'https://goo.gl/maps/ZKDVHzFBfAU2'>Get Directions</a>",
      40.5894061,
      -105.0773319
    ],
    [
      "Nature's Own <br>\
      201 Linden St # 101, Fort Collins, CO 80524 <br>\
      <a href = 'https://goo.gl/maps/rHoJsF2KcWD2'>Get Directions</a>",
      40.5893541,
      -105.0774724
    ]
  ];
  var infowindow = new google.maps.InfoWindow({});
  var newMarker, count;
  for (count = 0; count < fortcollins.length; count++) {
    newMarker = new google.maps.Marker({
      position: new google.maps.LatLng(
        fortcollins[count][1],
        fortcollins[count][2]
      ),
      map: map,
      title: fortcollins[count][0]
    });
    google.maps.event.addListener(
      newMarker,
      "click",
      (function(newMarker, count) {
        return function() {
          infowindow.setContent(fortcollins[count][0]);
          infowindow.open(map, newMarker);
        };
      })(newMarker, count)
    );
  }
}
