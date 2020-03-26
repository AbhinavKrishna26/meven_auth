<template>
  <div id="app">
    <Navbar />
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <> -->
    <!-- </div> --><div class="container">
    <router-view/>
  </div></div>
</template>

<script>
import Navbar from  "./components/Navbar";
export default {
  components: {
    Navbar
  }
  
};
</script>

<style>

</style>
