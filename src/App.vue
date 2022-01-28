<template>
  <div id="app" 
       class="min-h-screen bg-cover"
       style=" background-image: url('./assets/images/background.svg'); font-family: 'Manrope', sans-serif; ">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    'navbar': Navbar
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
