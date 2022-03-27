import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'privacyPolicy',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrivacyPolicyView.vue'),
  },
  {
    path: '/advertising-privacy-policy',
    name: 'advertisingPrivacyPolicy',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdvertisingPrivacyPolicyView.vue'),
  },
  {
    path: '/gdpr',
    name: 'gdpr',
    component: () => import(/* webpackChunkName: "about" */ '../views/GDPRView.vue'),
  },
  {
    path: '/sample',
    name: 'sample',
    component: () => import(/* webpackChunkName: "about" */ '../views/SampleView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
