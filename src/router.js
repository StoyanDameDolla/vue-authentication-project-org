import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

// Apply routing to Vue Login/Register page
Vue.use(Router);

export const router = new Router({
  // Configure routes
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/Profile.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("./views/Admin.vue"),
    },
    {
      path: "/mod",
      name: "moderator",
      component: () => import("./views/Moderator.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("./views/User.vue"),
    },
  ],
});

// Check auth status on event action trigger
router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register", "/home"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
