import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from "@/components/Dashboardhome.vue";
import Bookings from "@/components/AllBookings.vue";
import Rooms from "@/components/Rooms.vue";
import AddHotel from "@/components/AddHotel.vue";
import AddUser from "@/components/AddUser.vue";
import RoomType from "@/components/Roomtype.vue";
import Login from "@/components/Login.vue";
import Transactions from "@/components/Transactions";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/roomtype",
      name: "roomtype",
      component: RoomType
    },
    {
      path: "/transactions",
      name: "transactions",
      component: Transactions
    },
    {
      path: "/bookings",
      name: "bookings",
      component: Bookings
    },
    {
      path: "/adduser",
      name: "adduser",
      component: AddUser
    },
    {
      path: "/addhotel",
      name: "addhotel",
      component: AddHotel
    },
    {
      path: "/rooms",
      name: "rooms",
      component: Rooms
    },
    {
      path: "/front",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/dashboard",
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
