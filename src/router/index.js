import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Financial from '@/views/Financial'
import PDF from '@/views/PDF'
import Add from '@/views/Add'
import Tools from '@/views/Tools'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/financial',
      name: 'Financial',
      component: Financial
    },
    {
      path: '/pdf',
      name: 'PDF',
      component: PDF
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools
    }
  ]
})
