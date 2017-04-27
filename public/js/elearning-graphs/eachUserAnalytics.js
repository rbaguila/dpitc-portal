
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

var id = GetURLParameter('id');
    
var margin = {
    top: 50,
    right: 20,
    bottom: 70,
    left: 40
    },
    width = 470 - margin.left - margin.right,
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

var svgUserView = d3.select("#userViewsGraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var months = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

//TO DO
//GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
var currentYearEachUserView= new Date().getFullYear();

d3.json("/api/userviews/"+ id + "/" + currentYearEachUserView, function(error, json) {
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

    svgUserView.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
    svgUserView.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Number of Views");
    svgUserView.append("text")
        .attr("x", width / 2 )
        .attr("y", -(margin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .text("Number of Learning Objects Viewed for the Current Year");
    svgUserView.selectAll(".bar")
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

var svgUserComment = d3.select("#userCommentsGraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//TO DO
//GET THE CURRENT YEAR OR BASE SA GUSTO OR NAKALAGAY SA UI
var currentYearEachUserComment= new Date().getFullYear();

d3.json("/api/usercomments/"+ id + "/" + currentYearEachUserComment, function(error, json) {

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

    svgUserComment.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );
    svgUserComment.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Number of Comments");
    svgUserComment.append("text")
        .attr("x", width / 2 )
        .attr("y", -(margin.top / 2 ))
        .attr("class", "title")
        .style("text-anchor", "middle")
        .text("Number of Comments for the Current Year");
    svgUserComment.selectAll(".bar")
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