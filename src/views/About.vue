<template>
  <div id="" class="bound centermycontent brush-main">
    <div class=" d-flex app-grid main">
      
      <div  id="" class="row-of-flowers item ">
      
          <img style="grid-row: span 5" class="rounded-corners" :src="spiky" alt="1 spiky purple flower" />
          <img style="grid-column: span 3"  class="rounded-corners" :src="spikyfamily" alt="A family of spiky flowers" />
          <img class="rounded-corners" :src="threespikys" alt="3 spiky purple flowers" />
      
      </div>

      <div id="" class=" item row-of-field rounded-corners">
        <img :src="wideGrass" alt="A wide image of tall grass and flowers" />
      </div>

    </div>

    <!-- <p class = "prev">Previous </p> -->
    <RouterLink  class = "prev" to="/">Previous </RouterLink>
    <p class = "next">Next </p>
    
  </div>

</template>

<script setup>
import wideGrass from "@/assets/Spikyflower/horiz-park.jpeg";
import spiky from "@/assets/Spikyflower/spikyflower.jpeg"
import threespikys from "@/assets/Spikyflower/3spikyflowers.jpeg"
import spikyfamily from "@/assets/Spikyflower/spikyfamily.jpeg"
import Tabs from "../components/Tabs.vue";
import Form from "../components/Form.vue";
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

.brush-main{
  background-color: white;
}

.row-of-flowers{
grid-column: span 21;
grid-row: 13/16;
display:grid;
grid-template-columns: repeat(5, 1fr);
gap: 1vh;

}

.row-of-field{
  grid-column: span 21;
  grid-row: 19/26;
  height:33vh;
  margin-top:8px;
}

.row-of-field img{
    object-position: 0% -4vw;
}


</style>