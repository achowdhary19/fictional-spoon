<script setup>
import { vDraggable } from "@neodrag/vue";
import myface from "@/assets/myface.js";
import { ref, onMounted, onUnmounted } from "vue";
import "../assets/main.css";

const words = ref([...myface]);
const positions = ref([]); //  button positions, mostly for debugging
const viewportWidth = ref(window.innerWidth);
const viewportHeight = ref(window.innerHeight);

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

/* Initial positions  */
const initializePositions = () => {
  shuffleArray(words.value);

  const container = document.querySelector(".bound");
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const buttonWidth = 50; // Adjust as needed
  const buttonHeight = 60; // Adjust as needed

  positions.value = words.value.map(() => ({
    x: getRandomInt(0, containerWidth - buttonWidth),
    y: getRandomInt(0, containerHeight - buttonHeight),
  }));
};

// track dragging position, for debugging
const updatePosition = (index, event) => {
  positions.value[index] = {
    x: event.offsetX,
    y: event.offsetY,
  };
};

/* do i need this responsive resizing its just for debugging and making sure positions are accurate when screen is resized   */
const updatePositionsOnResize = () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  positions.value = positions.value.map((pos) => ({
    x: (pos.x / viewportWidth.value) * newWidth,
    y: (pos.y / viewportHeight.value) * newHeight,
  }));

  viewportWidth.value = newWidth;
  viewportHeight.value = newHeight;
};

onMounted(() => {
  initializePositions();
  window.addEventListener("resize", updatePositionsOnResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updatePositionsOnResize);
});

// end of debugging / tracking positions / resizing
</script>

<template>
  <div>
    <button
      class="tab"
      v-for="(item, index) in words"
      :key="index"
      :style="`left: ${positions[index]?.x}px; top: ${positions[index]?.y}px; position: absolute;`"
      v-draggable="{ axis: 'both', bounds: '.bound' }"
      @drag-end="(e) => updatePosition(index, e)"
    >
      <!-- display word - initial x y position 
      {{ item }} - ({{ positions[index]?.x }}, {{ positions[index]?.y }})  -->

      <!-- display word only, normal  -->
      {{ item }}
    </button>
  </div>
</template>

<style scoped></style>
