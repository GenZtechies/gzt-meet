import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Router import thingys

import Home from './components/Home.vue'
/*import About from './components/About.vue'
import Team from './components/Team.vue'
import Create from './components/Create.vue'
*/
// Router init

Vue.use(VueRouter);
const router = new VueRouter({
  routes : [ 
    {path: '/', component: Home},
/**/
  ],
  mode : 'history'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
