var size = 0;
var placement = 'point';
function categories_TUTUPAN_LAHAN_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Hutan Lahan Kering Primer':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(97,189,99,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hutan Lahan Kering Sekunder':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(53,255,70,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hutan Mangrove Primer':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(162,6,173,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hutan Mangrove Sekunder':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(198,150,245,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kebun':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,240,29,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Permukiman':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(249,27,27,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pertanian Lahan Kering Campuran':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,171,3,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rawa':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(148,22,87,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sawah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(40,210,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Semak Belukar':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(209,255,183,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Semak Belukar Rawa':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(220,195,234,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tambak':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(53,255,249,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tanah Terbuka':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(182,141,103,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tubuh Air':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,89,224,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_TUTUPAN_LAHAN_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Remark");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_TUTUPAN_LAHAN_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
