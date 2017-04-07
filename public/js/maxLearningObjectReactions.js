    // Initialize empty array
    var maxdata = [];
    // Get JSON data and wait for the response
    d3.json("/api/eachLOReactions/highest", function(error, json) {
    $.each(json, function(d,i){
    maxdata.push({
    label: i.label,
    value: i.value
    })
    })
    var pie = new d3pie("maxReactionsPieChart", {
    "header": {
    "title": {
    "text": "Highest Number of Reactions",
    "fontSize": 15,
    "font": "open sans"
    },
    "subtitle": {
    "text": "Highest Number of Likes, Happy and Sad",
    "color": "#999999",
    "fontSize": 10,
    "font": "open sans"
    },
    "titleSubtitlePadding": 9
    },
    "size": {
    "canvasWidth": 230,
    "canvasHeight": 250,
    "pieOuterRadius": "80%"
    },
    "data": {
    "content": maxdata
    },
    "labels": {
    "outer": {
    "pieDistance": 20
    },
    "inner": {
    "hideWhenLessThanPercentage": 3
    },
    "mainLabel": {
    "fontSize": 9
    },
    "percentage": {
    "color": "#ffffff",
    "decimalPlaces": 0
    },
    "value": {
    "color": "#adadad",
    "fontSize": 9
    },
    "lines": {
    "enabled": true
    },
    "truncation": {
    "enabled": true
    }
    },
    "effects": {
    "pullOutSegmentOnClick": {
    "effect": "linear",
    "speed": 400,
    "size": 8
    }
    },
    "misc": {
    "gradient": {
    "enabled": true,
    "percentage": 100
    }
    }
    });
    });