var margin = {
    top: 50,
    right: 20,
    bottom: 70,
    left: 40
    },
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scaleBand()
    .range([0, width])
    .padding(0.1);
var y = d3.scaleLinear()
    .range([height, 0])

var xAxis = d3.axisBottom()
    .scale(x);

var yAxis = d3.axisLeft()
    .scale(y);

var svgRecommendedView = d3.select("#recommendedViewsGraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

//TO DO
//GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
var currentYearRecView= new Date().getFullYear();

d3.json("/api/recommendedViews/" + currentYearRecView, function(error, json) {
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
        var numOfRecViews = 0;
        var numOfNormalViews = 0;

        for(var i=0;i<json.length;i++){
            if(json[i].typeOfView=='recommended'){
                var temp = d3.isoParse(json[i].dateViewed);//change this before deplyoning, use createdAt instead
                var temp2 = temp.getMonth();
                var date = months[temp2];
                tally[date] = (tally[date]||0) + 1;
                numOfRecViews++;
            }
            else{
                numOfNormalViews++;
            }
        }
    }
    var recviewdata = [];
    var viewratiodata = [];

    for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
            recviewdata.push({
                date: date,
                frequency: tally[date]
            });
        }
    }

    viewratiodata.push({
        label: "Recommended",
        value: numOfRecViews
    });
    viewratiodata.push({
        label: "Not Recommended",
        value: numOfNormalViews
    });


    x.domain(recviewdata.map(function (d) {
        return d.date;
    }));

    y.domain([0, d3.max(recviewdata, function (d) {
        return d.frequency;
    })]);

    svgRecommendedView.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
    svgRecommendedView.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("NUmber of Views");
    svgRecommendedView.append("text")
        .attr("x", width / 2 )
        .attr("y", -(margin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .text("Total Number of Views");
    svgRecommendedView.selectAll(".bar")
        .data(recviewdata)
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

    var pie = new d3pie("ratioViewsGraph", {
        "header": {
            "title": {
                "text": "Comparison of Learning Objects Views",
                "fontSize": 24,
                "font": "open sans"
            },
            "subtitle": {
                "text": "Recommended vs. Not Recommended Learning Objects Views",
                "color": "#999999",
                "fontSize": 12,
                "font": "open sans"
            },
            "titleSubtitlePadding": 9
        },
        "size": {
            "canvasWidth": 470,
            "canvasHeight": 400,
            "pieOuterRadius": "80%"
        },
        "data": {
            "content": viewratiodata
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
});