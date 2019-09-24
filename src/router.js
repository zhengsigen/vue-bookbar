import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: "/zsg/",
  linkExactActiveClass: "active",
  linkActiveClass: "active",
  routes: [
    {
      //首页
      path: "/",
      name: "home",
      component: Home
    },
    {
      //搜索
      path: "/search",
      name: "search",
      // route level code-splitting
      // this generates a separate chunk (search.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "search" */ "./views/home/Search.vue")
    },
    {
      //登录
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/my/Login.vue")
    },
    {
      //扫码登录
      path: "/scanlogin",
      name: "scanlogin",
      // route level code-splitting
      // this generates a separate chunk (scanlogin.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "scanlogin" */ "./views/my/ScanLogin.vue")
    },
    {
      //授权页
      path: "/accredit",
      name: "accredit",
      // route level code-splitting
      // this generates a separate chunk (accredit.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "accredit" */ "./views/my/Accredit.vue")
    },
    {
      //邀请授权页
      path: "/inviteAccredit",
      name: "inviteAccredit",
      // route level code-splitting
      // this generates a separate chunk (inviteAccredit.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "inviteAccredit" */ "./views/my/InviteAccredit.vue")
    },
    {
      //新老用户选择页
      path: "/choosetypeusers",
      name: "choosetypeusers",
      // route level code-splitting
      // this generates a separate chunk (choosetypeusers.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "choosetypeusers" */ "./views/my/ChooseTypeUsers.vue")
    },
    {
      //书籍详情
      path: "/book/:id",
      name: "book",
      // route level code-splitting
      // this generates a separate chunk (book.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "book" */ "./views/home/Book.vue")
    },
    {
      //书籍详情的评分
      path: "/book/:id/grade",
      name: "grade",
      // route level code-splitting
      // this generates a separate chunk (grade.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "grade" */ "./views/home/Grade.vue")
    },
    {
      //我的
      path: "/my",
      name: "my",
      // route level code-splitting
      // this generates a separate chunk (my.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "my" */ "./views/my/My.vue"),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      //余额
      path: "/my/balance",
      name: "Balance",
      // route level code-splitting
      // this generates a separate chunk (balance.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "balance" */ "./views/my/mybalance/Balance.vue"),
      meta: {
        requireAuth: true
      }
    },
    {
      //余额
      path: "/my/balance/detail",
      name: "balanceDetail",
      // route level code-splitting
      // this generates a separate chunk (balanceDetail.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "balanceDetail" */ "./views/my/mybalance/balanceDetail.vue"),
      meta: {
        requireAuth: true
      }
    },

    {
      //订单列表
      path: "/my/orders",
      name: "orders",
      // route level code-splitting
      // this generates a separate chunk (orders.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "orders" */ "./views/orderInfo/Orders.vue"),
      meta: {
        requireAuth: true
      }
    },
    {
      //订单详情
      path: "/order/:orderId",
      name: "order",
      // route level code-splitting
      // this generates a separate chunk (orderdetail.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "orderdetail" */ "./views/orderInfo/Order.vue"),
      meta: {
        requireAuth: true
      }
    },
    {
      //邀请新用户
      path: "/invitation",
      name: "invitation",
      // route level code-splitting
      // this generates a separate chunk (invitation.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "invitation" */ "./views/static/Invitation.vue")
    },
    {
      //用户卖书
      path: "/selling",
      name: "selling",
      // route level code-splitting
      // this generates a separate chunk (selling.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "selling" */ "./views/sellingBooksList/SellingBooksList.vue"),
      meta: {
        requireAuth: true
      }
    },
    {
      //收集详情
      path: "/open-collections/:id",
      name: "open-collections",
      // route level code-splitting
      // this generates a separate chunk (OpenCollection.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "OpenCollection" */ "./views/collection/OpenCollection.vue")
    },
    {
      //邀请信息
      path: "/invite",
      name: "invite",
      // route level code-splitting
      // this generates a separate chunk (invite.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "invite" */ "./views/invite/Invite.vue")
    },
    {
      //收集列表
      path: "/open-collections",
      name: "open-collections",
      // route level code-splitting
      // this generates a separate chunk (OpenCollections.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "OpenCollections" */ "./views/collection/OpenCollections.vue")
    },
    {
      //卖书下单成功
      path: "/order/succeed/:orderId",
      name: "orderSucceed",
      // route level code-splitting
      // this generates a separate chunk (ordersucceed.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "ordersucceed" */ "./views/orderInfo/OrderSucceed.vue"),
      meta: {
        requireAuth: true
      }
    },
    {
      //书籍品相审核分级细则
      path: "/audit",
      name: "qualityAudit",
      // route level code-splitting
      // this generates a separate chunk (qualityAudit.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "qualityAudit" */ "./views/static/sellRules/QualityAudit.vue")
    },
    {
      //买书和卖书规则问答
      path: "/rules",
      name: "sellRules",
      // route level code-splitting
      // this generates a separate chunk (sellRules.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "sellRules" */ "./views/static/sellRules/SellRules.vue")
    },
    {
      // 不同品相
      path: "/condition",
      name: "differentCondition",
      // route level code-splitting
      // this generates a separate chunk (differentCondition.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "differentCondition" */ "./views/static/sellRules/DifferentCondition.vue")
    },
    {
      //营业执照
      path: "/license",
      name: "license",
      // route level code-splitting
      // this generates a separate chunk (License.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "License" */ "./views/static/sellRules/License.vue")
    },
    {
      //用户协议
      path: "/agreement",
      name: "userAgreement",
      // route level code-splitting
      // this generates a separate chunk (UserAgreement.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "UserAgreement" */ "./views/static/sellRules/UserAgreement.vue")
    },
    {
      //填写订单信息
      path: "/addr",
      name: "orderInfo",
      // route level code-splitting
      // this generates a separate chunk (orderInfo.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "orderInfo" */ "./views/orderInfo/OrderInfo.vue"),
      meta: {
        requireAuth: true
      }
    },
    {
      //填写买书订单信息
      path: "/buy/addr",
      name: "BuyOrder",
      // route level code-splitting
      // this generates a separate chunk (BuyOrder.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "BuyOrder" */ "./views/orderInfo/BuyOrder.vue"),
      meta: {
        requireAuth: true
      }
    },
    {
      //买书订单列表
      path: "/buy/order",
      name: "BuyOrderInfo",
      // route level code-splitting
      // this generates a separate chunk (BuyOrderInfo.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "BuyOrderInfo" */ "./views/orderInfo/BuyOrderInfo.vue"),
      meta: {
        requireAuth: true
      }
    },
    {
      //支付页面
      path: "/pay",
      name: "WeChatPay",
      component: () => import("./views/orderInfo/WeChatPay.vue")
    },
    {
      //运费介绍
      path: "/carriage",
      name: "Carriage",
      // route level code-splitting
      // this generates a separate chunk (Carriage.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "Carriage" */ "./views/static/sellRules/Carriage.vue")
    },
    {
      //修改订单信息
      path: "/order/addr/update/:orderId",
      name: "updateOrderInfo",
      // route level code-splitting
      // this generates a separate chunk (updateOrderInfo.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "updateOrderInfo" */ "./views/orderInfo/UpdateOrderInfo.vue"),
      meta: {
        requireAuth: true
      }
    },
    {
      //推荐书单
      path: "/open-collections/:RecommendId/Recommend",
      name: "Recommend",
      component: () => import("./views/book/Recommend.vue"),
      meta: {
        requireAuth: true
      }
    },
    {
      //推荐书单
      path: "/open-collections/:RecommendId/Recommend/:BookId",
      name: "Recommend",
      component: () => import("./views/book/Recommend.vue"),
      meta: {
        requireAuth: true
      }
    },

    {
      //推荐书单的搜索
      path: "/open-collections/:RecommendId/RecommendSerach",
      name: "RecommendSerach",
      // route level code-splitting
      // this generates a separate chunk (RecommendSerach.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "RecommendSerach" */ "./views/book/RecommendSerach.vue"),
      meta: {
        requireAuth: true
      }
    },

    {
      //推荐书单成功的页面
      path: "/open-collections/:RecommendId/RecommendScuess/:ScuessId",
      name: "RecommendScuess",
      // route level code-splitting
      // this generates a separate chunk (RecommendScuess.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "RecommendScuess" */ "./views/book/RecommendScuess.vue"),
      meta: {
        requireAuth: true
      }
    },
    {
      //推荐书单成功的页面
      path: "/comment",
      name: "Comment",
      // route level code-splitting
      // this generates a separate chunk (RecommendScuess.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "RecommendScuess" */ "./views/home/Comment.vue"),
      meta: {
        requireAuth: true
      }
    },

    {
      //购物车
      path: "/cart",
      name: "cart",
      // route level code-splitting
      // this generates a separate chunk (cart.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "cart" */ "./views/cart/Cart.vue"),
      meta: {
        requireAuth: true
      }
    },

    {
      //缺货
      path: "/cart/wishlist",
      name: "wishlist",
      // route level code-splitting
      // this generates a separate chunk (wish.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "wish" */ "./views/cart/WishList.vue"),
      meta: {
        requireAuth: true
      }
    }
  ]
});
