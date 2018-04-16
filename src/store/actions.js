
import fetch from '../util/fetch';

/* eslint-disable */
export default {
  getWorkOrderList ({ commit }) {
    return fetch('/api/getworkorderlist').then(res => {
      commit('GET_WORKORDERLIST', res)
      return res
    })
  }
};
