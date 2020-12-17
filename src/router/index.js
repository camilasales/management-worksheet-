import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "section1",
    component: Home,
    meta: { mobileTo: '#section1' }
  },
  {
    path: "/",
    name: "section2",
    component: Home,
    meta: { mobileTo: '#section2' }
  },
  {
    path: "/",
    name: "section3",
    component: Home,
    meta: { mobileTo: '#section3' }
  },
  {
    path: "/",
    name: "section4",
    component: Home,
    meta: { mobileTo: '#section4' }
  },
  {
    path: "/",
    name: "section5",
    component: Home,
    meta: { mobileTo: '#section5' }
  },
  {
    path: "/",
    name: "section6",
    component: Home,
    meta: { mobileTo: '#section6' }
  },
  {
    path: "/",
    name: "section7",
    component: Home,
    meta: { mobileTo: '#section7' }
  },
  {
    path: "/",
    name: "section8",
    component: Home,
    meta: { mobileTo: '#section8' }
  },
  {
    path: "/",
    name: "section9",
    component: Home,
    meta: { mobileTo: '#section9' }
  },
  {
    path: "/",
    name: "section10",
    component: Home,
    meta: { mobileTo: '#section10' }
  }
];
// custom scrolling behavior leveraging route meta info
const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return goTo(to.hash)
  } else if (savedPosition) {
    return goTo(savedPosition.y)
  } else {
    // check for mobileTo meta property
    to.matched.some(record => {
      if (record.meta.mobileTo) {
        // scroll to that location if screen size is mobile
          return goTo(record.meta.mobileTo)
      }
    })
  }
  // default to top of page
  // or return false if you don't want any behavior
  return { x: 0, y: 0 }
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
});

export default router;
