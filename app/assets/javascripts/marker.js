$(document).ready(function() {
  var latitude = 0;
  var longitude = 0;

  var map = L.map('map').setView([29.7601927,-95.36938959999999], 10);
  L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'examples.map-i86knfo3'
  }).addTo(map);

  var myArray = $("#markers").data('items')
  for (var i in myArray){
    latitude = myArray[i]['latitude'];
    longitude = myArray[i]['longitude'];
    L.marker([latitude,longitude]).addTo(map);
  }

});
