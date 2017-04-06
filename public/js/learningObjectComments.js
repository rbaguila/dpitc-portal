    /*var margin = {
    top: 30,
    right: 20,
    bottom: 30,
    left: 40
    },
    width = 400 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;
    var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);
    var y = d3.scale.linear()
    .range([height, 0]);
    var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
    var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);
    var svgComment = d3.select("#commentsGraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    d3.json("/api/LOComments/2017", function(error, json) {
        var tally = {};
        var formatDate = d3.time.format.iso;
        for(var i=0;i<json.length;i++){
            //console.log(json[0].dateCreated);
            var datetime = formatDate.parse(json[i].dateCreated);
            var date = formatDate(datetime).split('-')[1];
            console.log("LOL" + date);
            //var arr = json[i].dateCreated.split("-");
            //var num = parseInt(arr[1],10);
            //num--;
            //console.log(x);
            //var date = months[num];
            //console.log("The current month is " + months[num]);
            tally[date] = (tally[date]||0) + 1;
        }
        var commentdata = [];
        for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
        commentdata.push({
        date: date,
        frequency: tally[date]
        });
        }
        }
        console.log(commentdata);
        x.domain(commentdata.map(function (d) {
        return d.date;
        }));

        y.domain([0, d3.max(commentdata, function (d) {
        return d.frequency;
        })]);

        svgComment.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
        svgComment.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("NUmber of Comments");
        svgComment.append("text")
        .attr("x", width / 2 )
        .attr("y", -(margin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .text("Number of Comments for the Current Year");
        svgComment.selectAll(".bar")
        .data(commentdata)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
        return x(d.date);
        })
        .attr("width", x.rangeBand())
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
    });*/


    //var formatDate = d3.time.format("%m/%d/%Y %I:%M:%S %p");
    
    /*csv.forEach(function(line) {
    var parts = line.split(',');
    var datetime = formatDate.parse(parts[0]);
    var date = formatDate(datetime).split(' ')[0];
    tally[date] = (tally[date]||0) + 1;
    });*/

    var margin = {
    top: 30,
    right: 20,
    bottom: 30,
    left: 60
    },
    width = 400 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    var svg = d3.select("#commentsGraph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var csv = [
        '01/01/2017 09:38:14 AM,37.973424,-87.575423',
        '01/01/2017 09:48:27 PM,37.385218,-122.11413',
        '01/01/2017 10:17:34 AM,39.081712,-76.554603',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
    ];

    var formatDate = d3.time.format("%m/%d/%Y %I:%M:%S %p");

    var tally = {};
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    csv.forEach(function(line) {
        var parts = line.split(',');
        var datetime = formatDate.parse(parts[0]);
        var temp = formatDate(datetime).split(' ')[0];
        var temp = formatDate(datetime).split('/')[0];
        var num = parseInt(temp,10);
        num--;
        var date = months[num];
        tally[date] = (tally[date]||0) + 1;
    });

    var commentdata = [];

    for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
            commentdata.push({
                date: date,
                frequency: tally[date]
            });
        }
    }
    console.log(commentdata);
    x.domain(commentdata.map(function (d) {
        return d.date;
    }));
    y.domain([0, d3.max(commentdata, function (d) {
        return d.frequency;
    })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -50)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Number of Comments");

    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text("Number of Comments for the Current Year");

    svg.selectAll(".bar")
        .data(commentdata)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
        return x(d.date);
    })
        .attr("width", x.rangeBand())
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
    
    var svg2 = d3.select("#maxCommentsGraph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var csv = [
        '01/01/2017 09:38:14 AM,37.973424,-87.575423',
        '01/01/2017 09:48:27 PM,37.385218,-122.11413',
        '01/01/2017 10:17:34 AM,39.081712,-76.554603',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '01/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '02/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '03/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
        '04/02/2017 01:27:17 PM,40.216204,-74.619533',
    ];

    var formatDate = d3.time.format("%m/%d/%Y %I:%M:%S %p");

    var tally = {};
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    csv.forEach(function(line) {
        var parts = line.split(',');
        var datetime = formatDate.parse(parts[0]);
        var temp = formatDate(datetime).split(' ')[0];
        var temp = formatDate(datetime).split('/')[0];
        var num = parseInt(temp,10);
        num--;
        var date = months[num];
        tally[date] = (tally[date]||0) + 1;
    });

    var commentdata = [];

    for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
            commentdata.push({
                date: date,
                frequency: tally[date]
            });
        }
    }
    console.log(commentdata);
    x.domain(commentdata.map(function (d) {
        return d.date;
    }));
    y.domain([0, d3.max(commentdata, function (d) {
        return d.frequency;
    })]);

    svg2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg2.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -50)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Number of Comments");

    svg2.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text("Number of Comments for the Current Year");

    svg2.selectAll(".bar")
        .data(commentdata)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
        return x(d.date);
    })
        .attr("width", x.rangeBand())
        .attr("y", function (d) {
        return y(d.frequency);
    })
        .attr("height", function (d) {
        return height - y(d.frequency);
    });