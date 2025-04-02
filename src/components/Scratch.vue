<template>
  <div id="app">
    <scratch-card
      :key="renderCount"
      :cardWidth="cardWidth"
      :cardHeight="cardHeight"
      :finishPercent="finishPercent"
      imageUrl="https://cdn.pixabay.com/photo/2014/02/27/16/09/grass-275986_640.jpg"
      :forceReveal="forceReveal"
    >
      <h2 class="card-content">This is a highly secretive message!!!</h2>
    </scratch-card>
    <button @click="forceReveal = true">Force Reveal!</button>
    <button @click="renderCount++">Force Reset</button>
  </div>
</template>

<script>
import ScratchCard from "/Users/arfachowdhary/vue-shopping-list/node_modules/vue-scratchcard/dist/vue-scratchcard.es";

export default {
  name: "Scratch",
  components: {
    ScratchCard, // Register the component here
  },
  data() {
    return {
      renderCount: 0,
      cardWidth: 300,
      cardHeight: 300,
      finishPercent: 70,
      forceReveal: false,
    };
  },
};
</script>
<style scoped>
.card-content {
  color: red;
}
</style>
