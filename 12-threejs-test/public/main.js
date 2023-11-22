
var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
        // Adjust camera position to zoom out and focus on the line of cubes
        camera.position.set(0, 100, 1000);
camera.lookAt(0, 0, 0);

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      renderer.antialias = true;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 1);

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(500, 500, 500);
      light.target.position.set(0, 0, 0);
      scene.add(light);
      scene.add(light.target);
      light.position.set(400, 200, 300);
      light.target.position.set(0, 0, 0);
      light.castShadow;

      light.shadow.camera.near = 0.5;
      light.shadow.camera.far = 1500;
      light.shadow.camera.left = -1000;
      light.shadow.camera.right = 1000;
      light.shadow.camera.top = 1000;
      light.shadow.camera.bottom = -1000;

      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      var cubes = [];
      var labels = [];
      var inputMultiplier = 1;

      var loader = new THREE.FontLoader();
      loader.load(
        "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
        function (font) {
          // Load the JSON data
          fetch('../data.json')
            .then(response => response.json())
            .then(data => createCubesWithLabels(font, data));
        }
      );

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
      
    
      
      

      var groundGeometry = new THREE.PlaneGeometry(1000, 1000);
      var groundMaterial = new THREE.MeshStandardMaterial({
        color: 0xaaaaaa,
        roughness: 1,
        metalness: -5,
      });
      var ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -150;
      ground.position.z = -150;
      ground.receiveShadow = true;
      scene.add(ground);

      document.addEventListener("mousedown", onMouseDown, false);

      var raycaster = new THREE.Raycaster();
      var mouse = new THREE.Vector2();

      var selectedCube = null; // Variable to store the currently selected cube

      function updateLabelForSelectedCube() {
        if (selectedCube) {
          const index = cubes.indexOf(selectedCube);
          const cubeData = data[index];
          const habitatName = cubeData.Habitat_name;
          const aboveGroundStorage = parseFloat(cubeData.Above_ground_current_storage);
      
          // Update label text
          labels[index].geometry.dispose();
          labels[index].material.dispose();
          scene.remove(labels[index]);
      
          var labelText = `${habitatName}\nAbove Ground Storage: ${aboveGroundStorage.toFixed(2)} Bn m³`;
          var textGeometry = new THREE.TextGeometry(labelText, {
            font: font,
            size: 20,
            height: 1,
          });
          var textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
          var text = new THREE.Mesh(textGeometry, textMaterial);
          text.position.copy(selectedCube.position);
          text.position.y += selectedCube.geometry.parameters.height / 2 + 10;
          text.position.z += selectedCube.geometry.parameters.depth / 2;
          scene.add(text);
          labels[index] = text;
        }
      }
      function onMouseDown(event) {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(cubes);
      
        if (intersects.length > 0) {
          var clickedCube = intersects[0].object;
      
          // Check if a cube was previously selected
          if (selectedCube) {
            // Revert the color of the previously selected cube
            selectedCube.material.color.setRGB(
              Math.random(),
              Math.random(),
              Math.random()
            );
          }
    
            // Highlight the clicked cube with a lighter color
    const originalColor = clickedCube.material.color.clone();
    const lighterColor = originalColor.multiplyScalar(1.2); // Adjust the factor for the desired lightness
    clickedCube.material.color.copy(lighterColor);

    // Update the selectedCube variable
    selectedCube = clickedCube;

    console.log("Cube clicked! Index:", cubes.indexOf(clickedCube));

    // Update label for the selected cube
    updateLabelForSelectedCube();
        }

    
      
      }

      // Function to update cube sizes based on the selected multiplier
function updateCubeSizes(multiplier) {
    for (let i = 0; i < cubes.length; i++) {
      var cube = cubes[i];
      var sizeMultiplier = parseFloat(multiplier);
      cube.scale.set(sizeMultiplier, sizeMultiplier, sizeMultiplier);
  
      // Update text label position
      labels[i].position.copy(cube.position);
      labels[i].position.y += cube.geometry.parameters.height / 2 + 10;
      labels[i].position.z += cube.geometry.parameters.depth / 2;
    }
  }

  

 // Render the scene
 var animate = function () {
   requestAnimationFrame(animate);

   // Rotate the cubes for animation
   scene.children.forEach((child) => {
     if (child instanceof THREE.Mesh) {
    //    child.rotation.x += 0.01;
    //    child.rotation.y += 0.01;
     }
   });

   renderer.render(scene, camera);
 };

 animate();