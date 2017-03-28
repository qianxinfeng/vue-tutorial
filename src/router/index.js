import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '@/components/Dashboard.vue'
import Heroes from '@/components/Heroes.vue'
import NotFound from '@/components/404'

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Dashboard
}, {
  path: '/dashboard',
  component: Dashboard
}, {
  path: '/heroes',
  component: Heroes,
  children: [{
    path: ':id',
    // 异步加载组件（使用webpack分割代码的方式）
    component: resolve => require(['@/components/HeroeDetail.vue'], resolve),
  }]
}, {
  name:'heroeDetail',
  path: '/heroe/:id',
  // 异步加载组件（使用webpack分割代码的方式）
  component: resolve => require(['@/components/HeroeDetail.vue'], resolve),
}, {
  path: '*',
  component: NotFound
}];

export default new VueRouter({
  routes
})
