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

document.getElementById('indexSelect').addEventListener('change', function() {
    currentIndex = parseInt(this.value);
    updateIcicleDiagram(currentData, currentIndex);
});

function updateIcicleDiagram(data, index) {
  // Clear the existing SVG content
  d3.select('svg').remove();

  const width = 800;
  const height = 600;

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
      .attr('y', d => d.x0) // Swap x and y
      .attr('x', d => d.y0) // Swap x and y
      .attr('height', d => d.x1 - d.x0)
      .attr('width', d => d.y1 - d.y0)
      .attr('fill', (d, i) => color(i)); // Use the index as the color

  // Create legend
  const legend = svg.selectAll('.legend')
      .data(color.domain())
      .enter().append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => 'translate(0,' + (i * 20 + 320) + ')');


  // Draw legend colored rectangles
  legend.append('rect')
      .attr('x', width - 18)
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', color);

  // Draw legend text
  legend.append('text')
      .attr('x', width - 24)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .text((d, i) => {
          switch (i) {
              case 0: return 'Normalized Above Ground Current';
              case 1: return 'Normalized Above Ground Potential';
              case 2: return 'Normalized Below Ground Current';
              case 3: return 'Normalized Below Ground Potential';
              case 4: return 'Potential Total';
              case 5: return 'Potential Above Ground';
              case 6: return 'Potential Below Ground';
              case 7: return 'Current Total';
              case 8: return 'Current Above Ground';
              case 9: return 'Current Below Ground';
              default: return '';
          }
      });
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
