import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries.vue'
import LogTime from '@/components/LogTime.vue'
import NotFound from '@/components/404'

Vue.use(VueRouter);

const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/time-entries',
  component : TimeEntries,
  children : [{
    path : 'log-time',
    component : LogTime,
  }]
},{
  path : '*',
  component : NotFound
}];

export default new VueRouter({
  routes
})
