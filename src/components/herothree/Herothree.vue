<script setup>
  import { onMounted, watch } from "vue";
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  const logo = "logo.gltf";

  onMounted(async () => {
    setTimeout(() => {
      container.classList.add("loaded");
      container.removeAttribute("style");
      settingsResize();
    }, 200);

    //get container
    const container = document.querySelector(".three");
    //get container width height
    let width = container.getBoundingClientRect().width;
    let height = container.getBoundingClientRect().height;

    //setup scene camera and renderer
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.x = 0;
    camera.position.y = -0.1;
    camera.position.z = 1;

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    //append to container
    container.appendChild(renderer.domElement);

    const canvas = document.querySelector("canvas");

    //resizewindow
    const settingsResize = () => {
      width = container.getBoundingClientRect().width;
      height = container.getBoundingClientRect().height;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    //get a gltfloader and load in our file (async)
    var loader = new GLTFLoader();
    const gltf = await loader.loadAsync(logo);
    scene.add(gltf.scene);

    //then add a light to the scene
    const fillLight = new THREE.PointLight(0xffffff, 1); // 0xffffff is the color and 0.5 is the intensity
    fillLight.position.set(0, 0, 10); // set the position of the light
    scene.add(fillLight);

    //get logo
    const logoobject = scene.children[0];
    logoobject.rotation.x += 96;

    // Set up the initial rotation of the object
    const initialRotation = logoobject.rotation.y;

    // Set up the sway parameters
    const swayFrequency = 1; // Frequency of the sway
    const swayAmplitude = 0.1; // Amplitude of the sway

    //animate loop
    function animate() {
      //update the rotation of the object
      const time = performance.now() * 0.001; // Get the current time in seconds
      const swayAnglez = Math.sin(time * swayFrequency) * swayAmplitude; // Calculate the sway angle using a sine wave
      const swayAngley = (Math.sin(time * swayFrequency) * swayAmplitude) / 2; // Calculate the sway angle using a sine wave
      logoobject.rotation.z = initialRotation + swayAnglez; // Apply the sway angle to the object's rotation
      logoobject.rotation.y = initialRotation + swayAngley; // Apply the sway angle to the object's rotation
      requestAnimationFrame(animate);
      settingsResize();
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
    width: 100%;
  }

  .loaded {
    opacity: 1;
  }
</style>
