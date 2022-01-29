import Vue from "vue";
import VueRouter from "vue-router";
import List1 from "../views/List1.vue";
import List2 from "../views/List2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/list1",
    name: "list1",
    component: List1,
  },
  {
    path: "/list2",
    name: "list2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: List2,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
