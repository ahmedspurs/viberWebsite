import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryPage from "../views/CategoryPage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ContactPage from "../views/ContactPage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import CartPage from "../views/CartPage.vue";
import ProductPage from "../views/ProductPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";
import OrderComplete from "../views/OrderComplete.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/CategoryPage",
    name: "CategoryPage",
    component: CategoryPage,
  },
  {
    path: "/ProductsPage",
    name: "ProductsPage",
    component: ProductsPage,
  },
  {
    path: "/ProductPage",
    component: ProductPage,
  },
  {
    path: "/ContactPage",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/ProfilePage",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/CartPage",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/CheckoutPage",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
  {
    path: "/OrderComplete",
    name: "OrderComplete",
    component: OrderComplete,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
