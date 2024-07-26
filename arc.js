var svg = d3.select("body")
    .append("svg")
    .attr("width", 800)
    .attr("height", 800)

function arced(d, i) {
    return d3.arc()
    .innerRadius( 100 )
    .outerRadius( 150 )
    .startAngle( i * d * 3.14 / 3 )     // It's in radian, so Pi = 3.14 = bottom.
    .endAngle( (i + 1) * d * 3.14 / 3 )() 
}

var data = [1, 2, 3]
// add an arc
var paths = svg
    .selectAll("path")
    .data(data)

  paths.enter()
    .append("path")
    .attr("transform", "translate(400,200)")
    .attr("d", arced)
    .attr('stroke', 'black')
    .attr('fill', '#69b3a2')