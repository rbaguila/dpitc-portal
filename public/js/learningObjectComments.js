var margin = {
    top: 30,
    right: 20,
    bottom: 30,
    left: 40
    },
    width = 500 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;
    var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
    var y = d3.scaleLinear()
          .range([height, 0])
    var xAxis = d3.axisBottom()
      .scale(x);
    var yAxis = d3.axisLeft()
      .scale(y);
    var svgComment = d3.select("#commentsGraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    d3.json("/api/LOComments/2017", function(error, json) {
        var tally = {};
        for(var i=0;i<json.length;i++){
            var temp = d3.isoParse(json[i].dateCreated);
            var temp2 = temp.getMonth();
            var date = months[temp2];
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