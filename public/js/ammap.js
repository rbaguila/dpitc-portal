$(document).ready(function(){
  AmCharts.makeChart( "map", {
    /**
     * this tells amCharts it's a map
     */
    "type": "map",
    "theme": "light",
    "colorSteps": 10,

    "dataProvider": {
      "map": "philippinesLow",
      "getAreasFromMap": true,
      "zoomLevel": 0.9
    },
    "areasSettings": {
      "autoZoom": true,
      "balloonText": "[[title]]: <strong>[[value]]</strong>"
    },
    "valueLegend": {
      "right": 10,
      "color": "#FFFFFF",
      "minValue": "Low",
      "maxValue": "High"
    },
    "zoomControl": {
      "minZoomLevel": 0.9,
      "buttonFillAlpha": 1,
      "buttonIconAlpha": 1
    },
    "listeners": [{
      "event": "init",
      "method": updateHeatmap
    }]
  });

  function updateHeatmap( event ) {
    var map = event.chart;
    if ( map.dataGenerated )
      return;
    if ( map.dataProvider.areas.length === 0 ) {
      setTimeout( updateHeatmap, 100 );
      return;
    }
    for ( var i = 0; i < map.dataProvider.areas.length; i++ ) {
      map.dataProvider.areas[ i ].value = Math.round( Math.random() * 10000 );
    }
    map.dataGenerated = true;
    map.validateNow();
  }

});
