async function fetchData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading JSON file:', error);
    throw error; // Re-throw the error to propagate it if needed
  }
}

// Call the function and use the data
fetchData()
  .then(data => {
    // Work with your JSON data here
    data.forEach(item => {
      const habitats = item.Habitat_name;
      const habitatsDiv = document.querySelector('.habitats');
      habitatsDiv.innerHTML += `<p>${habitats}</p>`;


    });
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during data fetching
    console.error('Error:', error);
  });
