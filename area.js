// create data
var data = [{x: 0, y: 20}, {x: 150, y: 150}, {x: 300, y: 100}, {x: 450, y: 20}, {x: 600, y: 130}]

var data2 = [{x: 0, y: 12}, {x: 150, y: 112}, {x: 300, y: 95}, {x: 450, y: 18}, {x: 600, y: 150}]

// create svg element:
var svg = d3.select("body").append("svg").attr("width", 800).attr("height", 200)

// prepare a helper function
var lineFunc = d3.line()
  .curve(d3.curveBasis)
  .x(function(d) { return d.x })
  .y(function(d) { return d.y })

var areaFunc = d3.area()
  .x(function(d) { return d.x })
  .y1(function(d) { return d.y })
  .y0(200)

  var areaFunc2 = d3.area()
  .x(function(d) { return d.x })
  .y1(function(d) { return d.y })
  .y0(200)

// Add the path using this helper function
svg.append('path')
  .attr('d', lineFunc(data))
  .attr('stroke', 'pink')
  .attr('fill', 'none');

svg.append('path')
  .attr('d', areaFunc2(data2))
  .attr('stroke', 'black')
  .attr('fill', '#99b332');

svg.append('path')
  .attr('d', areaFunc(data))
  .attr('stroke', 'black')
  .attr('fill', '#69b3a2');