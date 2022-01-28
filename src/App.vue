<template>
  <div id="app" class="min-h-screen bg-cover"
    style=" background-image: url('./assets/images/background.svg'); font-family: 'Manrope', sans-serif; ">  
    <main>
      <navbar></navbar>    
      <router-view></router-view>
    </main> 
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    'navbar': Navbar
  },
  data () {
    return {

    }
  },
}
</script>