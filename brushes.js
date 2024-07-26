let data = [], width = 600, height = 400, numPoints = 100;

let brush = d3.brush()
  .on('start brush', handleBrush);

let brushExtent;

function handleBrush(e) {
  brushExtent = e.selection;
  update();
}

function initBrush() {
  d3.select('svg g')
    .call(brush);
}

function updateData() {
  data = [];
  for(let i=0; i<numPoints; i++) {
    data.push({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height
    });
  }
}

function isInBrushExtent(d) {
  return brushExtent &&
    d.x >= brushExtent[0][0] &&
    d.x <= brushExtent[1][0] &&
    d.y >= brushExtent[0][1] &&
    d.y <= brushExtent[1][1];
}

function update() {
  d3.select('svg')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .attr('r', 4)
    .style('fill', function(d) {
      return isInBrushExtent(d) ? 'red' : null;
    });
}

var svg = d3.select("body")
    .append("svg")
    .attr("width", 800)
    .attr("height", 280)

var svg = d3.select("svg")
    .append("g")

initBrush();
updateData();
update();