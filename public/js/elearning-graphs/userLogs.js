    var margin = {
    top: 50,
    right: 20,
    bottom: 70,
    left: 40
    },
    width = 430 - margin.left - margin.right,
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
    var svgLog = d3.select("#logsGraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    //TO DO
    //GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
    var currentYearLOComment= new Date().getFullYear();

    d3.json("/api/userlogs/" + currentYearLOComment, function(error, json) {
        var tally = {};
        for(var a=0;a<months.length;a++){
            tally[months[a]] = 0;
        }

        for(var i=0;i<json.length;i++){
            var temp = d3.isoParse(json[i].dateLoggedIn);//change this before deplyoning, use createdAt instead
            var temp2 = temp.getMonth();
            var date = months[temp2];
            tally[date] = (tally[date]||0) + 1;
        }
        var logdata = [];
        for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
        logdata.push({
        date: date,
        frequency: tally[date]
        });
        }
        }
        x.domain(logdata.map(function (d) {
        return d.date;
        }));

        y.domain([0, d3.max(logdata, function (d) {
        return d.frequency;
        })]);

        svgLog.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
        svgLog.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Number of User Log In");
        svgLog.append("text")
        .attr("x", width / 2 )
        .attr("y", -(margin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .text("Number of User Log In for the Current Year");
        svgLog.selectAll(".bar")
        .data(logdata)
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