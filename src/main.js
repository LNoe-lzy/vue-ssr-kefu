// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import { sync } from 'vuex-router-sync';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/reset.css';
import App from './App';
import { createRouter } from './router';
import { createStore } from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable */
export function createApp() {
  // 创建 router 实例
  const router = createRouter();
  const store = createStore();
  sync(store, router);
  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    store,
    render: h => h(App),
  });
  // 返回 app 和 router
  return { app, router, store };
}
