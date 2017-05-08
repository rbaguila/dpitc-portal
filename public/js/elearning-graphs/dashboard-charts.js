$(function () {
    $.ajax({
        method: 'GET',
        url: '/elearning/api/uservisits',
        success: function (data) {
            var allviewsdata = [];
            var allviewsmapdata = [];
            for(var i=0;i<data.length;i++){
                var temp = [];
                if(allviewsdata.length>0){
                    var temp2 = allviewsdata[allviewsdata.length-1][0];
                    if(temp2!=Date.parse(data[i].dateViewed)){
                        temp.push(Date.parse(data[i].dateViewed));
                        temp.push(1);
                        allviewsdata.push(temp);
                    }
                    else{
                        allviewsdata[allviewsdata.length-1][1]++;
                    }
                }
                else{
                    temp.push(Date.parse(data[i].dateViewed));
                    temp.push(1);
                    allviewsdata.push(temp);
                }
                if(allviewsmapdata.length>0){
                    var check = 0;
                    for(var j=0;j<allviewsmapdata.length;j++){
                        if(allviewsmapdata[j].code==data[i].country_code){
                            allviewsmapdata[j].z++;
                            check = 1;
                            break;
                        }
                    }
                    if(check==0){
                        var obj = {};
                        obj.code = data[i].country_code;
                        obj.z = 1;
                        allviewsmapdata.push(obj);
                    }
                }
                else{
                    var obj = {};
                    obj.code = data[i].country_code;
                    obj.z = 1;
                    allviewsmapdata.push(obj);
                }
            }
            generateWorldMapChart(allviewsmapdata);
            generateAreaChart(allviewsdata);
        }
    });
    
});

function generateWorldMapChart(allviewsmapdata) {
    // Correct UK to GB in data
    $.each(allviewsmapdata, function () {
        if (this.code === 'UK') {
            this.code = 'GB';
        }
    });

    Highcharts.mapChart('userVisitsWorld', {
        chart: {
            borderWidth: 1,
            map: 'custom/world'
        },

        title: {
            text: 'Demographics'
        },

        subtitle: {
            text: 'Page Visits in E-Learning DPITC'
        },

        legend: {
            enabled: false
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        series: [{
            name: 'Countries',
            color: '#E0E0E0',
            enableMouseTracking: false
        }, {
            type: 'mapbubble',
            name: 'Page Visits',
            joinBy: ['iso-a2', 'code'],
            data: allviewsmapdata,
            minSize: 4,
            maxSize: '12%',
            tooltip: {
                pointFormat: '{point.code}: {point.z}'
            }
        }]
    });
}

function generateAreaChart(allviewsdata){
    Highcharts.stockChart('allVisit', {
        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'E-Learning Visits'
        },

        series: [{
            name: 'User and Non-User Page Visits in All Years',
            data: allviewsdata,
            type: 'area',
            threshold: null,
            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            }
        }]
    });
}

$(function () {
    $.ajax({
        method: 'GET',
        url: '/elearning/api/uservisitsbyISP',
        success: function (data) {
            generateTreeMapChart(data);
        }
    });
    
});

function generateTreeMapChart(data){
    var points = [],
    ispP,
    ispVal,
    ispI = 0,
    sectorP,
    sectorI,
    infoP,
    infoI,
    isp,
    sector,
    info,
    infoName = {
        'Views': 'Views',
    };

    for (isp in data) {
        if (data.hasOwnProperty(isp)) {
            ispVal = 0;
            ispP = {
                id: 'id_' + ispI,
                name: isp,
                color: Highcharts.getOptions().colors[ispI]
            };
            sectorI = 0;
            for (sector in data[isp]) {
                if (data[isp].hasOwnProperty(sector)) {
                    sectorP = {
                        id: ispP.id + '_' + sectorI,
                        name: sector,
                        parent: ispP.id
                    };
                    points.push(sectorP);
                    infoI = 0;
                    for (info in data[isp][sector]) {
                        if (data[isp][sector].hasOwnProperty(info)) {
                            infoP = {
                                id: sectorP.id + '_' + infoI,
                                name: infoName[info],
                                parent: sectorP.id,
                                value: Math.round(+data[isp][sector][info])
                            };
                            ispVal += infoP.value;
                            points.push(infoP);
                            infoI = infoI + 1;
                        }
                    }
                    sectorI = sectorI + 1;
                }
            }
            ispP.value = Math.round(ispVal / sectorI);
            points.push(ispP);
            ispI = ispI + 1;
        }
    }
    Highcharts.chart('userViewByISP', {
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            allowDrillToNode: true,
            animationLimit: 1000,
            dataLabels: {
                enabled: false
            },
            levelIsConstant: false,
            levels: [{
                level: 1,
                dataLabels: {
                    enabled: true
                },
                borderWidth: 3
            }],
            data: points
        }],
        subtitle: {
            text: 'Click the sector to see the number of views per topic'
        },
        title: {
            text: 'Popular Topic by Sector'
        }
    });
}

$(function () {
    $.ajax({
        method: 'GET',
        url: '/elearning/api/reactionsbysector',
        success: function (data) {
            generateComboReactionChart(data);
        }
    });
});

function generateComboReactionChart(data){
    var sector = [];
    var sectorlike = [];
    var sectorhappy = [];
    var sectorsad = [];
    var sectorave = [];
    var totallike = 0;
    var totalhappy = 0;
    var totalsad = 0;
    for(var i=0;i<data.length;i++){
        sector.push(data[i].sector);
        sectorlike.push(data[i].likes);
        sectorhappy.push(data[i].happy);
        sectorsad.push(data[i].sad);
        sectorave.push(data[i].average);
        totallike+=data[i].likes;
        totalhappy+=data[i].happy;
        totalsad+=data[i].sad;
    }
    Highcharts.chart('allReactions', {
    title: {
        text: 'Reactions chart by sector'
    },
    xAxis: {
        categories: sector
    },
    labels: {
        items: [{
            html: 'Total Reactions',
            style: {
                left: '50px',
                top: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Like',
        data: sectorlike
    }, {
        type: 'column',
        name: 'Happy',
        data: sectorhappy
    }, {
        type: 'column',
        name: 'Sad',
        data: sectorsad
    }, {
        type: 'spline',
        name: 'Average',
        data: sectorave,
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total Reactions',
        data: [{
            name: 'Like',
            y: totallike,
            color: Highcharts.getOptions().colors[0] // Like's color
        }, {
            name: 'Happy',
            y: totalhappy,
            color: Highcharts.getOptions().colors[1] // Happy's color
        }, {
            name: 'Sad',
            y: totalsad,
            color: Highcharts.getOptions().colors[2] // Sad's color
        }],
        center: [100, 80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
    });
}

$(function () {
    $.ajax({
        method: 'GET',
        url: '/elearning/api/uservisitsbyRegion',
        success: function (data) {
            var finaldata = {};
            var nameISP = {};
            for(var i=0;i<data.length;i++){
                var obj = {};
                var max = -1;
                var maxISP = "";
                for(var j=0;j<data[i].isp.length;j++){
                    if(data[i].isp[j][1]>max){
                        maxISP = data[i].isp[j][0];
                        max = data[i].isp[j][1];
                    }
                    //console.log(data[i].city + ":" + data[i].isp[j][0] + data[i].isp[j][1]);
                }

                obj[maxISP] = max.toString();
                nameISP[maxISP] = maxISP;
                if(finaldata[data[i].region]==undefined){
                    finaldata[data[i].region] = {};
                }
                finaldata[data[i].region][data[i].city] = obj;
            }
            //console.log(finaldata);
            generateTreeMap2Chart(finaldata, nameISP);
        }
    });
});

function generateTreeMap2Chart(finaldata, nameISP){
    var points = [],
    ispP,
    ispVal,
    ispI = 0,
    sectorP,
    sectorI,
    infoP,
    infoI,
    isp,
    sector,
    info,
    infoName = nameISP;

    for (isp in finaldata) {
        if (finaldata.hasOwnProperty(isp)) {
            ispVal = 0;
            ispP = {
                id: 'id_' + ispI,
                name: isp,
                color: Highcharts.getOptions().colors[ispI]
            };
            sectorI = 0;
            for (sector in finaldata[isp]) {
                if (finaldata[isp].hasOwnProperty(sector)) {
                    sectorP = {
                        id: ispP.id + '_' + sectorI,
                        name: sector,
                        parent: ispP.id
                    };
                    points.push(sectorP);
                    infoI = 0;
                    for (info in finaldata[isp][sector]) {
                        if (finaldata[isp][sector].hasOwnProperty(info)) {
                            infoP = {
                                id: sectorP.id + '_' + infoI,
                                name: infoName[info],
                                parent: sectorP.id,
                                value: Math.round(+finaldata[isp][sector][info])
                            };
                            ispVal += infoP.value;
                            points.push(infoP);
                            infoI = infoI + 1;
                        }
                    }
                    sectorI = sectorI + 1;
                }
            }
            ispP.value = Math.round(ispVal / sectorI);
            points.push(ispP);
            ispI = ispI + 1;
        }
    }
    Highcharts.chart('popularperregion', {
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'strip',
            allowDrillToNode: true,
            animationLimit: 1000,
            dataLabels: {
                enabled: false
            },
            levelIsConstant: false,
            levels: [{
                level: 1,
                dataLabels: {
                    enabled: true
                },
                borderWidth: 3
            }],
            data: points
        }],
        subtitle: {
            text: 'Click the region to see the number of views per topic'
        },
        title: {
            text: 'Popular Topic by Region'
        }
    });
}

$(function () {
    $.ajax({
        method: 'GET',
        url: '/elearning/api/userVisitsRatio',
        success: function (data) {
            generateSemiPieChart(data);
        }
    });    
});

function generateSemiPieChart(data){
    Highcharts.chart('ratioVisit', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Ratio<br>of<br>Page Visits',
            align: 'center',
            verticalAlign: 'middle',
            y: 70
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -60,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Visit share',
            innerSize: '50%',
            data: data
        }]
    });
}