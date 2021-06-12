d3.csv("https://kei-cs52.github.io/InfoVis2021/FinalTask/data.csv")
    .then( data => {
        data.forEach( d => { d.y = +d.value2; d.y2 = +d.value3; d.y3 = +d.value4;});
        var config = {
            parent: '#drawing_region',
            width: 2048,
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

