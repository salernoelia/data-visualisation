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

// Assuming you already have the fetchData function

// Call the function and use the data
fetchData()
  .then(data => {
    // Set up the initial pie chart
    updatePieChart(data);

    // Add event listener for habitat selection
    var habitatSelection = document.getElementById('habitat-selection');

    habitatSelection.addEventListener('change', function() {
      // Update the pie chart when the selection changes
      updatePieChart(data, habitatSelection.value);
    });

    function updatePieChart(data, selectedHabitatIndex = 0) {
      // Summarize the data points based on the selected habitat
      const aboveGroundCurrentStorageSum = d3.sum(data, d => d.Above_ground_current_storage);
      const belowGroundCurrentStorageSum = d3.sum(data, d => d.Below_ground_current_storage);
      const aboveGroundPotentialStorageSum = d3.sum(data, d => d.Above_ground_potential_storage_minus_areas_occupied_by_humans);
      const belowGroundPotentialStorageSum = d3.sum(data, d => d.Below_ground_potential_storage_minus_areas_occupied_by_humans);
      const aboveGroundCurrentStorageSelected = data[selectedHabitatIndex].Above_ground_current_storage;
      const belowGroundCurrentStorageSelected = data[selectedHabitatIndex].Below_ground_current_storage;

      const legendYOffset = 230; // Set the desired y-axis offset

      // Data for the pie chart
      const pieData = [
        aboveGroundCurrentStorageSum,
        belowGroundCurrentStorageSum,
        aboveGroundPotentialStorageSum,
        belowGroundPotentialStorageSum,
        aboveGroundCurrentStorageSelected,
        belowGroundCurrentStorageSelected
      ];

      // Clear previous chart
      d3.select('svg').remove();

      // Set up the pie chart parameters
      const width = 400;
      const height = 400;
      const radius = Math.min(width, height) / 2;

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const svg = d3.select('body').append('svg')
        .attr('width', width)
        .attr('height', height + 200) // Increase height to accommodate the legend
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

      const pie = d3.pie();

      // Create the pie chart
      const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

      const arcs = svg.selectAll('arc')
        .data(pie(pieData))
        .enter()
        .append('g')
        .attr('class', 'arc')

      arcs.append('path')
        .attr('d', arc)
        .attr('fill', (d, i) => color(i))
        .on('mouseover', function(d, i) {
          // Highlight the pie segment on mouseover
          d3.select(this).transition().duration(200).attr('opacity', 0.7);
        })
        .on('mouseout', function(d, i) {
          // Restore the original opacity on mouseout
          d3.select(this).transition().duration(200).attr('opacity', 1);
        });

      // Add labels
      arcs.append('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('text-anchor', 'middle')
        // .text(d => d.value);

      // Create legend
      const legend = svg.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', (d, i) => `translate(0,${i * 20 + legendYOffset})`);

      legend.append('rect')
        .attr('x', width / 2 - 18)
        .attr('width', 18)
        .attr('height', 18)
        .style('fill', color);

      legend.append('text')
        .attr('x', width / 2 - 24)
        .attr('y', 9)
        .attr('dy', '.35em')
        .style('text-anchor', 'end')
        .text((d, i) => {
          switch (i) {
            case 0:
              return 'Above Ground Current Storage Sum';
            case 1:
              return 'Below Ground Current Storage Sum';
            case 2:
              return 'Above Ground Potential Storage Sum';
            case 3:
              return 'Below Ground Potential Storage Sum';
            case 4:
              return 'Above Ground Current Storage of Habitat ' + selectedHabitatIndex;
            case 5:
              return 'Below Ground Current Storage of Habitat ' + selectedHabitatIndex;
          }
        });
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
