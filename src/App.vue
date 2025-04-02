<!-- This is the main Vue component, acting as the entry point for your component hierarchy.
It contains <template>, <script>, and <style> sections. 

Other components are usually imported and used inside App.vue. 
 -->
<template>
  <!-- router link is the comopnent for enabling user navigation in a router enabled app -->
  <!-- <nav><router-link to="/">App</router-link>
  <router-link to="/home">Home</router-link>
  <router-link to= "/about">About</router-link></nav> -->

  <div>
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<style scoped>

</style>
