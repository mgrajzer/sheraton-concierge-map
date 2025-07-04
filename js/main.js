var BasemapAT_orthofoto = L.tileLayer('https://mapsneu.wien.gv.at/basemap/bmaporthofoto30cm/{type}/google3857/{z}/{y}/{x}.{format}', {
	maxZoom: 20,
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

