var wms_layers = [];

var lyr_STOrtofotocolor2020_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2020",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "[ST] Ortofoto color [2020]",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2020_0, 0]);
var format_DeteccionsLlavaneres_1 = new ol.format.GeoJSON();
var features_DeteccionsLlavaneres_1 = format_DeteccionsLlavaneres_1.readFeatures(json_DeteccionsLlavaneres_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsLlavaneres_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsLlavaneres_1.addFeatures(features_DeteccionsLlavaneres_1);
var lyr_DeteccionsLlavaneres_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsLlavaneres_1, 
                style: style_DeteccionsLlavaneres_1,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsLlavaneres_1.png" /> Deteccions Llavaneres'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor2020_0,],
                                title: "Mapas de fondo"});

lyr_STOrtofotocolor2020_0.setVisible(true);lyr_DeteccionsLlavaneres_1.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_DeteccionsLlavaneres_1];
lyr_DeteccionsLlavaneres_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', });
lyr_DeteccionsLlavaneres_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area': '', });
lyr_DeteccionsLlavaneres_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', });
lyr_DeteccionsLlavaneres_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});