    var commentviewmargin = {
    top: 30,
    right: 30,
    bottom: 50,
    left: 40
    },
    commentviewwidth = 300 - commentviewmargin.left - commentviewmargin.right,
    commmentviewheight = 280 - commentviewmargin.top - commentviewmargin.bottom;
    var commentviewx = d3.scaleBand()
          .range([0, commentviewwidth])
          .padding(0.1);
    var commentviewy = d3.scaleLinear()
          .range([commmentviewheight, 0])
    var commentviewxAxis = d3.axisBottom()
      .scale(commentviewx);
    var commentviewyAxis = d3.axisLeft()
      .scale(commentviewy);

    var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    var svgComment = d3.select("#commentsGraph").append("svg")
    .attr("width", commentviewwidth + commentviewmargin.left + commentviewmargin.right)
    .attr("height", commmentviewheight + commentviewmargin.top + commentviewmargin.bottom)
    .append("g")
    .attr("transform", "translate(" + commentviewmargin.left + "," + commentviewmargin.top + ")");

    //TO DO
    //GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
    var currentYear= new Date().getFullYear();

    d3.json("/api/LOComments/" + currentYear, function(error, json) {
        var tally = {};
        for(var a=0;a<months.length;a++){
            tally[months[a]] = 0;
        }
        for(var i=0;i<json.length;i++){
            var temp = d3.isoParse(json[i].publishedAt);//change this before deplyoning, use createdAt instead
            var temp2 = temp.getMonth();
            var date = months[temp2];
            tally[date] = (tally[date]||0) + 1;
        }
        var commentData = [];
        for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
        commentData.push({
        date: date,
        frequency: tally[date]
        });
        }
        }
        commentviewx.domain(commentData.map(function (d) {
        return d.date;
        }));

        commentviewy.domain([0, d3.max(commentData, function (d) {
        return d.frequency;
        })]);

        svgComment.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + commmentviewheight + ")")
        .call(commentviewxAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
        svgComment.append("g")
        .attr("class", "y axis")
        .call(commentviewyAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("NUmber of Comments");
        svgComment.append("text")
        .attr("x", commentviewwidth / 2 )
        .attr("y", -(commentviewmargin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .style("font-size","12px")
        .text("Total Number of Comments");
        svgComment.selectAll(".bar")
        .data(commentData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
        return commentviewx(d.date);
        })
        .attr("width", commentviewx.bandwidth())
        .attr("y", function (d) {
        return commentviewy(d.frequency);
        })
        .attr("height", function (d) {
        return commmentviewheight - commentviewy(d.frequency);
        });
        function type(d) {
        d.frequency = +d.frequency;
        return d;
        }
    });

    var svgView = d3.select("#viewsGraph").append("svg")
    .attr("width", commentviewwidth + commentviewmargin.left + commentviewmargin.right)
    .attr("height", commmentviewheight + commentviewmargin.top + commentviewmargin.bottom)
    .append("g")
    .attr("transform", "translate(" + commentviewmargin.left + "," + commentviewmargin.top + ")");

    //TO DO
    //GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
    var currentYear= new Date().getFullYear();

    d3.json("/api/LOViews/" + currentYear, function(error, json) {
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
        var viewData = [];
        for (var date in tally) {
        if (tally.hasOwnProperty(date)) {
        viewData.push({
        date: date,
        frequency: tally[date]
        });
        }
        }
        commentviewx.domain(viewData.map(function (d) {
        return d.date;
        }));

        commentviewy.domain([0, d3.max(viewData, function (d) {
        return d.frequency;
        })]);

        svgView.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + commmentviewheight + ")")
        .call(commentviewxAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
        svgView.append("g")
        .attr("class", "y axis")
        .call(commentviewyAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("NUmber of Views");
        svgView.append("text")
        .attr("x", commentviewwidth / 2 )
        .attr("y", -(commentviewmargin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .style("font-size","12px")
        .text("Total Number of Views");
        svgView.selectAll(".bar")
        .data(viewData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
        return commentviewx(d.date);
        })
        .attr("width", commentviewx.bandwidth())
        .attr("y", function (d) {
        return commentviewy(d.frequency);
        })
        .attr("height", function (d) {
        return commmentviewheight - commentviewy(d.frequency);
        });
        function type(d) {
        d.frequency = +d.frequency;
        return d;
        }
    });