
const map = L.map('map').setView([-7.5135438, 110.1046824], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("magelang/magelang.geojson"), {
    onEachFeature: onEachFeature
}).addTo(map);