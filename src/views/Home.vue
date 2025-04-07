<!-- This is the main Vue component, acting as the entry point for your component hierarchy.
It contains <template>, <script>, and <style> sections. 

Other components are usually imported and used inside App.vue. 
 -->
<template>
 

  <div id="" class="indigo bound centermycontent">

    <Tabs></Tabs>



    <div class="app-grid main red">
      <div id="row1" class="row-of-stars black justify-content-between">
        <img class="" :src="blackstar1" alt="black star" />
                <RouterLink to="/about">Secret</RouterLink>

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
@media (min-width: 1024px) {
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
</style>
