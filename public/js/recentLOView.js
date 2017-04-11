
    var recentSvgView = d3.select("#recentViewGraph").append("svg")
    .attr("width", recentWidth + recentMargin.left + recentMargin.right)
    .attr("height", recentHeight + recentMargin.top + recentMargin.bottom)
    .append("g")
    .attr("transform", "translate(" + recentMargin.left + "," + recentMargin.top + ")");
    var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    //TO DO
    //GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
    var currentYearRecentLOView1= new Date().getFullYear();

    d3.json("/api/recentLOViews/" + currentYearRecentLOView1 + "/0", function(error, json) {
        var tally = {};
        for(var a=0;a<months.length;a++){
            tally[months[a]] = 0;
        }
        for(var i=0;i<json.length;i++){
            var temp = d3.isoParse(json[i].dateViewed);//change this before deplyoning, use createdAt instead
            var temp2 = temp.getMonth();
            var date = months[temp2];
            tally[date] = (tally[date]||0) + 1;
        }
        var recentviewdata = [];
        for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
        recentviewdata.push({
        date: date,
        frequency: tally[date]
        });
        }
        }
        recentx.domain(recentviewdata.map(function (d) {
        return d.date;
        }));

        recenty.domain([0, d3.max(recentviewdata, function (d) {
        return d.frequency;
        })]);

        recentSvgView.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + recentHeight + ")")
        .call(recentxAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
        recentSvgView.append("g")
        .attr("class", "y axis")
        .call(recentyAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("NUmber of Comments");
        recentSvgView.append("text")
        .attr("x", recentWidth / 2 )
        .attr("y", -(recentMargin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .style("font-size","12px")
        .text("Number of Comments");
        recentSvgView.selectAll(".bar")
        .data(recentviewdata)
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

    var recentSvgView2 = d3.select("#recentViewGraph2").append("svg")
    .attr("width", recentWidth + recentMargin.left + recentMargin.right)
    .attr("height", recentHeight + recentMargin.top + recentMargin.bottom)
    .append("g")
    .attr("transform", "translate(" + recentMargin.left + "," + recentMargin.top + ")");
    var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    //TO DO
    //GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
    var currentYearRecentLOView2= new Date().getFullYear();

    d3.json("/api/recentLOViews/" + currentYearRecentLOView2 + "/1", function(error, json) {
        var tally = {};
        for(var a=0;a<months.length;a++){
            tally[months[a]] = 0;
        }
        for(var i=0;i<json.length;i++){
            var temp = d3.isoParse(json[i].dateViewed);//change this before deplyoning, use createdAt instead
            var temp2 = temp.getMonth();
            var date = months[temp2];
            tally[date] = (tally[date]||0) + 1;
        }
        var recentviewdata2 = [];
        for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
        recentviewdata2.push({
        date: date,
        frequency: tally[date]
        });
        }
        }
        recentx.domain(recentviewdata2.map(function (d) {
        return d.date;
        }));

        recenty.domain([0, d3.max(recentviewdata2, function (d) {
        return d.frequency;
        })]);

        recentSvgView2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + recentHeight + ")")
        .call(recentxAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
        recentSvgView2.append("g")
        .attr("class", "y axis")
        .call(recentyAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("NUmber of Comments");
        recentSvgView2.append("text")
        .attr("x", recentWidth / 2 )
        .attr("y", -(recentMargin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .style("font-size","12px")
        .text("Number of Comments");
        recentSvgView2.selectAll(".bar")
        .data(recentviewdata2)
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