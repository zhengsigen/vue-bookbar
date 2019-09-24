import Vue from 'vue'
import Vuex from 'vuex'
import http from './common/Axios'
import { async } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      // id: 26,
      // name:null,
      // cover: null,
      // balance: 0,
      // addrId: null,
      // createDate: null,
      // loginDate: null
    },
    userCover:null,
    cartCount: 0,
    skus:[]
  },
  getters:{
    user(state){
      return state.user;
    },
    userInfo(state){
      return state.userCover;
    },
    cartCount(state){
      return state.cartCount;
    },
    skus(state){
      return state.skus;
    }
  },
  mutations:{
    updateUser(state,user){
      state.user = user;
    },
    updateUserInfo(state,userCover){
      state.userCover = userCover;
    },
    saveHasStockCartCount(state,count){
      state.cartCount = count;
    },
    saveBookSkus(state,skus){
      state.skus = skus || [];
    }

  },
  actions: {
    async getUserInfo ({ commit }) {
      let data = await http.get("/user/info/");

      if(data.code === 0){
        // this.userInfo = data.data.user;
        commit('updateUser',data.data.user);
      }else{
          console.info(data.desc);
      }
    },
    //查询购物车有库存商品数量
    async getHasStockCartCount({ commit}){
      let data = await http.get("/cart/count");
      if(data.code === 0) {
        commit('saveHasStockCartCount',data.data);
      }
    },
    // 查询书籍品相
    async queryBookSkus({ commit }, bookId){
      let data = await http.get("/book/sku/"+bookId);
      console.info(data.data);
      if(data.code === 0){
        commit('saveBookSkus',data.data);
      }
    }
   
  }
})
