var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.936550, lng: 30.321000},
    zoom: 16,
    disableDefaultUI: true
  });

  var image = "img/label-googlemaps.png";
  var beachMarker = new google.maps.Marker({
    position: {lat: 59.936268, lng: 30.321124},
    map: map,
    icon: image
  });
}