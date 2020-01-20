import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "homePage",
      component: () => import("./components/homePage/homePage.vue")
    },
    {
      path: "/userPlan",
      name: "userPlan",
      component: () => import("./components/userPlan/userPlan.vue")
    },
    {
      path: "/echarts",
      name: "echarts",
      component: () => import("./components/echarts/echarts.vue")
    }
  ]
});
