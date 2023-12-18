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
        },
        {
            path: "/city",
            component: () => import("@/views/city/city.vue"),
            meta: {
                hideTabbar: true
            }
        },
        {
            path: "/search",
            component: () => import("@/views/search/search.vue"),
            meta: {
                hideTabbar: true
            }
        },
        {
            path: "/detail/:id",
            component: () => import("@/views/detail/detail.vue"),
            meta: {
                hideTabbar: true
            }
        }
    ]
})

export default router