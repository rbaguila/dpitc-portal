    var recentLOCommentMargin = {
    top: 30,
    right: 30,
    bottom: 50,
    left: 40
    },
    recentLOCommentWidth = 250 - recentLOCommentMargin.left - recentLOCommentMargin.right,
    recentLOCOmmentHeight = 200 - recentLOCommentMargin.top - recentLOCommentMargin.bottom;
    var recentLOCommentx = d3.scaleBand()
          .range([0, recentLOCommentWidth])
          .padding(0.1);
    var recentLOCommenty = d3.scaleLinear()
          .range([recentLOCOmmentHeight, 0])
    var recentLOCommentxAxis = d3.axisBottom()
      .scale(recentLOCommentx);
    var recentLOCommentyAxis = d3.axisLeft()
      .scale(recentLOCommenty);

    var recentSvgComment = d3.select("#recentCommentGraph").append("svg")
    .attr("width", recentLOCommentWidth + recentLOCommentMargin.left + recentLOCommentMargin.right)
    .attr("height", recentLOCOmmentHeight + recentLOCommentMargin.top + recentLOCommentMargin.bottom)
    .append("g")
    .attr("transform", "translate(" + recentLOCommentMargin.left + "," + recentLOCommentMargin.top + ")");
    var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    //TO DO
    //GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI

    d3.json("/api/recentLOComments/2017/0", function(error, json) {
        var tally = {};
        for(var a=0;a<months.length;a++){
            tally[months[a]] = 0;
        }
        for(var i=0;i<json.length;i++){
            var temp = d3.isoParse(json[i].dateCreated);
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
        recentLOCommentx.domain(recentcommentdata.map(function (d) {
        return d.date;
        }));

        recentLOCommenty.domain([0, d3.max(recentcommentdata, function (d) {
        return d.frequency;
        })]);

        recentSvgComment.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + recentLOCOmmentHeight + ")")
        .call(recentLOCommentxAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
        recentSvgComment.append("g")
        .attr("class", "y axis")
        .call(recentLOCommentyAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("NUmber of Comments");
        recentSvgComment.append("text")
        .attr("x", recentLOCommentWidth / 2 )
        .attr("y", -(recentLOCommentMargin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .style("font-size","12px")
        .text("Number of Comments");
        recentSvgComment.selectAll(".bar")
        .data(recentcommentdata)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
        return recentLOCommentx(d.date);
        })
        .attr("width", recentLOCommentx.bandwidth())
        .attr("y", function (d) {
        return recentLOCommenty(d.frequency);
        })
        .attr("height", function (d) {
        return recentLOCOmmentHeight - recentLOCommenty(d.frequency);
        });
        function type(d) {
        d.frequency = +d.frequency;
        return d;
        }
    });

    var recentSvgComment2 = d3.select("#recentCommentGraph2").append("svg")
    .attr("width", recentLOCommentWidth + recentLOCommentMargin.left + recentLOCommentMargin.right)
    .attr("height", recentLOCOmmentHeight + recentLOCommentMargin.top + recentLOCommentMargin.bottom)
    .append("g")
    .attr("transform", "translate(" + recentLOCommentMargin.left + "," + recentLOCommentMargin.top + ")");
    var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    //TO DO
    //GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI

    d3.json("/api/recentLOComments/2017/1", function(error, json) {
        var tally = {};
        for(var a=0;a<months.length;a++){
            tally[months[a]] = 0;
        }
        for(var i=0;i<json.length;i++){
            var temp = d3.isoParse(json[i].dateCreated);
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
        recentLOCommentx.domain(recentcommentdata2.map(function (d) {
        return d.date;
        }));

        recentLOCommenty.domain([0, d3.max(recentcommentdata2, function (d) {
        return d.frequency;
        })]);

        recentSvgComment2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + recentLOCOmmentHeight + ")")
        .call(recentLOCommentxAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
        recentSvgComment2.append("g")
        .attr("class", "y axis")
        .call(recentLOCommentyAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("NUmber of Comments");
        recentSvgComment2.append("text")
        .attr("x", recentLOCommentWidth / 2 )
        .attr("y", -(recentLOCommentMargin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .style("font-size","12px")
        .text("Number of Comments");
        recentSvgComment2.selectAll(".bar")
        .data(recentcommentdata2)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
        return recentLOCommentx(d.date);
        })
        .attr("width", recentLOCommentx.bandwidth())
        .attr("y", function (d) {
        return recentLOCommenty(d.frequency);
        })
        .attr("height", function (d) {
        return recentLOCOmmentHeight - recentLOCommenty(d.frequency);
        });
        function type(d) {
        d.frequency = +d.frequency;
        return d;
        }
    });