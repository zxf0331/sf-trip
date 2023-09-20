import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    // 映射关系path -> component
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/favor",
            component: () => import("@/views/favor/favor.vue")
        },
        {
            path: "/home",
            component: () => import("@/views/home/home.vue")
        },
        {
            path: "/message",
            component: () => import("@/views/message/message.vue")
        },
        {
            path: "/order",
            component: () => import("@/views/order/order.vue")
        }
    ]
})

export default router
