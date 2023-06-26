<script setup>
  import { ref, onMounted } from "vue";
  import PageTemplate from "../components/general/page/PageTemplate.vue";
  import audioFile from "../assets/VERTIGOJACK - B2B.mp3";

  onMounted(() => {
    //create canvas element
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    //fetch parent element from document and append
    const element = document.getElementById("canvas");
    element.appendChild(canvas);

    //set canvas values, values are bound to style with clientW/clientH
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    //nice to haves
    const canvasMiddle = canvasHeight / 2;
    const margin = 10;

    //actualise values for canvas width and height
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ////////////////////////////////////////////////

    //create audio element
    let audio = new Audio();
    audio.src = audioFile;
    //create analyzer elements
    const audioContext = new window.AudioContext();

    // init analyzers
    audio.play();
    let audioSource = audioContext.createMediaElementSource(audio);
    let analyzer = audioContext.createAnalyser();
    //connect source to analyzer and analyzer to destination.
    audioSource.connect(analyzer);
    analyzer.connect(audioContext.destination);
    //set analyser buffer size
    analyzer.fftSize = 64;
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const barWidth = canvas.width / bufferLength;
    /////////////////////////////////////////////////
    //draw line across canvas
    let x = 0;
    const canvasdraw = () => {
      //reset x position
      x = 0;
      //reset flip
      let flip = 1;
      //clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
      //load snapshot of sound into UInt8Array
      analyzer.getByteFrequencyData(dataArray);
      //init position and settings of canvas pen
      context.strokeStyle = "black";
      context.beginPath();
      context.moveTo(x, canvasMiddle);
      //for loop draws the graph

      for (let i = 0; i < dataArray.length; i++) {
        let value = dataArray[i];
        value = 100 / value;
        context.lineTo(x, canvasMiddle + value * flip * canvasMiddle);
        x += barWidth;
        context.lineTo(x, canvasMiddle + value * flip * canvasMiddle);
        context.lineTo(x, canvasMiddle);
        flip = flip * -1;
      }

      context.stroke();
      requestAnimationFrame(canvasdraw);
    };
    canvasdraw();
  });
</script>

<template>
  <div id="canvas"></div>
</template>

<style>
  canvas {
    background-color: aliceblue;
    width: 100%;
    height: 200px;
  }
</style>
