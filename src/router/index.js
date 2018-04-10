import Vue from 'vue';
import Router from 'vue-router';
import Task from '../components/task';
import WorkOrder from '../components/workorder';

Vue.use(Router);

export default new Router({
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
      name: 'workorder',
      component: WorkOrder,
    },
  ],
});
