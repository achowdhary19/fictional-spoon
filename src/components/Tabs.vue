<template>
  <div>
    <button
      class="tab"
      v-for="(item, index) in processedwords"
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

<script setup>
import { vDraggable } from "@neodrag/vue";
import { ref, onMounted, onUnmounted } from "vue";
import "@/assets/main.css";
import { processPoem } from "@/assets/processPoem.js"
import myface from "@/assets/myface.txt?raw";

//creating a reactive variable, we can track myface's changes in Vue reactivity  
const myfaceRef = ref([...myface]);

//empty array to store words from txt files 
const processedwords = [];

// function to process txt files and add multiple sets of words to the same array
const addPoemWords = (poemText) => {
  const words = processPoem(poemText);
  processedwords.push(...words); // Spread the array to add words individually
};

addPoemWords(myface);

//if i wanted to make a separate array 
// const test = processPoem(test);



//Randomize positions of tabs within the specific container, bound 
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const randomizePositions = () => {

  const container = document.querySelector(".bound"); //main div in home.vue
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const buttonWidth = 50; 
  const buttonHeight = 60; 

  positions.value = myfaceRef.value.map(() => ({
    x: getRandomInt(0, containerWidth - buttonWidth),
    y: getRandomInt(0, containerHeight - buttonHeight),
  }));

    // console.log("Initial randomized positions:", positions.value); hmm why are there like 300 positions 

};


const positions = ref([]); //  reactive array to hold  x y position of every button 
const viewportWidth = ref(window.innerWidth); //track size of the browser window when component first loads
const viewportHeight = ref(window.innerHeight);

// updates the position of a specific button, new position is relative to the .bound container. when a button is dragged, positions array reflects where things  are after dragging
const updatePosition = (index, event) => {
  positions.value[index] = {
    x: event.offsetX,
    y: event.offsetY,
  };

};

// rescales their positions to maintain layout proportions based on the new screen size + updates new screen dimensions
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
  randomizePositions();
  window.addEventListener("resize", updatePositionsOnResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updatePositionsOnResize);
});

// end of debugging / tracking positions / resizing
</script>
