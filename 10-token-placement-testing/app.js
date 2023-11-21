let jsonData;

    async function fetchData() {
        try {
            const response = await fetch('../data.json');
            jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error('Error loading JSON file:', error);
            throw error;ß
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

const tokenLocations = [];

var tokenPlacementCheck = false;

function updateIcicleDiagram(data, index) {

    // Clear the existing SVG content
    d3.select('svg').remove();
  
    const width = 800;
    const height = 600;
  
    // Select the HTML element to append the chart to
    const svg = d3.select('.graph').append('svg')
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
  
    // Draw rectangles without transition for the initial rendering
    const rectangles = svg.selectAll('rect')
      .data(nodes)
      .enter().append('rect')
      .attr('y', height / 2) // Set initial position for the animation
      .attr('x', d => d.y0)
      .attr('height', 0) // Set initial height for the animation
      .attr('width', d => d.y1 - d.y0)
      .attr('fill', (d, i) => color(i));
  
    // Apply transition for the initial rendering
    rectangles.transition()
       .duration(400)
      .delay((d, i) => i * 10)
      .attr('y', d => d.x0)
      .attr('height', d => d.x1 - d.x0);
  
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

function map(value, inMin, inMax, outMin, outMax) {
    return Math.round((value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin);
  }

function updateTokenIndex(tokenData) {
    var tokenIndex = map(tokenData.rotation, 0, 360, 0, 9);
    currentIndex = tokenIndex;
    updateIcicleDiagram(currentData, currentIndex);
    console.log("current index:, ", currentIndex);
  }
  
function listenToTokens() {
    const server = `ws://localhost:6050`;
    const ws = new WebSocket(server);
  
    ws.onopen = () => {
      console.log("Websocket connection established.");
    };
  
    ws.onerror = (error) => {
      console.log(`WebSocket error: `, error);
    };
  
    ws.onmessage = (msg) => {
      let json;
  
      // sometimes (for example the first message)
      // is no stringified JSON, then we don't want to proceed
      try {
        json = JSON.parse(msg?.data);
      } catch (error) {
        return;
      }
      const data = json.args;
const tokenVis = document.querySelector('.token-vis');
const touchtable = document.querySelector('.touchtable');
const tokenPlacement = document.querySelector('.token-placement');

// Convert relative coordinates to pixels based on the size of the touchtable
const touchtableRect = touchtable.getBoundingClientRect();
const absoluteX = touchtableRect.left + touchtableRect.width * data.relativeX;
const absoluteY = touchtableRect.top + touchtableRect.height * data.relativeY;

// Set the position of tokenVis using absolute coordinates
tokenVis.style.left = `${absoluteX}px`;
tokenVis.style.top = `${absoluteY}px`;

console.log("X & Y in pixels: ", absoluteX, absoluteY);

// Get the dimensions and position of the token placement point with a 100-pixel margin
const tokenPlacementRect = tokenPlacement.getBoundingClientRect();
const enlargedTokenPlacementRect = {
  left: tokenPlacementRect.left - 100,
  top: tokenPlacementRect.top - 100,
  right: tokenPlacementRect.right + 100,
  bottom: tokenPlacementRect.bottom + 100
};



// Check if the absolute position is within the enlarged boundaries of the token placement point
if (
  absoluteX >= enlargedTokenPlacementRect.left &&
  absoluteX <= enlargedTokenPlacementRect.right &&
  absoluteY >= enlargedTokenPlacementRect.top &&
  absoluteY <= enlargedTokenPlacementRect.bottom
) {
  console.log('The token is over the token placement point.');
  tokenPlacementCheck = true;
} else {
  console.log('The token is not over the token placement point.');
  tokenPlacementCheck = false;
}

      console.log("New data from token: ", data);

      if (json?.type === "/tracker/add") {
        
      } else if (json?.type === "/tracker/update" && tokenPlacementCheck) {
        updateTokenIndex(data);
      }

      
    };
  }

  
  
  listenToTokens();
 




