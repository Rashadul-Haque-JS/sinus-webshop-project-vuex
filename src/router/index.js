import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ProductGallery from "../views/ProductGallery.vue";
import Checkout from "../views/Checkout.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/About",
    name: "about",
    component: About,
  },

  {
    path: "/ProductGallery",
    name: "ProductGallery",
    component: ProductGallery,
  },
  {
    path: "/Checkout",
    name: "Checkout",
    Component: Checkout,
  },

  { path: "/Contact", name: "Contact", Component: Contact },

  { path: "/Login", name: "Login", Component: Login },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
