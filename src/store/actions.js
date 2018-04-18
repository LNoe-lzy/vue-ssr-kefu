
import fetch from '../util/fetch';

/* eslint-disable */
export default {
  createWorkOrder({ commit }, data) {
    return fetch('/api/newworkorder', data, 'POST').then(res => {
      return res
    })
  },
  getWorkOrderList({ commit }) {
    return fetch('/api/getworkorderlist').then(res => {
      commit('GET_WORKORDERLIST', res)
      return res
    })
  },
  getOrderList({ commit }) {
    return fetch('/api/getorderlist').then(res => {
      return res
    })
  },
  getWorkOrder({ commit }, data) {
    return fetch('/api/getworkorder', {
      workOrderId: data.workOrderId,
    }, 'POST').then(res => {
      return res;
    })
  },
  updateWorkOrder({ commit }, data) {
    return fetch('/api/updateworkorder', data, 'POST').then(res => {
      return res;
    })
  },
  relateOrder({ commit }, data) {
    return fetch('/api/relateorder', {
      orderId: data.orderId,
      workOrderId: data.workOrderId,
    }, 'POST').then((res) => {
      return res;
    })
  },
  unrelateOrder({ commit }, data) {
    return fetch('/api/unrelateorder', {
      orderId: data.orderId,
    }, 'POST').then((res) => {
      return res;
    })
  },
  deleteWorkOrder({commit}, data) {
    return fetch('/api/deleteworkorder', {
      workOrderId: data.workOrderId,
    }, 'POST').then((res) => {
      return res;
    })
  }
};
