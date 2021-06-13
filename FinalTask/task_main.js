d3.csv("https://kei-cs52.github.io/InfoVis2021/FinalTask/data.csv")
    .then( data => {
        data.forEach( d => { d.y = +d.value2; d.y2 = +d.value3; d.y3 = +d.value4;});
        var config = {
            parent: '#drawing_region',
            width: 1024,
            height: 256,
            margin: {top:25, right:10, bottom:50, left:60},
            title: 'Sample Data',
            xlabel: 'X label',
            ylabel: 'Y label'
        };
        const line_chart = new LineChart( config, data );
        line_chart.update();
        d3.select('#sort1')
            .on('click', d => {
                d3.select('#drawing_region').selectAll("rect").remove();
                d3.select('#drawing_region').selectAll("text").remove();
                line_chart = new LineChart(config, data.sort(function(a,b)
                {return(b.y3/(b.y+1)-a.y3/(a.y+1));}));
                console.log(data)
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
            title: 'Sample Data',
            xlabel: 'X label',
            ylabel: 'Y label'
        };
        const scatter_plot = new ScatterPlot( config, data );
        scatter_plot.update();
    })
    .catch( error => {
        console.log( error );
    });
