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

    //Extracting data from json file
    const habitatData = jsonData
    .filter(item => item.Above_ground_potential_storage >= 100)
      .map(item => ({
        
        habitat: item.Habitat_name,
        storage: Math.round(item.Above_ground_potential_storage / 1e6) // Convert to millions and round
      }));

    // Grouping data by habitat and summing the storage values
    const groupedData = Array.from(d3.group(habitatData, d => d.habitat), ([key, value]) => ({
      habitat: key,
      totalStorage: d3.sum(value, d => d.storage)
    }));

    // Set up a color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    // Set up the SVG dimensions and margins
    const margin = { top: 20, right: 20, bottom: 30, left: 100 };
    const width = 1200 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

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
      .domain([0, d3.max(groupedData, d => d.totalStorage)])
      .range([height, 0]);

    // Create the x-axis
    svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale));

    // Create the y-axis
    svg.append('g')
      .call(d3.axisLeft(yScale));

    // Create the bars
    svg.selectAll('.bar')
      .data(groupedData)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.habitat))
      .attr('y', height)
      .attr('width', xScale.bandwidth())
      .attr('height', 0)
      .attr('fill', d => colorScale(d.habitat)) // Set the color based on the habitat
      .transition()
      .duration(1000)
      .attr('y', d => yScale(d.totalStorage))
      .attr('height', d => height - yScale(d.totalStorage));

    // Optional: Add labels to the bars
    svg.selectAll('.bar-label')
      .data(groupedData)
      .enter().append('text')
      .attr('class', 'bar-label')
      .attr('x', d => xScale(d.habitat) + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.totalStorage) - 5)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Arial') // Set the font family
      .attr('font-size', '12px') // Set the font size
      .text(d => d.totalStorage + " Gt");

  })
  .catch(error => {
    console.error('Error:', error);
  });