const router = [
    {
        path: "/",
        component: () => import('../components/layout/client/master.vue'),
        children: [
            {
                path: "home",
                component: () => import('../components/page/client/home.vue'),
            }
        ]
    }
]

export default router