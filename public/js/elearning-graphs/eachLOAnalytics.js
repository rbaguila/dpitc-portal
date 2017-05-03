
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

var key = GetURLParameter('key');
    
var margin = {
    top: 50,
    right: 20,
    bottom: 70,
    left: 40
    },
    width = 400 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;

var x = d3.scaleBand()
    .range([0, width])
    .padding(0.1);
var y = d3.scaleLinear()
    .range([height, 0])

var xAxis = d3.axisBottom()
    .scale(x);

var yAxis = d3.axisLeft()
    .scale(y);

var svgLOView = d3.select("#loViewsGraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

//TO DO
//GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
var currentYearEachLOView= new Date().getFullYear();

d3.json("/api/views/"+ key + "/" + currentYearEachLOView, function(error, json) {
    var tally = {};

    if(json.length==0){
        for(var i=0;i<12;i++){
            var date = months[i];
            tally[date] = 0;
        }

    }
    else{
        for(var a=0;a<months.length;a++){
            tally[months[a]] = 0;
        }

        for(var i=0;i<json.length;i++){
            var temp = d3.isoParse(json[i].dateViewed);//change this before deplyoning, use createdAt instead
            var temp2 = temp.getMonth();
            var date = months[temp2];
            tally[date] = (tally[date]||0) + 1;
        }
    }
    var loviewdata = [];
    for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
            loviewdata.push({
                date: date,
                frequency: tally[date]
            });
        }
    }
    x.domain(loviewdata.map(function (d) {
        return d.date;
    }));

    y.domain([0, d3.max(loviewdata, function (d) {
        return d.frequency;
    })]);

    svgLOView.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
    svgLOView.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Number of Views");
    svgLOView.append("text")
        .attr("x", width / 2 )
        .attr("y", -(margin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .text("Number of Views for the Current Year");
    svgLOView.selectAll(".bar")
        .data(loviewdata)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.date);
        })
        .attr("width", x.bandwidth())
        .attr("y", function (d) {
            return y(d.frequency);
        })
        .attr("height", function (d) {
            return height - y(d.frequency);
        });
    function type(d) {
        d.frequency = +d.frequency;
        return d;
    }
});

var svgLOComment = d3.select("#loCommentsGraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//TO DO
//GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
var currentYearEachLOComment= new Date().getFullYear();

d3.json("/api/comments/"+ key + "/" + currentYearEachLOComment, function(error, json) {
    var tally = {};

    if(json.length==0){
        for(var i=0;i<12;i++){
            var date = months[i];
            tally[date] = 0;
        }

    }
    else{
        for(var a=0;a<months.length;a++){
            tally[months[a]] = 0;
        }

        for(var i=0;i<json.length;i++){
            var temp = d3.isoParse(json[i].createdAt);//change this before deplyoning, use createdAt instead
            var temp2 = temp.getMonth();
            var date = months[temp2];
            tally[date] = (tally[date]||0) + 1;
        }
    }
    var locommentdata = [];
    for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
            locommentdata.push({
                date: date,
                frequency: tally[date]
            });
        }
    }
    x.domain(locommentdata.map(function (d) {
        return d.date;
    }));

    y.domain([0, d3.max(locommentdata, function (d) {
        return d.frequency;
    })]);

    svgLOComment.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
    svgLOComment.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Number of Comments");
    svgLOComment.append("text")
        .attr("x", width / 2 )
        .attr("y", -(margin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .text("Number of Comments for the Current Year");
    svgLOComment.selectAll(".bar")
        .data(locommentdata)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.date);
        })
        .attr("width", x.bandwidth())
        .attr("y", function (d) {
            return y(d.frequency);
        })
        .attr("height", function (d) {
            return height - y(d.frequency);
        });
    function type(d) {
        d.frequency = +d.frequency;
        return d;
    }
});


var loreactionsdata = [];
    // Get JSON data and wait for the response
d3.json("/api/reactions/"+ key, function(error, json) {
    if(json.length>0){
        $.each(json, function(d,i){
            loreactionsdata.push({
                label: i.label,
                value: i.value
            })
        })
        var pie = new d3pie("loReactionsGraph", {
        "header": {
            "title": {
                "text": "Total Reactions",
                "fontSize": 24,
                "font": "open sans"
            },
            "subtitle": {
                "text": "Number of Reactions",
                "color": "#999999",
                "fontSize": 12,
                "font": "open sans"
            },
            "titleSubtitlePadding": 9
        },
        "size": {
            "canvasWidth": 400,
            "canvasHeight": 380,
            "pieOuterRadius": "90%"
        },
        "data": {
            "content": loreactionsdata
        },
        "labels": {
            "outer": {
                "pieDistance": 32
            },
            "inner": {
                "format": "value",
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
    }
    else{
        //TO DO ADD SOME THINGS HERE
    }
});