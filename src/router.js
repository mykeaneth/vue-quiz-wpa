import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/create",
      name: "create",
      component: () =>
        import(/* webpackChunkName: "create" */ "./views/Create.vue")
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: () => import(/* webpackChunkName: "quiz" */ "./views/Quiz.vue")
    }
  ]
});
