import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Router import thingys

import Home from './components/Home.vue'
import About from './components/About.vue'
import Team from './components/Team.vue'
import Create from './components/Create.vue'


// Router init

Vue.use(VueRouter);
const router = new VueRouter({
  routes : [ 
    {path: '/', component: Home},
    {path: '/how-it-works', component: About},
    {path: '/team', component: Team},
    {path: '/new', component: Create},
  ],
  mode : 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
