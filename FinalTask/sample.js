  // 2. 散布図の表示
  var width = 800; // グラフの幅
  var height = 600; // グラフの高さ
  var margin = { "top": 30, "bottom": 30, "right": 30, "left": 30 };
 
  var randomX = d3.randomUniform(0.5, 10);
  var randomY = d3.randomNormal(0.5, 0.12);
  var data = d3.range(500).map(function() { return [randomX(), randomY()]; });
  console.log(data)
  var svg = d3.select("body").append("svg").attr("width", width).attr("height", height);
  g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
  var xScale = d3.scaleLinear()
    .domain([0, 10])
    .range([0, width - margin.right - margin.left]);
 
  var yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([height - margin.bottom - margin.top, 0]);
 
  var dot = g.append("g")
    .attr("fill-opacity", 0.2)
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d) { return xScale(d[0]) })
    .attr("cy", function(d) { return yScale(d[1]) })
    .attr("r", 5);
 
  svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + (height - margin.bottom) + ")")
    .call(d3.axisBottom(xScale));
 
  svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(d3.axisLeft(yScale));
 
  // 3. brushの設定
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
      function(d) {
        return(x0 <= d[0] && d[0] <= x1) && (y0 <= d[1] && d[1] <= y1);
      }
    );
  }