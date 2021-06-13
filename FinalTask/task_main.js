d3.csv("https://kei-cs52.github.io/InfoVis2021/FinalTask/data3.csv")
    .then( data => {
        data.forEach( d => { d.x = +d.index; d.y = +d.value2; d.y2 = +d.value3; d.y3 = +d.value4; d.s1 = +d.s1; d.s2 = +d.s2; d.s3 = +d.s3;});
        var config = {
            parent: '#drawing_region',
            width: 1024,
            height: 256,
            margin: {top:25, right:10, bottom:50, left:60},
            title: 'Line Graph of COVID-19 Infection',
            xlabel: 'date',
            ylabel: 'number'
        };
        var line_chart = new LineChart( config, data );
        line_chart.update();

        d3.select('#sort1')
            .on('click', d => {
                d3.select('#drawing_region').selectAll("circle").remove();
                d3.select('#drawing_region').selectAll("path").remove();
                d3.select('#drawing_region').selectAll("text").remove();
                data = data.sort(function(a,b){return(b.s1-a.s1);});
                Object.keys(data).forEach(function (key) {
                    data[key].x = key;
                });
                line_chart = new LineChart(config, data);

                
                line_chart.update();
            });

        d3.select('#sort2')
            .on('click', d => {
                d3.select('#drawing_region').selectAll("circle").remove();
                d3.select('#drawing_region').selectAll("path").remove();
                d3.select('#drawing_region').selectAll("text").remove();
                data = data.sort(function(a,b){return(b.s2-a.s2);});
                Object.keys(data).forEach(function (key) {
                    data[key].x = key;
                });
                line_chart = new LineChart(config, data);

                
                line_chart.update();
            });

        d3.select('#sort3')
            .on('click', d => {
                d3.select('#drawing_region').selectAll("circle").remove();
                d3.select('#drawing_region').selectAll("path").remove();
                d3.select('#drawing_region').selectAll("text").remove();
                data = data.sort(function(a,b){return(b.s3-a.s3);});
                Object.keys(data).forEach(function (key) {
                    data[key].x = key;
                });
                line_chart = new LineChart(config, data);

                
                line_chart.update();
            });
        
    })
    .catch( error => {
        console.log( error );
    });

d3.csv("https://kei-cs52.github.io/InfoVis2021/FinalTask/data2.csv")
    .then( data => {
        data.forEach( d => { d.x = +d.x; d.y = +d.y;});
        var config = {
            parent: '#drawing_region2',
            width: 400,
            height: 400,
            margin: {top:25, right:10, bottom:50, left:50},
            title: 'umap result',
            xlabel: '',
            ylabel: ''
        };
        const scatter_plot = new ScatterPlot( config, data );
        scatter_plot.update();
    })
    .catch( error => {
        console.log( error );
    });
