import Vue from 'vue';
import Router from 'vue-router';
import Task from '../components/task';
import WorkOrder from '../components/workorder';

Vue.use(Router);
/* eslint-disable */
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'task',
        component: Task,
      },
      {
        path: '/workorder/:workOrderId',
        name: 'workorder',
        component: WorkOrder,
      },
      {
        path: '/newworkorder',
        name: 'newworkorder',
        component: WorkOrder,
      },
    ]
  })
}

