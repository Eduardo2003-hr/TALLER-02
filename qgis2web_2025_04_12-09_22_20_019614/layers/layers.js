var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GEOLOGIALIBERTAD_1 = new ol.format.GeoJSON();
var features_GEOLOGIALIBERTAD_1 = format_GEOLOGIALIBERTAD_1.readFeatures(json_GEOLOGIALIBERTAD_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGIALIBERTAD_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGIALIBERTAD_1.addFeatures(features_GEOLOGIALIBERTAD_1);
var lyr_GEOLOGIALIBERTAD_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGIALIBERTAD_1, 
                style: style_GEOLOGIALIBERTAD_1,
                popuplayertitle: 'GEOLOGIA-LIBERTAD',
                interactive: true,
    title: 'GEOLOGIA-LIBERTAD<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_0.png" /> Colina y Montaña - Colina<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_1.png" /> Colina y Montaña - Vertiente montañosa empinada a escarpada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_2.png" /> Colina y Montaña - Vertiente montañosa y colina empinada a escarpada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_3.png" /> Colina y Montaña - Vertiente montañosa y colina moderadamente empinada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_4.png" /> Colina y Montañosa - Vertiente montañosa moderadamente empinada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_5.png" /> Montaña - Vertiente montañosa empinada a escarpada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_6.png" /> Montaña - Vertiente montañosa empinada escarpada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_7.png" /> Montaña - Vertiente montañosa moderadamente empinada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_8.png" /> Planicie - Fondo de valle y llanura aluvial<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_9.png" /> Planicie - Llanura<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_10.png" /> Planicie - Valle y llanura irrigada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_11.png" /> Planicie Ondulada a Disectada - Altiplanicie disectada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_12.png" /> Planicie Ondulada a Disectada - Altiplanicie ondulada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_13.png" /> Planicie Ondulada a Disectada - Llanura disectada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_14.png" /> Planicie Ondulada a Disectada - Llanura ondulada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_15.png" /> Planicie Ondulada a Disectada - Vertiente allanada<br />\
    <img src="styles/legend/GEOLOGIALIBERTAD_1_16.png" /> Planicie Ondulada a Disectada - Vertiente allanada a disectada<br />' });
var format_LALIBERTAD_2 = new ol.format.GeoJSON();
var features_LALIBERTAD_2 = format_LALIBERTAD_2.readFeatures(json_LALIBERTAD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LALIBERTAD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LALIBERTAD_2.addFeatures(features_LALIBERTAD_2);
var lyr_LALIBERTAD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LALIBERTAD_2, 
                style: style_LALIBERTAD_2,
                popuplayertitle: 'LA LIBERTAD',
                interactive: true,
                title: '<img src="styles/legend/LALIBERTAD_2.png" /> LA LIBERTAD'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GEOLOGIALIBERTAD_1.setVisible(true);lyr_LALIBERTAD_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GEOLOGIALIBERTAD_1,lyr_LALIBERTAD_2];
lyr_GEOLOGIALIBERTAD_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SIMBOLO_': 'SIMBOLO_', 'REGION': 'REGION', 'FORMAS_DEL': 'FORMAS_DEL', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_LALIBERTAD_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'Lista': 'Lista', });
lyr_GEOLOGIALIBERTAD_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SIMBOLO_': 'TextEdit', 'REGION': 'TextEdit', 'FORMAS_DEL': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_LALIBERTAD_2.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'Lista': '', });
lyr_GEOLOGIALIBERTAD_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'SIMBOLO_': 'inline label - always visible', 'REGION': 'inline label - always visible', 'FORMAS_DEL': 'inline label - always visible', 'Area': 'inline label - always visible', 'Perimetro': 'inline label - always visible', });
lyr_LALIBERTAD_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'Lista': 'no label', });
lyr_LALIBERTAD_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});