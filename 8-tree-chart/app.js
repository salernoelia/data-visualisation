let jsonData;

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

// Assume your initial data is stored in a variable called 'initialData'
let currentData;
let currentIndex = 3; // Default index

fetchData().then(data => {
    currentData = data;
    updateIcicleDiagram(currentData, currentIndex);
});

document.getElementById('indexSelect').addEventListener('change', function () {
    currentIndex = parseInt(this.value);
    updateIcicleDiagram(currentData, currentIndex);
});

function updateIcicleDiagram(data, index) {
    // Clear the existing SVG content
    d3.select('svg').remove();

    const width = 800;
    const height = 1300;

    // Select the HTML element to append the chart to
    const svg = d3.select('body').append('svg')
        .attr('width', width)
        .attr('height', height);

    // Prepare the data based on the selected index
    const root = d3.hierarchy({ children: data })
        .sum(d => parseFloat(getValueByIndex(d, index)))
        .sort((a, b) => b.value - a.value); // Sort nodes by value

    // Create a partition layout
    const partition = d3.partition()
        .size([height / 2, width]) // Split into two columns
        .padding(1)
        .round(true);

    // Compute the layout
    const nodes = partition(root).descendants();

    // Create a categorical color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Draw rectangles
    svg.selectAll('rect')
        .data(nodes)
        .enter().append('rect')
        .attr('y', d => d.x0)
        .attr('x', d => d.y0)
        .attr('height', d => d.x1 - d.x0)
        .attr('width', d => d.y1 - d.y0)
        .attr('fill', (d, i) => color(i))
        .transition()
        .duration(1000)
        .delay((d, i) => i * 10)
        .attr('y', d => d.x0)
        .attr('x', d => d.y0)
        .attr('height', d => d.x1 - d.x0)
        .attr('width', d => d.y1 - d.y0)
        .attr('fill', (d, i) => color(i));

    // Create legend
    const legend = svg.selectAll('.legend')
        .data(nodes)
        .enter().append('g')
        .attr('class', 'legend')
        .attr('transform', (d, i) => 'translate(0,' + (i * 20 + 900) + ')');

    // Draw legend colored rectangles
    legend.append('rect')
        .attr('x', width - 18)
        .attr('width', 18)
        .attr('height', 18)
        .style('fill', (d, i) => color(i));

    // Draw legend text dynamically based on habitat names
    legend.append('text')
        .attr('x', width - 24)
        .attr('y', 9)
        .attr('dy', '.35em')
        .style('text-anchor', 'end')
        .text(d => d.data.Habitat_name); // Display Habitat_name dynamically

        console.log(svg.node().outerHTML);
}


function getValueByIndex(dataPoint, index) {
  switch (index) {
      case 0: return parseFloat(dataPoint.Normalized_above_ground_current_storage);
      case 1: return parseFloat(dataPoint.Normalized_above_ground_potential_storage);
      case 2: return parseFloat(dataPoint.Normalized_Below_ground_current_storage);
      case 3: return parseFloat(dataPoint.Normalized_Below_ground_potential_storage);
      case 4: // Potential Total
          return parseFloat(dataPoint.Above_ground_potential_storage) + parseFloat(dataPoint.Below_ground_potential_storage);
      case 5: // Potential Above
          return parseFloat(dataPoint.Above_ground_potential_storage);
      case 6: // Potential Below
          return parseFloat(dataPoint.Below_ground_potential_storage);
      case 7: // Current Total
          return parseFloat(dataPoint.Above_ground_current_storage) + parseFloat(dataPoint.Below_ground_current_storage);
      case 8: // Current Above
          return parseFloat(dataPoint.Above_ground_current_storage);
      case 9: // Current Below
          return parseFloat(dataPoint.Below_ground_current_storage);
      default: return 0;
  }
}
