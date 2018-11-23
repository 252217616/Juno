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
import FHome from '@/views/financial/Home'
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
          path: '/assets',
          name: 'Assets',
          component: FAssets
        },
        {
          path: '/cash',
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
        },
        {
          path: '/',
          name: 'fhome',
          component: FHome
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
