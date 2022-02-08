import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ProductGallery from "../views/ProductGallery.vue";
import Checkout from "../views/Checkout.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Product from "../views/Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/About",
    name: "About",
    component: About,
  },

  {
    path: "/ProductGallery",
    name: "ProductGallery",
    component: ProductGallery,
  },

  {
    path: "/Product",
    name: "Product",
    component: Product,
  },

  {
    path: "/Checkout",
    name: "Checkout",
    component: Checkout,
  },

  {
    path: "/Contact",
    name: "Contact",
    component: Contact
  },

  { path: "/Login", name: "Login", component: Login },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
