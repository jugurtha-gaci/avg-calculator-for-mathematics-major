import { createRouter, createWebHistory } from 'vue-router'
import L1 from './../pages/L1.vue'
import L2 from './../pages/L2.vue'
import L3 from './../pages/L3.vue'
import M1RO from "./../pages/M1RO.vue"
import M2RO from "./../pages/M2RO.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: L1,
      name: 'licence/1',
    },
    { 
      path: '/licence/2', 
      component: L2,
      name: 'licence/2',
    },
    { 
      path: '/licence/3', 
      component: L3,
      name: 'licence/3',

    },
    { 
      path: '/master/ro/1', 
      component: M1RO,
      name: 'master/ro/1',
    },
    { 
      path: '/master/ro/2', 
      component: M2RO,
      name: 'master/ro/2',
    },
  ]
})

export default router
