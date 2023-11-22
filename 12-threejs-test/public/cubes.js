function createCubesWithLabels(font, data) {
    // Sort the data array based on the "Above_ground_current_storage" property
    data.sort((a, b) => {
      const sizeA = parseFloat(a.Above_ground_current_storage);
      const sizeB = parseFloat(b.Above_ground_current_storage);
      return sizeA - sizeB;
    });
  
    // Calculate the total width of all cubes in the line
    const totalWidth = data.length * 200;
  
    for (let i = 0; i < data.length; i++) {
      const cubeData = data[i];
  
      // Extract relevant data from JSON
      const habitatName = cubeData.Habitat_name;
      const color = cubeData.color;
      const aboveGroundStorage = parseFloat(cubeData.Above_ground_current_storage);
  
      // Adjust the scale factor to make the cubes smaller
      const scaleMultiplier = aboveGroundStorage / 1000000000; // Adjust as needed
  
      // Create cube
      var cubeGeometry = new THREE.BoxGeometry(
        50 * scaleMultiplier, // Adjust the base size of the cubes
        50 * scaleMultiplier,
        50 * scaleMultiplier
      );
      var cubeMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        roughness: 0.7,
        metalness: 0.0,
      });
      var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  
      // Arrange cubes in a line along the X-axis
      cube.position.x = i * 200 - totalWidth / 2;
  
      cube.castShadow = true;
      scene.add(cube);
      cubes.push(cube);
  
      // Create label text
      var labelText = `${habitatName}\nAbove Ground Storage: ${aboveGroundStorage.toFixed(2)} Bn m³`;
      var textGeometry = new THREE.TextGeometry(labelText, {
        font: font,
        size: 10, // Adjust the font size
        height: 1,
      });
      var textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      var text = new THREE.Mesh(textGeometry, textMaterial);
  
      // Position labels above each cube
      text.position.copy(cube.position);
      text.position.y += cube.geometry.parameters.height / 2 + 5; // Adjust the label position
      text.position.z += cube.geometry.parameters.depth / 2;
      scene.add(text);
      labels.push(text);
    }
  }