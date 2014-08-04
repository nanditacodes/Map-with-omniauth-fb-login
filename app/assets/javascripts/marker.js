$(document).ready(function() {
  var myArray =  $('#markers').data('url')
  window.map = L.map('map').setView([29.7601927,-95.36938959999999], 10);
  L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'examples.map-i86knfo3'
  }).addTo(map);

  for (var i=0; i < myArray.length; i++){
    L.marker([myArray[i].latitude, myArray[i].longitude]).addTo(map)
  }

});
