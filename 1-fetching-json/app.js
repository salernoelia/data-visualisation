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
      // const habitats = item.Habitat_name;
      const habitatsDiv = document.querySelector('.habitats');
      const ulElement = document.createElement('li');

      // Iterate over the properties you want to display and create list items
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          // Create a list item
          const liElement = document.createElement('li');
          
          // Set the text content of the list item to the property name and value
          liElement.textContent = `${key}: ${item[key]}`;

          // Append the list item to the list element
          ulElement.appendChild(liElement);
        }
      }

      // Append the list element to the "habitats" div
      habitatsDiv.appendChild(ulElement);

    });
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during data fetching
    console.error('Error:', error);
  });
