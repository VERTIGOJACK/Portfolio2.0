<script setup>
  import { ref, onMounted } from "vue";
  import { ToBetweenZeroAndOne } from "./ToBetweenZeroAndOne.js";

  const props = defineProps({ audioSource: Audio });

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
    const margin = canvasHeight * 0.1;
    const curveLength = 0.2;
    const strokeColor = getComputedStyle(element).color;

    const strokeWidth = 5;
    //actualise values for canvas width and height
    canvas.width = canvasWidth + strokeWidth;
    canvas.height = canvasHeight + strokeWidth;

    ////////////////////////////////////////////////

    //create audio element

    //create analyzer elements
    const audioContext = new window.AudioContext();
    document.addEventListener(
      "mousedown",
      () => {
        audioContext.resume();
      },
      { once: true }
    );
    // init analyzers
    // props.audioSource.play();
    let audioSource = audioContext.createMediaElementSource(props.audioSource);
    let analyzer = audioContext.createAnalyser();
    //connect source to analyzer and analyzer to destination.
    audioSource.connect(analyzer);
    analyzer.connect(audioContext.destination);
    //set analyser buffer size
    analyzer.fftSize = 32;
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    let barWidth = (canvas.width - strokeWidth) / bufferLength;
    /////////////////////////////////////////////////
    //draw line across canvas
    let x = 0;
    const canvasdraw = () => {
      //reset x position
      x = strokeWidth / 2;
      //reset flip
      let flip = 1;
      //clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
      //load snapshot of sound into UInt8Array
      analyzer.getByteFrequencyData(dataArray);
      //init position and settings of canvas pen
      context.lineWidth = strokeWidth;
      context.lineCap = "round";
      context.strokeStyle = strokeColor;
      context.beginPath();
      //starting from 0 and middle of canvas
      context.moveTo(x, canvasMiddle);
      //for loop draws the graph
      for (let i = 0; i < dataArray.length; i++) {
        //Uint8 has a max value of 255.
        let value = dataArray[i];
        //255 div by 255 = 1, ergo value is between 0 and 1.
        value = ToBetweenZeroAndOne(value, 255);
        //canvasmiddle + canvasmiddle*[0-1] ensures we dont draw outside canvas
        //flip decides if line is negative or positive y
        if (value > 0.9) {
          value = 0.9;
        }
        if (value < 0.2) {
          value = 0.2;
        }
        let barHeight = canvasMiddle + value * flip * canvasMiddle;

        const tempCurveLength = canvasMiddle * curveLength * flip;

        context.lineTo(x, barHeight - tempCurveLength);
        context.quadraticCurveTo(x, barHeight, x + barWidth / 2, barHeight);
        x += barWidth;
        context.quadraticCurveTo(x, barHeight, x, barHeight - tempCurveLength);

        // context.lineTo(x, barHeight - curveLength);
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
    width: 100%;
    height: 100%;
  }
</style>
