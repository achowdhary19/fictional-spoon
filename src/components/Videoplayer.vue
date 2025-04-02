<template>
  <a-scene embedded
    ><a-assets>
      <!-- asset management -->
      <video id="tristanvideo" :src="video1" loop="true" preload="auto"></video>
    </a-assets>
    <!-- video -->
    <a-video :src="tristanvideo" width="100%" height="100%" position="0 0 -20">
    </a-video>
  </a-scene>
</template>

<script>
import tristanvideo from "@/assets/tristan.mov";

const playVideo = () => {
  const myVideo = document.querySelector("#tristanvideo");
  console.log("clicked");
  myVideo.addEventListener("click", function () {
    if (myVideo.paused) {
      myVideo.play();
    } else {
      myVideo.pause();
    }
  });
};
</script>
