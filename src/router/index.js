import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Financial from '@/views/Financial'
import PDF from '@/views/PDF'
import Add from '@/views/Add'
import Tools from '@/views/Tools'
import FAssets from '@/views/financial/Assets'
import FCash from '@/views/financial/Cash'
import FLiabi from '@/views/financial/Liabilities'
import FResult from '@/views/financial/Result'
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
      component: Financial,
      children: [
        {
          path: '/',
          name: 'Assets',
          component: FAssets
        },
        {
          path: '/asset',
          name: 'Assets',
          component: FAssets
        },
        {
          path: '/fcash',
          name: 'fcash',
          component: FCash
        },
        {
          path: '/Liabilities',
          name: 'Liabilities',
          component: FLiabi
        },
        {
          path: '/result',
          name: 'result',
          component: FResult
        }
      ]
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
