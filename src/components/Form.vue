<script setup>
import { ref } from "vue";
import { vDraggable } from "@neodrag/vue";
import "../assets/main.css";

const newItem2 = ref("");
const words2 = ref([]);

const handleSubmit = (e) => {
  e.preventDefault();
  if (newItem2.value.trim() === "") return;

  words2.value.push({
    id: crypto.randomUUID(),
    title: newItem2.value,
  });

  newItem2.value = ""; //clear the input after submission
};
</script>

<template>
  <div>
    <form style="z-index: 100000">
      <div class="d-flex flex-column" style="width: 100%">
        <label class="doveritalic">
          What are you trying to say?
          <a @click="handleSubmit">↵</a>
        </label>
        <input v-model="newItem2" type="text" id="item" />
      </div>
    </form>

    <div class="container">
      <button
        v-for="(word2, index2) in words2"
        :key="index2"
        class="tab absolute"
        v-draggable="{
          axis: 'both',
          position: { x: 10, y: 10 },
        }"
      >
        {{ word2.title }}
      </button>
    </div>
  </div>
</template>

<style scoped></style>
