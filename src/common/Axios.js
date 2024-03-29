import axios from "axios";
import router from "../router";
import Vue from "vue";

import { Message } from "element-ui";

Vue.prototype.$message = Message;

const vueConfig = require("../../vue.config");

const NOT_LOGIN = 2002;
const IS_ENABLED = 2003;
// is_enabled

let http = axios.create({
  // baseURL: '/api',
  baseURL: "/zsg" + Object.keys(vueConfig.devServer.proxy)[0],
  validateStatus: function(status) {
    return status == 200; // Restful API永远返回200
  }
});

// 拦截请求
http.interceptors.request.use(
  function(config) {
    let token = localStorage.getItem("token");
    // console.info(token)
    config.headers.token = token || "";
    // console.info("发起请求");
    // 取消请求(token失效)
    return config;
  },
  function(reason) {
    // 失败
    // console.warn(arguments)
    return Promise.reject(reason);
  }
);

// 拦截响应
http.interceptors.response.use(
  function(response) {
    // 成功
    // debugger;
    let data = response.data;
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      if (data.code === NOT_LOGIN) {
        console.info("未授权");
        localStorage.setItem("token", "");
        console.info(location.href);
        router.replace({ path: "/accredit", query: { path: location.href } });
        Message({
          message: data.desc,
          type: "error"
        });
        return Promise.reject(data);
      }
    } else {
      if (data.code === NOT_LOGIN) {
        console.info("未授权扫码页面");
        localStorage.setItem("token", "");
        console.info(location.href);
        router.replace({ path: "/scanlogin" });
        Message({
          message: data.desc,
          type: "error"
        });
        return Promise.reject(data);
      }
    }

    //被禁用
    if (data.code === IS_ENABLED) {
      console.info("被封号");
      localStorage.setItem("token", "");
      if (!router.currentRoute.path === "/login") {
        router.replace({ path: "/" });
      }
      Message({
        message: data.desc,
        type: "error"
      });
      return Promise.reject(data);
    }
    return data;
  },
  function(reason) {
    // 失败
    // console.warn(arguments)
    return Promise.reject(reason);
  }
);

export default http;
