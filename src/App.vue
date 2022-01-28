<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div
    id="app"
    class="min-h-screen bg-cover"
    style=" background-image: url('/assets/images/background.svg'); font-family: 'Manrope', sans-serif; "
  >
    <main>
      <Navbar />

      <router-view></router-view>
    </main>
  </div>
</template>