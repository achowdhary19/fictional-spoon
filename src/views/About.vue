<template>
  <div id="" class="bound centermycontent brush-main">
    <Tabs></Tabs>
    <div class="d-flex app-grid flowers-main">
      <div class="item rounded-corners row-of-video">
        <video autoplay loop muted>
          <source
            id="video-js"
            class="video-js"
            src="../assets/Spikyflower/softmovinggrass1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div id="" class="row-of-flowers item">
        <img
          style="grid-row: span 5"
          class="rounded-corners"
          :src="spiky"
          alt="1 spiky purple flower"
        />
        <img
          style="grid-column: span 3"
          class="rounded-corners"
          :src="spikyfamily"
          alt="A family of spiky flowers"
        />
        <img class="rounded-corners" :src="threespikys" alt="3 spiky purple flowers" />
      </div>

      <div id="" class="item row-of-field rounded-corners">
        <img :src="wideGrass" alt="A wide image of tall grass and flowers" />
      </div>
    </div>

    <!-- <p class = "prev">Previous </p> -->
    <RouterLink class="prev" to="/">Previous </RouterLink>
    <p class="next">Next</p>
  </div>
</template>

<script setup>
import wideGrass from '@/assets/Spikyflower/horiz-park.jpeg'
import spiky from '@/assets/Spikyflower/spikyflower.jpeg'
import threespikys from '@/assets/Spikyflower/3spikyflowers.jpeg'
import spikyfamily from '@/assets/Spikyflower/spikyfamily.jpeg'
import Tabs from '../components/Tabs.vue'
import Form from '../components/Form.vue'
import testvideo from '@/assets/Spikyflower/softmovinggrass1.mov'
</script>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}

.brush-main {
  background-color: white;
}

.row-of-flowers {
  grid-column: span 21;
  grid-row: 12/16;
  display: grid;
  align-items: baseline;
  z-index: 100;
  grid-template-columns: repeat(5, 1fr);
  gap: 1vh;
}

.row-of-field {
  grid-column: span 21;
  grid-row: 19/26;
  height: 33vh;
  margin-top: 8px;
}

.row-of-field img {
  object-position: 0% -4vw;
}
.row-of-video {
  justify-content: center;
  grid-column: 1 / 21;
  grid-row: 2 / 3;
}
.row-of-video video {
  width: 100%;
  object-fit: cover;
}
</style>
