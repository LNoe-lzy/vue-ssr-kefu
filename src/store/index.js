import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);
/* eslint-disable */
export function createStore() {
  return new Vuex.Store({
    state: {
      workOrderList: [],
    },
    actions,
    mutations,
  });
}
