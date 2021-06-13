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
        data.forEach(d => { d.x = +d.x; d.y = +d.y; });
        // 散布図の表示
        var width = 600; // グラフの幅
        var height = 400; // グラフの高さ
        var margin = { "top": 25, "bottom": 50, "right": 10, "left": 50 };

        var svg = d3.select("body")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height);
        g = svg.append("g")
               .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var xScale = d3.scaleLinear()
            .domain([d3.min(data, function(d) { return d.x; }), d3.max(data, function(d) { return d.x; })])
            .range([0, width - margin.right - margin.left]);
        
        var yScale = d3.scaleLinear()
            .domain([d3.min(data, function(d) { return d.y; }), d3.max(data, function(d) { return d.y; })])
            .range([height - margin.bottom - margin.top, 0]);

        var dot = g.append("g")
            .attr("fill-opacity", 0.5)
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return xScale(d.x) })
            .attr("cy", function (d) { return yScale(d.y) })
            .attr("r", 2);

        svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + (height - margin.bottom) + ")")
            .call(d3.axisBottom(xScale));

        svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(d3.axisLeft(yScale));

        // brushの設定
        var brush = d3.brush()
            .extent([
                [0, 0],
                [width - margin.left - margin.right, height - margin.top - margin.bottom]
            ])
            .on("start brush", brushed);

        g.append("g")
            .call(brush)
            .call(brush.move, [
                [xScale(2), yScale(0.8)],
                [xScale(5), yScale(0.3)]
            ]);

        function brushed() {
            var x0 = xScale.invert(d3.event.selection[0][0]);
            var y1 = yScale.invert(d3.event.selection[0][1]);
            var x1 = xScale.invert(d3.event.selection[1][0]);
            var y0 = yScale.invert(d3.event.selection[1][1]);
            dot.classed("selected",
                function (d) {
                    return (x0 <= d[0] && d[0] <= x1) && (y0 <= d[1] && d[1] <= y1);
                }
            );
        }
    })
    .catch(error => {
        console.log(error);
    });