d3.csv("https://kei-cs52.github.io/InfoVis2021/FinalTask/data.csv")
    .then( data => {
        data.forEach( d => { d.y = +d.value2; d.y2 = +d.value3; d.y3 = +d.value4;});
        var config = {
            parent: '#drawing_region',
            width: 1024,
            height: 256,
            margin: {top:25, right:10, bottom:50, left:50},
            title: 'Sample Data',
            xlabel: 'X label',
            ylabel: 'Y label'
        };
        const line_chart = new LineChart( config, data );
        line_chart.update();
    })
    .catch( error => {
        console.log( error );
    });

d3.csv("https://kei-cs52.github.io/InfoVis2021/FinalTask/data2.csv")
    .then( data => {
        data.forEach( d => { d.x = +d.x; d.y = +d.y; d.date =+d.date;});
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