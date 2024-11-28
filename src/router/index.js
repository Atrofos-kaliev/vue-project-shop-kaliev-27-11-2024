import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ProductDetail from '@/views/ProductDetail.vue';

const routes = [
  { path: '/',
    name: 'Home',
    component: HomeView
  },
  { path: '/about',
    name: 'About',
    component: AboutView
  },
  { path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  { path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/CheckoutView.vue'),
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import('../views/OrdersView.vue'),
  },
  {
    path: "/adminOrders",
    name: "AllOrders",
    component: () => import('../views/AdminOrderView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;