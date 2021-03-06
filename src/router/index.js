import Vue from 'vue'
import Router from 'vue-router'
import { Home, ProductDetail, Search, Brand, ProductList, Categories, BrandCollection, SearchResult, CouponList, CouponDetail, Rush} from '@/pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {path: '/detail/:id', component: ProductDetail, name: 'home:product:detail'}
      ]
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/brands',
      name: 'Brand',
      component: Brand
    },
    {
      path: '/products/:groupId/:categoryId',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/brand/collection/:brandId',
      name: 'BrandCollection',
      component: BrandCollection
    },
    {
      path: '/query/:query',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/coupons',
      name: 'coupons',
      component: CouponList,
      children: [
        { path: 'detail/:kw/:id', component: CouponDetail, name: 'coupon/detail' }
      ]
    },
    {
      path: '/qiang',
      name: 'qiang',
      component: Rush
    }
  ]
})
