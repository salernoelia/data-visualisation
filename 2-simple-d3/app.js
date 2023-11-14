let jsonData; // Global variable to store the fetched data

async function fetchData() {
  try {
    const response = await fetch('../data.json');
    jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error loading JSON file:', error);
    throw error;
  }
}

// Call the function and use the data
fetchData()
  .then(data => {

    // Extracting data from the JSON file
const habitatData = jsonData
.filter(item => item.Above_ground_potential_storage >= 100)
.map(item => ({
  habitat: item.Habitat_name,
  potentialStorage: Math.round(item.Above_ground_potential_storage / 1e6), // Convert to millions and round
  currentStorage: Math.round(item.Above_ground_current_storage / 1e6) // Convert to millions and round
}));

// Grouping data by habitat and summing the storage values
const groupedData = Array.from(d3.group(habitatData, d => d.habitat), ([key, value]) => ({
habitat: key,
totalPotentialStorage: d3.sum(value, d => d.potentialStorage),
totalCurrentStorage: d3.sum(value, d => d.currentStorage),
}));

// Set up a color scale
const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

// Set up the SVG dimensions and margins
const margin = { top: 20, right: 20, bottom: 30, left: 100 };
const width = 1200 - margin.left - margin.right;
const height = 800 - margin.top - margin.bottom;

// Create the SVG element
const svg = d3.select('body').append('svg')
.attr('width', width + margin.left + margin.right)
.attr('height', height + margin.top + margin.bottom)
.append('g')
.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  
    

// Set up the scales for x and y axes
const xScale = d3.scaleBand()
.domain(groupedData.map(d => d.habitat))
.range([0, width])
.padding(0.1);

const yScale = d3.scaleLinear()
.domain([0, d3.max(groupedData, d => Math.max(d.totalPotentialStorage, d.totalCurrentStorage))])
.range([height, 0]);

// Create the x-axis
svg.append('g')
.attr('transform', 'translate(0,' + height + ')')
.call(d3.axisBottom(xScale));

// Create the y-axis
svg.append('g')
.call(d3.axisLeft(yScale));

// Create the bars
svg.selectAll('.bar-group')
.data(groupedData)
.enter().append('g')
.attr('class', 'bar-group')
.attr('transform', d => `translate(${xScale(d.habitat)}, 0)`)
.selectAll('.bar')
.data(d => [
  { type: 'current', value: d.totalCurrentStorage },
  { type: 'potential', value: d.totalPotentialStorage }
])
.enter().append('rect')
.attr('class', d => `bar ${d.type}`)
.attr('x', (d, i) => i * (xScale.bandwidth() / 2)) // Adjust x position for side-by-side bars
.attr('y', height)
.attr('width', xScale.bandwidth() / 2)
.attr('height', 0)
.attr('fill', d => colorScale(d.type))
.transition()
.duration(1000)
.attr('y', d => yScale(d.value))
.attr('height', d => height - yScale(d.value));

// Optional: Add labels to the bars
svg.selectAll('.bar-label')
  .data(groupedData)
  .enter().append('text')
  .attr('class', 'bar-label')
  .attr('x', d => xScale(d.habitat) + xScale.bandwidth() / 2)
  .attr('y', d => yScale(d.totalPotentialStorage) - 5)
  .attr('text-anchor', 'middle')
  .attr('font-family', 'Arial')
  .attr('font-size', '12px')
  .text(d => ` ${d.totalCurrentStorage} Gt, ${d.totalPotentialStorage} Gt`);


  })
  .catch(error => {
    console.error('Error:', error);
  });