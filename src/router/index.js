import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'
import notFound from '@/pages/404'
import PersonalInfo from '@/components/PersonalInfo'
import ArchitectureInfo from '@/components/ArchitectureInfo'
import LogInfo from '@/components/LogInfo'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      component: notFound
    },
    {
      path: '/',
      name: 'personalInfo',
      component: PersonalInfo,
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: PersonalInfo,
    },
    {
      path: '/architectureInfo',
      name: 'architectureInfo',
      component: ArchitectureInfo,
    },
    {
      path: '/logInfo',
      name: 'logInfo',
      component: LogInfo,
    },
  ]
})
