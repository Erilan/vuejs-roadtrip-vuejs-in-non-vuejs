<template>
  <div class="Dashboard">
    <p>Basket's products count : {{ basketProductsCount }}</p>
  </div>
</template>

<script>
  import { ADD_PRODUCT, REMOVE_PRODUCT } from '../store/modules/basket/types'

  import Product from '../components/Product'

  export default {
    name: 'Dashboard',
    computed: {
      basketProductsCount () {
        return this.$store.state.basket.products.length
      }
    }
  }
</script>
