import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {

    /**
     * Uncomment following code and replace the component with the view that must be rendered.
     * @author Heshan Perera
     */

    path: '/',
    name: 'Home',
    component: Home

  },
  {

    /**
     * This is an example of how a component can be lazy loaded.
     * @author Heshan Perera
     */

    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

/**
 * Configures the vue router in history mode, which prevents the use of # based URLs to prevent reloading the page.
 * Ensure your server is configured to return the index.html file at all time to prevent 404.
 * Refer https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
 * @author Heshan Perera
 */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
