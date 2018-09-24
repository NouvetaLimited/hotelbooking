import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from "@/components/Dashboardhome.vue";
import Bookings from "@/components/AllBookings.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/bookings",
      name: "all",
      component: Bookings
    },
    {
      path: "/front",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
