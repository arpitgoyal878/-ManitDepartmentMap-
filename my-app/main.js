import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [8616697.207804445, 2657800.5768949185],
    zoom: 15,
  }),
});
// 0
// :
// 8616697.207804445
// 1
// :
// 2657800.5768949185
map.on('click', function (e) {
  console.log(e.coordinate)
})
// map = 15 / 77.403 / 23.213

document.getElementById('zoom-out').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};
