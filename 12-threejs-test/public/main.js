
var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(0, 200, 800);
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
          createCubesWithLabels(font);
        }
      );

     function createCubesWithLabels(font) {
  // Create five cubes with different colors and sizes
  for (let i = 0; i < 5; i++) {
    var cubeGeometry = new THREE.BoxGeometry(
      100 + i * 50,
      100 + i * 50,
      100 + i * 50
    );
    var cubeMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(Math.random(), Math.random(), Math.random()),
      roughness: 0.7,
      metalness: 0.0,
    });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = i * 200 - 400;
    cube.castShadow = true;
    scene.add(cube);
    cubes.push(cube);

    // Add text labels to the cubes
    var textGeometry = new THREE.TextGeometry('lorem', {
      font: font,
      size: 20,
      height: 1,
    });
    var textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var text = new THREE.Mesh(textGeometry, textMaterial);
    text.position.copy(cube.position);
    text.position.y += cube.geometry.parameters.height / 2 + 10;
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