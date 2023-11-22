const margin = 1200; // Adjust this value based on your preference
var cubes = [];
var labels = [];

function createCubesWithLabels(scene, font, data) {
  // Sort the data array based on the "Normalized_above_ground_current_storage" property
  data.sort((a, b) => {
    const sizeA = parseFloat(a.Normalized_above_ground_current_storage);
    const sizeB = parseFloat(b.Normalized_above_ground_current_storage);
    return sizeA - sizeB;
  });

  const cubeDepth = 50; // Depth of the cubes

  for (let i = 0; i < data.length; i++) {
    const cubeData = data[i];

    // Extract relevant data from JSON
    const habitatName = cubeData.Habitat_name;
    const color = cubeData.color;

    const NormalizedAboveGroundStorage = parseFloat(cubeData.Normalized_above_ground_current_storage);
    // Adjust the scale factor to make the cubes smaller
    const scaleMultiplier = NormalizedAboveGroundStorage; // Adjust as needed

    // Create cube
    var cubeGeometry = new THREE.BoxGeometry(
      50 * scaleMultiplier, // Adjust the base size of the cubes
      50 * scaleMultiplier,
      cubeDepth * scaleMultiplier
    );
    var cubeMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      roughness: 0.7,
      metalness: 0.0,
    });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // Position cubes in a row
    cube.position.x = i * (200 + margin);
    cube.position.y = cube.geometry.parameters.height / 2; // Adjusted Y position to avoid intersection
    cube.position.z = 0; // All cubes will be on the same z-plane

    cube.castShadow = true;
    scene.add(cube);
    cubes.push(cube);

    // Create label text
    var labelText = `${habitatName}\nAbove Ground Storage: ${NormalizedAboveGroundStorage.toFixed(2)} Bn m³`;
    var textGeometry = new THREE.TextGeometry(labelText, {
      font: font,
      size: 15, // Increased font size
      height: 1,
    });
    var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black text
    var text = new THREE.Mesh(textGeometry, textMaterial);

    // Position labels above each cube
    text.position.copy(cube.position);
    text.position.y += cube.geometry.parameters.height / 2 + 15; // Adjust the label position
    text.position.z += cubeDepth * scaleMultiplier / 2; // Adjusted to be in front of the cube

    scene.add(text);
    labels.push(text);
  }
}
