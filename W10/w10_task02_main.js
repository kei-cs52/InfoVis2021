d3.csv("https://kei-cs52.github.io/InfoVis2021/W10/w10_task01.csv")
    .then( data => {
        data.forEach( d => { d.label = +d.label; d.value1 = +d.value; });
    })
    .catch( error => {
        console.log( error );
    });

d3.csv("https://kei-cs52.github.io/InfoVis2021/W10/w10_task02.csv")
    .then( data => {
        data.forEach( d => {d.value2 = +d.value; });

        var config = {
            parent: '#drawing_region',
            width: 256,
            height: 256,
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