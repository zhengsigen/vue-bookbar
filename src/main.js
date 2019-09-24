import Vue from "vue";
import VueAMap from 'vue-amap'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import numeral from "numeral";
import moment from 'moment';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import http from './common/Axios';

Vue.config.productionTip = false;
Vue.prototype.$http = http;

Vue.use(ElementUI);
Vue.use(Mint);
Vue.filter('moment', function(value, patten) {
    patten = patten || 'YYYY-MM-DD  HH:mm';
    return moment(value).format(patten);
});

Vue.filter("numeral", (number, pattern = "0,0.00") => numeral(number).format(pattern));

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'caab535b699bea587224b2059de7c394',
  plugin: [
    // 插件
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor',
    "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

// router.beforeEach(async(to, from, next) => {
//     // debugger
//     if(to.meta.requireAuth){
//         console.info("拦截路由")
//         let data = await http.get("/user/info");

//         console.info(data);
//         if( data.code === 0){
//             store.dispatch("increment",data.data)
//         }

//         if(store.getters.user === null){
            
//             next({
//                 path:'login',
//                 query:{path:to.path}
//             }) 
//         }
         
//     }
//     next();
// });


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");