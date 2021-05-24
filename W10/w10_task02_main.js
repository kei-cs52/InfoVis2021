d3.csv("https://kei-cs52.github.io/InfoVis2021/W10/w10_task02_data.csv")
    .then( data => {
        data.forEach( d => {d.x = +d.x; d.y = +d.y;});

        var config = {
            parent: '#drawing_region',
            width: 512,
            height: 512,
            margin: {top:25, right:10, bottom:50, left:60},
            title: 'Sample Data',
            xlabel: 'X label',
            ylabel: 'Y label'
        };
        console.log(data);

        const scatter_plot = new ScatterPlot( config, data );
        scatter_plot.update();
    })
    .catch( error => {
        console.log( error );
    });