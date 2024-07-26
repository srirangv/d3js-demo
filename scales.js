d3.schemePaired
//(12) ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928']
d=[1,2,3,4,5,6,7,8,9,10,11,12]
//(12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
chart=d3.select("body").attr("width", "400").attr("height", "400").append("svg")
//Un {_groups: Array(1), _parents: Array(1)}
let scl = d3.scaleLinear().range([0, 400]).domain([0, 12])
//undefined

let cols = d3.scaleOrdinal().domain([0,1,2,3,4,5,6,7,8,9,10,11]).range(d3.schemePaired)
//undefined
chart.selectAll("circle").data(d).enter().append("circle").attr("cx", d=>scl(d)).attr("cy", 100).attr("r", d=>d*5).attr("fill", d=>cols(d))
//Un {_groups: Array(1), _parents: Array(1)}
chart.selectAll("circle").attr("cx", d=>scl(d)*0.5)
//Un {_groups: Array(1), _parents: Array(1)}