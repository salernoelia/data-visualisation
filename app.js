async function fetchData() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
  
      // Work with your JSON data here
      console.log(data);
    } catch (error) {
      console.error('Error loading JSON file:', error);
    }
  }
  
  // Call the function
  fetchData();
  