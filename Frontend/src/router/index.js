// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/CreateAccount",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "CreateAccount",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/CreateAccount.vue"),
      },
    ],
  },
  {
    path: "/MainPage",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "MainPage",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/MainPage.vue"),
      },
    ],
  },
  {
    path: "/AddSongs",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "AddSongs",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/AddSongs.vue"),
      },
    ],
  },
  {
    path: "/MongoCharts",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "MongoCharts",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/MongoCharts.vue"),
      },
    ],
  },
  {
    path: "/AddPlaylists",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "AddPlaylists",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/AddPlaylists.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
