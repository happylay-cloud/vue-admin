/**
 * xxx业务模块 
 */
import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/saas-clients',
    component: Layout,
    redirect: 'noredirect',
    name: 'saas-clients',
    meta: {
      title: 'xxx业务模块管理',
      icon: 'component'
    },
    children: [
      {
        path: 'index', /** 请求地址 **/
        component: _import('demo/pages/index'), /** 跳转的vue视图 **/
        name: 'saas-clients-index',
        meta: {title: 'xxx业务模块', icon: 'component', noCache: true}
      }
    ]
  }
]
