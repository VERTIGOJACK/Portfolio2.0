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
  <div class="outercontainer">
    <slot> </slot>
    <div class="clipcontainer">
      <div class="relative">
        <div class="border-1"></div>
        <div class="border-2"></div>
        <div class="border-3"></div>
        <div class="border-4"></div>

        <svg height="0" width="0">
          <defs>
            <clipPath id="clip2" clipPathUnits="objectBoundingBox">
              <path
                d="M0,0.5
    C .5 .9, .45 .15, 1 0.7L1 1 L0 1
    Z"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outercontainer {
  --mHeight: 80px;
  position: relative;
  width: 100%;
}
.padding > * {
  padding-bottom: var(--lengths-lg-1);
}
.relative {
  width: 100%;
  height: 100%;
  position: relative;
}
.clipcontainer {
  height: var(--mHeight);
  width: 100%;
  position: absolute;
  bottom: 0px;
}

.border-1 {
  position: absolute;
  bottom: 60%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--accent-1);
  clip-path: url(#clip2);
}

.border-2 {
  position: absolute;
  bottom: 40%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--accent-2);
  clip-path: url(#clip2);
}
.border-3 {
  position: absolute;
  bottom: 20%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--accent-3);
  clip-path: url(#clip2);
}
.border-4 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--monochrome-1);
  clip-path: url(#clip2);
}
</style>
