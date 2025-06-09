<!-- This is the main Vue component, acting as the entry point for your component hierarchy.
It contains <template>, <script>, and <style> sections.  
Other components are usually imported and used inside App.vue. 
-->
<template>

  <div id="" class="d-flex indigo bound centermycontent">

    <Tabs></Tabs>
    <div class="app-grid main red">
      <div id="row1" class="row-of-stars black justify-content-between">
        <img class="" :src="blackstar1" alt="black star" />
                <RouterLink to="/about">-> </RouterLink>
        <img :src="redstar1" alt="red star" />
        <img :src="blackstar2" alt="black star" />
        <img :src="blackstar1" alt="black star" />
        <img :src="redstar2" alt="red star" />
      </div>
      <div id="row2" class="row-of-birds">
        <div class="twobirdsdiv">
          <img class="twobirds halo" :src="twobirds" alt="two people" />
        </div>

        <Form id="form"></Form>

        <div id="world">
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
      </div>

      <div id="row3" class="row-of-bunnies">
        <img
          class="bunnies"
          :src="bunnies"
          alt="Black and white pixel art sketch of bunnies"
        />
        <img
          class="bunnies"
          :src="bunnies"
          alt="Black and white pixel art sketch of bunnies"
        />
        <img
          class="bunnies"
          :src="bunnies"
          alt="Black and white pixel art sketch of bunnies"
        />
      </div>

      <div id="row4" class="black row-of-cows">
        <img :src="cows" alt="heavily edited picture of cows" />
      </div>
    </div>
  </div>

  <p class = "prev">Previous </p>
  <RouterLink  class = "next" to="/about">Next </RouterLink>
  <!-- <p class = "next">Next </p> -->

</template>
<script setup>
import twobirds from "@/assets/twobirds.png";
import blackstar1 from "@/assets/star1.png";
import blackstar2 from "@/assets/star2.png";
import redstar1 from "@/assets/redstar1.png";
import redstar2 from "@/assets/redstar2.png";
import bunnies from "@/assets/bunniesinsnow.png";
import overlay from "@/assets/overlay.png";
import cows from "@/assets/cows.png";
import panorama from "@/assets/trees.jpeg";

import Tabs from "../components/Tabs.vue";
import Form from "../components/Form.vue";
import aframe from "../components/aframe.vue";
</script>

<style scoped>
@media (min-width: 1024px){
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.poem-holder {
  /* #9eedbc; */
  height: 24vh;
  object-position: 0% -300px;
}

.starsdiv {
  height: 3.5vh;
}
.star {
  width: 5vw;
  /* box-shadow: 2px 2px 12px red; */
}

.row-of-stars {
  grid-column: 1 / 21;
  grid-row: 1/2;
  display: flex; /* for inner layout */
  align-items: center; /* y axis center */
  height: 4vh; /* control height of div / imgs  */
  width: 100%; /* override the default width auto */
}

/* perfect fit 
.row-of-stars img {
  max-height: 100%;
  width: auto;
}
*/

/* distorted */
.row-of-stars img {
  width: 100%; /* Forces each image to stretch unnaturally wide */
  height: 100%; /* Makes sure it fully fills the shrinking div */
  object-fit: fill; /* Forces distortion: stretches both width and height */
}
.row-of-stars img {
  flex: 1; /* Makes each image fight for equal space */
  height: 100%;
  object-fit: fill; /* Forces distortion */
}
.row-of-birds {
  grid-column: 1/21;
  align-items: flex-end; /* y axis  */
  display: grid;
  grid-template-columns: repeat(22, 1fr);
  gap: 8px;
}
.twobirdsdiv {
  /* width: 15vw; */
  grid-column: 1/11;
}
.twobirds img {
  width: 100%;
}

#form {
  grid-column: 11/14;
}
#world {
  grid-column: 14/23;
  height: 8vw; /* Set desired height */
  border: 2px solid black; /* Just to visualize the container */
  overflow: hidden;
  position: relative;
  cursor: default;
}

.bunnies {
  object-fit: cover;
}


.row-of-bunnies {
  grid-column: 1/21;
  display: flex;
  width: 100%;
  /* justify-content: center; */
  height: 10vh;
  overflow: hidden;
  border-radius: 25px;
}

.row-of-bunnies img {
  max-height: 100%;
  width: auto;
}
.row-of-cows {
  grid-column: 1/21;
  /* grid-row: 8/21; */
  width: 100%;
  height: 16vw;
  overflow: hidden;
  border-radius: 25px;
}
.row-of-cows img {
  width: 100%;
  object-position: 0% -19vw;
  height: auto;
}
</style>
