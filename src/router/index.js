import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import DashBoard from '@/components/page/DashBoard';
import EditPage from '@/components/page/EditPage';
import MarkdownPage from '@/components/page/MarkdownPage';
import TodoListPage from '@/components/page/TodoListPage';
import ChartPage from '@/components/page/ChartPage';
import FormInputPage from '@/components/page/FormInputPage';
import FormLayoutPage from '@/components/page/FormLayoutPage';
import TablePage from '@/components/page/TablePage';

Vue.use(Router)

export default new Router({
  	mode: 'history',
  	routes: [{
		path: '/',
		name: 'Home',
		component: Home,
		children:[
			{
			path: '',
			component:DashBoard
			},
			{
			path:'/DashBoard',
			component:DashBoard
			},
			{
			path:'/EditPage',
			component:EditPage
			},
			{
			path:'/MarkdownPage',
			component:MarkdownPage
			},
			{
			path:'/TodoListPage',
			component:TodoListPage
			},
			{
			path:'/ChartPage',
			component:ChartPage
			},
			{
			path:'/FormInputPage',
			component:FormInputPage
			},
			{
			path:'/FormLayoutPage',
			component:FormLayoutPage
			},
			{
			path:'/TablePage',
			component:TablePage
			}
		]
	}]
})
