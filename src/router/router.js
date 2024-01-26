const router = [
    {
        path: "/",
        component: () => import('../components/layout/client/master.vue'),
        children: [
            {
                path: "home",
                component: () => import('../components/page/client/home.vue'),
            },
            {
                path: "item",
                component: () => import('../components/page/client/item.vue'),
            },
            {
                path: "shop",
                component: () => import('../components/page/client/ShopList.vue'),
            },
            {
                path: "contact",
                component: () => import('../components/page/client/contact.vue'),
            },
            {
                path: "checkout",
                component: () => import('../components/page/client/checkout.vue'),
            },
            {
                path: "wish-list",
                component: () => import('../components/page/client/WishList.vue'),
            },
            {
                path: "login",
                component: () => import('../components/page/client/Login.vue'),
            },
            {
                path: "my-account",
                component: () => import('../components/page/client/MyAccount.vue'),
            }
        ]
    }
]

export default router