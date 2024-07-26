console.log(`2 + 3 = ${2 + 3}`)

console.log(typeof "hello")

async function test() {
    return 1
}

console.log(test) //async func
console.log(test()) //promise
console.log(async () => { let ans = test(); return await ans; })
test().then(console.log)

let car = {
    make: "Honda",
    year: 2022,
    price: 28000,
    model: "Firo"
};

const { make, year, price, model } = car
console.log(`${make} ${model} of ${year} with $${price}`)

/*
d3.select("body")
    .append("svg")
    .attr("width", 400)
    .attr("height", 150)
    .append("circle")
        .attr("cx", 25)
        .attr("cy", 25)
        .attr("r", 25)
        .style("fill", "purple")
*/

let data = [1, 2, 3, 4, 5]

let chart = d3.select("body")
    .append("svg")
    .attr("width", 800)
    .attr("height", 280)

function update(rects) {

    var enterRects = rects.enter()
        .append("rect")
        .attr("x", 100)
        .attr("y", (d, i) => i * 50)
        .attr("width", d => 100 * d)
        .attr("height", 48)
        .style("fill", "purple")

    rects.exit()
        .transition() // NEW
        .duration(100) // Also NEW
        .attr('width', 50)
        .remove()

    rects.merge(enterRects)
        .transition() // NEW
        .duration(100) // Also NEW
        .attr('width', d => 100 * d);
}

var x = d3.scaleLinear()
  .domain([0, 6]) // $0 to $80
  .range([0, 600]); 

// x is the d3.scaleTime()
var xAxis = d3.axisBottom(x)
  .ticks(6); // specify the number of ticks         // let the axis do its thing

var rects = chart.selectAll("rect")
    .data(data)
update(rects)

var labels = ["green", "purple", "blue", "gray", "cyan"]
    
  // ordinal scale for our data
var y = d3.scalePoint()
    .domain(labels)
    .range([250,0])
  
var yAxis = d3.axisLeft(y)
    .ticks(5)

chart.append("g")
    .attr("transform", "translate(98, 0)")
    .call(yAxis)

chart.append('g')            // create a <g> e
    .attr("transform", "translate(100, 250)")
    .call(xAxis);   

setTimeout(() => {
    // change elements altogether
    shuffle(data)
    rects = chart.selectAll("rect")
        .data(data)
    update(rects)
    // or re order existing nodes
    //rearrange()
}, 500)

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// on a button click, you can sort
function rearrange() {
    d3.select("svg")
      .selectAll("rect")
      .sort((a,b) => d3.ascending(a, b))
      .attr("y", (d, i) => i * 50);
}