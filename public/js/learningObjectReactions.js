    // Initialize empty array
    var data = [];
    // Get JSON data and wait for the response
    d3.json("/api/LOReactions", function(error, json) {
    $.each(json, function(d,i){
    data.push({
    label: i.label,
    value: i.value
    })
    })
    var pie = new d3pie("reactionsPieChart", {
    "header": {
    "title": {
    "text": "Total Reactions",
    "fontSize": 24,
    "font": "open sans"
    },
    "subtitle": {
    "text": "Number of Likes, Happy and Sad for all Learning Objects",
    "color": "#999999",
    "fontSize": 12,
    "font": "open sans"
    },
    "titleSubtitlePadding": 9
    },
    "size": {
    "canvasWidth": 500,
    "pieOuterRadius": "80%"
    },
    "data": {
    "content": data
    },
    "labels": {
    "outer": {
    "pieDistance": 32
    },
    "inner": {
    "hideWhenLessThanPercentage": 3
    },
    "mainLabel": {
    "fontSize": 11
    },
    "percentage": {
    "color": "#ffffff",
    "decimalPlaces": 0
    },
    "value": {
    "color": "#adadad",
    "fontSize": 11
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