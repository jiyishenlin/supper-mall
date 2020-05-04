import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/home/Home");/*懒加载方式*/
const Category = () => import("../views/category/Category");/*懒加载方式*/
const Cart = () => import("../views/cart/Cart");/*懒加载方式*/
const Profile = () => import("../views/profile/Profile");/*懒加载方式*/
const Detail = () => import("../views/detail/Detail");/*懒加载方式*/

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  //base: '/dist/',
  routes,
  mode:"history"
})

export default router
