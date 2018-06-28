import Vue from 'vue'
import Vuex from 'vuex'
import store from './widgets/store'

import Counter from './widgets/Counter/Counter.vue'
import ProductList from './widgets/ProductList/ProductList.vue'
import Basket from './widgets/Basket/Basket.vue'
import Dashboard from './widgets/Dashboard/Dashboard.vue'

Vue.use(Vuex)

export default (function () {

  let self = {}

  self.init = function () {
    document.querySelectorAll('[data-vue-app="counter"]').forEach(function(element) {
      let props = {}
      for (let key in element.dataset) {
        try {
          props[key] = JSON.parse(element.dataset[key])
        } catch (e) {
          props[key] = element.dataset[key]
        }
      }

      new Vue({
        store,
        render: h => h(Counter, {props}),
      }).$mount(element)

    })

    document.querySelectorAll('[data-vue-app="product-list"]').forEach(function(element) {
      let props = {}
      for (let key in element.dataset) {
        try {
          props[key] = JSON.parse(element.dataset[key])
        } catch (e) {
          props[key] = element.dataset[key]
        }
      }

      new Vue({
        store,
        render: h => h(ProductList, {props}),
      }).$mount(element)
    })

    document.querySelectorAll('[data-vue-app="basket"]').forEach(function(element) {
      let props = {}
      for (let key in element.dataset) {
        try {
          props[key] = JSON.parse(element.dataset[key])
        } catch (e) {
          props[key] = element.dataset[key]
        }
      }

      new Vue({
        store,
        render: h => h(Basket, {props}),
      }).$mount(element)
    })

    document.querySelectorAll('[data-vue-app="dashboard"]').forEach(function(element) {
      new Vue({
        store,
        render: h => h(Dashboard),
      }).$mount(element)
    })

  }

  return self
})()

