d3.csv("https://kei-cs52.github.io/InfoVis2021/W10/w10_task01_data.csv")
    .then( data => {
        data.forEach( d => { d.value = +d.value; });

        var config = {
            parent: '#drawing_region',
            width: 800,
            height: 4000,
            margin: {top:25, right:10, bottom:50, left:100},
            title: 'Daily change in the number of critically ill patients with COVID-19 infection',
            xlabel: 'Patients',
            ylabel: 'Date'
        };

        var bar_chart = new BarChart(config, data);
        bar_chart.update();

        d3.select('#reverse')
            .on('click', d => {
                d3.select('#drawing_region').selectAll("rect").remove();
                d3.select('#drawing_region').selectAll("text").remove();
                bar_chart = new BarChart(config, data.reverse());
                bar_chart.update();
            });

        d3.select('#descend')
            .on('click', d => {
                d3.select('#drawing_region').selectAll("rect").remove();
                d3.select('#drawing_region').selectAll("text").remove();
                bar_chart = new BarChart(config, data.sort(function(a,b)
                {return(b.value-a.value);}));
                bar_chart.update();
            });

        d3.select('#ascend')
            .on('click', d => {
                d3.select('#drawing_region').selectAll("rect").remove();
                d3.select('#drawing_region').selectAll("text").remove();
                bar_chart = new BarChart(config, data.sort(function(a,b)
                {return(a.value-b.value);}));
                bar_chart.update();
            });
    })
    .catch( error => {
        console.log( error );
    });

    function compareFunc(a, b) {
        return a - b;
      }


