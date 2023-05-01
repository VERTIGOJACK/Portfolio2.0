<script setup>
  import { onMounted } from "vue";
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  const logo = "logo.gltf";

  onMounted(async () => {
    setTimeout(() => {
      container.classList.add("loaded");
      container.removeAttribute("style");
      settingsResize();
    }, 100);

    //get container
    const container = document.querySelector(".three");

    let width = container.clientWidth;
    let height = container.clientHeight;

    //setup scene camera and renderer
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 1;

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    //set size and append to container

    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const settingsResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      const newWidth = width;
      const newHeight = height;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    //get a gltfloader and load in our file (async)
    var loader = new GLTFLoader();
    const gltf = await loader.loadAsync(logo);
    scene.add(gltf.scene);

    //then add a light to the scene
    const fillLight = new THREE.PointLight(0xffffff, 1); // 0xffffff is the color and 0.5 is the intensity
    fillLight.position.set(0, 0, 10); // set the position of the light
    scene.add(fillLight);

    const initialPosition = fillLight.position.y;

    //get logo
    const logoobject = scene.children[0];
    //rotate logo
    logoobject.rotation.x += 90;

    // Set up the initial rotation of the object
    const initialRotation = logoobject.rotation.y;

    // Set up the sway parameters
    const swayFrequency = 1; // Frequency of the sway
    const swayAmplitude = 0.1; // Amplitude of the sway
    //on resize
    window.addEventListener("resize", () => {
      settingsResize();
    });

    //animate loop
    function animate() {
      //update the rotation of the object
      const time = performance.now() * 0.001; // Get the current time in seconds
      const swayAnglez = Math.sin(time * swayFrequency) * swayAmplitude; // Calculate the sway angle using a sine wave
      const swayAngley = (Math.sin(time * swayFrequency) * swayAmplitude) / 2; // Calculate the sway angle using a sine wave
      const swayPos = Math.sin(time * swayFrequency) * swayAmplitude * 50; // Calculate the sway angle using a sine wave
      logoobject.rotation.z = initialRotation + swayAnglez; // Apply the sway angle to the object's rotation
      logoobject.rotation.y = initialRotation + swayAngley; // Apply the sway angle to the object's rotation
      fillLight.position.x = initialPosition + -swayPos;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  });
</script>

<template>
  <link rel="import" href="logo.gltf" />
  <div class="three" style="opacity: 0">
    <!-- three js renderer -->
  </div>
</template>

<style scoped>
  canvas {
    background-color: #000000;
  }
  .three {
    transition: opacity 0.5s ease-in-out;
    height: 100%;
    width: 100vw;
  }

  .loaded {
    filter: drop-shadow(0 0 32px rgba(0, 0, 0, 0.8));
    opacity: 1;
  }
</style>
