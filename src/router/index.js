import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../view/HomePage'
import Elements from '../view/elements'
import Alert from '../view/elements/Alert'
import Echarts from '../view/echarts'
import FirstExample from '../view/echarts/FirstExample'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
  	{
  		path: '/',
  		component: HomePage
  	},
    {
      path: '/elements',
      component: Elements, 
      children: [
        { path: 'alert', component: Alert }
      ]
    },
    {
      path: '/echarts',
      component: Echarts,
      children: [
        { path: 'first', component: FirstExample }
      ]
    }
  ]
})
