## Chapter 3 : Javascript preparation

[example](https://universitas.bukupedia.co.id/geojson/leaflet/chapter3/)

example folder  : /leaflet/chapter3/

### Base Knowledge
1. Take course from [mygreatlearning](https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-javascript) or from [LinkedIn](https://www.linkedin.com/learning/javascript-for-web-designers-3)
2. Take Javascript Learning from [Google](https://learndigital.withgoogle.com/digitalgarage/course/learn-programming-with-javascript) for next class meeting.
3. Finish the course then create folder inside leaflet/class folder with your npm example : leaflet/b/113040087
4. [Leafletjs Geojson Tutorial](https://leafletjs.com/examples/geojson/)

### Prerequisite

1. To access your work locally. Install Live Server Extension from your VS Code Marketplace. 
![image](https://user-images.githubusercontent.com/11188109/210195164-f168703a-dfee-4ab5-b67b-6707ced53204.png)

2. To use live server just right click on your html and Open with Live Server
![image](https://user-images.githubusercontent.com/11188109/210195420-8ee855c1-fbbe-4f11-b5d9-367483871777.png)

3. To access your work from internet. Create github pages in your forked repo to access your work.
![image](https://user-images.githubusercontent.com/11188109/210194917-e66aeb53-504d-440c-a2ff-8f18cded3529.png)

4. Make sure all check has passed, then you might visit your github pages.
![image](https://user-images.githubusercontent.com/11188109/210195463-3bf352c8-d461-41a9-a56f-28561b8f4bb7.png)

### Task

1. create a clean index.html try to use leafletjs in, take example in leaflet/chapter3/index.html file. please use script src only, keep simple and clean code. Do not put your script in the index.html file.

```html
<html lang="en">
<head>
	<base target="_top">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Chapter 3 - Memanggil Geojson dengan Javascript</title>
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" />
    <link rel="stylesheet" href="css/geojson.css" />
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" ></script>
</head>
<body>

<div id='map'></div>

<script src="js/lib.js" type="text/javascript"></script>
<script src="js/geojson.js" type="text/javascript"></script>

</body>
</html>
```

2. Modify your geojson city in the map from chapter 2. Rename border atribute into geometry. Add type and properties object. Save your shape inside your NPM folder create data folder, rename to city.json. Be aware, if type is Polygon make sure using doble bracket [[, single bracket just for polyline.

```json
{
 "geometry": {
          "type": "Polygon",
          "coordinates": [[
            [107.57602997295076, -6.873209332735188],
            [107.57595889441455, -6.873647385015163],
            [107.57626734843957, -6.873733930250689],
            [107.57632367482675,-6.873241287930358],
            [107.57602997295076, -6.873209332735188]
        
        ]]
        },
 "type": "Feature",
 "properties": {
          "name": "Desa Sukabelajar",
            "amenity": "Pemandian Air Panas",
            "popupContent": "Sukabelajar",
            "style": {
                "weight": 2,
                "color": "#999",
                "opacity": 1,
                "fillColor": "#B0DE5C",
                "fillOpacity": 0.8
            }
        }
}
```

3. Create lib.js and geojson.js, you may take a look example in leaflet/chapter3/js folder. Call your city.json with your javascript.

lib.js : put your fetch function in here

```javascript
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }
  
function getGeoJSON(path){
  var request = new XMLHttpRequest();
  request.open("GET", path, false);
  request.send(null)
  return JSON.parse(request.responseText);
  }
```
geojson.js : put your main function in here, also call lib function

```javascript
const map = L.map('map').setView([-6.87360695863978, 107.5759227360176], 23);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);





L.geoJSON(getGeoJSON("bandung/ulbi.json"), {
    onEachFeature: onEachFeature
}).addTo(map);
```


4. there is 5 files consist : index.html, lib.js,geojson.js, city.json and geojson.css.

![image](https://user-images.githubusercontent.com/11188109/210197036-85d8c121-a1d1-4643-8221-e286b9a79f60.png)

5. Pull Request Subject : 10-KELAS-NPM-NAMA , 
6. Description : please include your screenshoot of your application and attach your javascript certificate.
7. After Approved you might go home
