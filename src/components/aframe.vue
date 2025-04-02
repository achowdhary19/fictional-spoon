<script>
import panorama from "@/assets/trees.jpeg";
</script>
<template>
  <div id="world scene-container">
    <a-scene
      xr-mode-ui="enabled: false"
      embedded
      inspector
      keyboard-shortcuts
      screenshot
      device-orientation-permission-ui
    >
      <a-sky :src="panorama" rotation="0 -130 0"></a-sky>
    </a-scene>
  </div>
</template>

<style scoped>
#scene-container {
  width: 500px;
  height: 300px;
}
a-scene {
  width: 100%;
  height: 100%;
}
</style>
