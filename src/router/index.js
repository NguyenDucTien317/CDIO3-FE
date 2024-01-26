import { createRouter, createWebHistory } from "vue-router";
import url from "./router.js";

const routes = [...url];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;