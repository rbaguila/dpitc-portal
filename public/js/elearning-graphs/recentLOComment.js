    var recentMargin = {
    top: 30,
    right: 30,
    bottom: 50,
    left: 40
    },
    recentWidth = 250 - recentMargin.left - recentMargin.right,
    recentHeight = 200 - recentMargin.top - recentMargin.bottom;
    var recentx = d3.scaleBand()
          .range([0, recentWidth])
          .padding(0.1);
    var recenty = d3.scaleLinear()
          .range([recentHeight, 0])
    var recentxAxis = d3.axisBottom()
      .scale(recentx);
    var recentyAxis = d3.axisLeft()
      .scale(recenty);

    var recentSvgComment = d3.select("#recentCommentGraph").append("svg")
    .attr("width", recentWidth + recentMargin.left + recentMargin.right)
    .attr("height", recentHeight + recentMargin.top + recentMargin.bottom)
    .append("g")
    .attr("transform", "translate(" + recentMargin.left + "," + recentMargin.top + ")");
    var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    //TO DO
    //GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
    var currentYearRecentLOComment1= new Date().getFullYear();

    d3.json("/api/recentLOComments/" + currentYearRecentLOComment1 + "/0", function(error, json) {
        var tally = {};
        for(var a=0;a<months.length;a++){
            tally[months[a]] = 0;
        }
        for(var i=0;i<json.length;i++){
            var temp = d3.isoParse(json[i].dateCreated);//change this before deplyoning, use createdAt instead
            var temp2 = temp.getMonth();
            var date = months[temp2];
            tally[date] = (tally[date]||0) + 1;
        }
        var recentcommentdata = [];
        for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
        recentcommentdata.push({
        date: date,
        frequency: tally[date]
        });
        }
        }
        recentx.domain(recentcommentdata.map(function (d) {
        return d.date;
        }));

        recenty.domain([0, d3.max(recentcommentdata, function (d) {
        return d.frequency;
        })]);

        recentSvgComment.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + recentHeight + ")")
        .call(recentxAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
        recentSvgComment.append("g")
        .attr("class", "y axis")
        .call(recentyAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("NUmber of Comments");
        recentSvgComment.append("text")
        .attr("x", recentWidth / 2 )
        .attr("y", -(recentMargin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .style("font-size","12px")
        .text("Number of Comments");
        recentSvgComment.selectAll(".bar")
        .data(recentcommentdata)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
        return recentx(d.date);
        })
        .attr("width", recentx.bandwidth())
        .attr("y", function (d) {
        return recenty(d.frequency);
        })
        .attr("height", function (d) {
        return recentHeight - recenty(d.frequency);
        });
        function type(d) {
        d.frequency = +d.frequency;
        return d;
        }
    });

    var recentSvgComment2 = d3.select("#recentCommentGraph2").append("svg")
    .attr("width", recentWidth + recentMargin.left + recentMargin.right)
    .attr("height", recentHeight + recentMargin.top + recentMargin.bottom)
    .append("g")
    .attr("transform", "translate(" + recentMargin.left + "," + recentMargin.top + ")");
    var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    //TO DO
    //GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
    var currentYearRecentLOComment2= new Date().getFullYear();

    d3.json("/api/recentLOComments/" + currentYearRecentLOComment2 + "/1", function(error, json) {
        var tally = {};
        for(var a=0;a<months.length;a++){
            tally[months[a]] = 0;
        }
        for(var i=0;i<json.length;i++){
            var temp = d3.isoParse(json[i].dateCreated);//change this before deplyoning, use createdAt instead
            var temp2 = temp.getMonth();
            var date = months[temp2];
            tally[date] = (tally[date]||0) + 1;
        }
        var recentcommentdata2 = [];
        for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
        recentcommentdata2.push({
        date: date,
        frequency: tally[date]
        });
        }
        }
        recentx.domain(recentcommentdata2.map(function (d) {
        return d.date;
        }));

        recenty.domain([0, d3.max(recentcommentdata2, function (d) {
        return d.frequency;
        })]);

        recentSvgComment2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + recentHeight + ")")
        .call(recentxAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
        recentSvgComment2.append("g")
        .attr("class", "y axis")
        .call(recentyAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("NUmber of Comments");
        recentSvgComment2.append("text")
        .attr("x", recentWidth / 2 )
        .attr("y", -(recentMargin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .style("font-size","12px")
        .text("Number of Comments");
        recentSvgComment2.selectAll(".bar")
        .data(recentcommentdata2)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
        return recentx(d.date);
        })
        .attr("width", recentx.bandwidth())
        .attr("y", function (d) {
        return recenty(d.frequency);
        })
        .attr("height", function (d) {
        return recentHeight - recenty(d.frequency);
        });
        function type(d) {
        d.frequency = +d.frequency;
        return d;
        }
    });