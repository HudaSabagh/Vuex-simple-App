import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { name: "Huda", age: "30", adress: "Wien" },
      { name: "Nada", age: "23", adress: "St.pölten" },
      { name: "Dena", age: "50", adress: "Wien" },
      { name: "Lena", age: "13", adress: "St.pölten" },
    ],
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
