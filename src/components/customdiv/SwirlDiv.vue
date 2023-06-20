<script setup>
//svg for parent element clip
//   <svg height="0" width="0">
//     <defs>
//       <clipPath id="clip" clipPathUnits="objectBoundingBox">
//         <path
//           d="M 0,1
//               L 0,0
//               L 1,0
//               L 1,1
//               C .65 .8, .35 .9, 0 0.85
//               Z"
//         />
//       </clipPath>
//     </defs>
//   </svg>;
</script>

<template>
  <div class="clipdiv">
    <slot> </slot>
    <div class="clipcontainer">
      <svg height="0" width="0">
        <defs>
          <clipPath id="clip" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,1
              L 0,0
              L 1,0
              L 1,1
              C .65 .8, .35 .9, 0 0.95
              Z"
            />
          </clipPath>
        </defs>
      </svg>

      <div class="border-1"></div>
      <div class="border-2"></div>
      <div class="border-3"></div>

      <svg height="0" width="0">
        <defs>
          <clipPath id="clip2" clipPathUnits="objectBoundingBox">
            <path
              d="M0,0.9
    C .5 .9, .45 .75, 1 0.95 L1 1 L0 1
    Z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.clipdiv {
  clip-path: url(#clip);
}

.test {
  height: 100px;
}

.border-1 {
  position: absolute;
  top: -4%;
  width: 100%;
  height: 100%;
  background-color: var(--accent-1);
  clip-path: url(#clip2);
}

.border-2 {
  position: absolute;
  top: -2%;
  width: 100%;
  height: 100%;
  background-color: var(--accent-2);
  clip-path: url(#clip2);
}
.border-3 {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--accent-3);
  clip-path: url(#clip2);
}
</style>
