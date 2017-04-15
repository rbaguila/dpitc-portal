
    var svgView = d3.select("#viewsGraph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    //TO DO
    //GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
    var currentYearLOView= new Date().getFullYear();

    d3.json("/api/LOViews/" + currentYearLOView, function(error, json) {
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
        var viewdata = [];

        for (var date in tally) {
            if (tally.hasOwnProperty(date)) {
                viewdata.push({
                    date: date,
                    frequency: tally[date]
                });
            }
        }

        x.domain(viewdata.map(function (d) {
            return d.date;
        }));

        y.domain([0, d3.max(viewdata, function (d) {
            return d.frequency;
        })]);

        svgView.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-90)" );
        svgView.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("NUmber of Comments");
        svgView.append("text")
            .attr("x", width / 2 )
            .attr("y", -(margin.top / 2 ))
            .attr("class", "title")
            .style("text-anchor", "middle")
            .text("Total Number of Comments for the Current Year");
        svgView.selectAll(".bar")
            .data(viewdata)
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