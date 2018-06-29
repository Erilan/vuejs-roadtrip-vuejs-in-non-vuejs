<template>
  <div v-if="hasProducts" class="Basket">
    <product
      v-for="product in products"
      :key="product.id"
      :product="product"
      :action="{method: removeFromBasket, label: 'Remove'}"
    />
  </div>
</template>

<script>
  import { ADD_PRODUCT, REMOVE_PRODUCT } from '../store/modules/basket/types'

  import Product from '../components/Product'

  export default {
    name: 'Basket',
    props: ['basketProducts'],
    components: {
      Product
    },
    data () {
      return {
      }
    },
    computed: {
      products () {
        return this.$store.state.basket.products
      },
      hasProducts () {
        return this.products.length > 0
      }
    },
    methods: {
      removeFromBasket (productId) {
        this.$store.commit(REMOVE_PRODUCT, productId)
      }
    },
    mounted () {
      this.basketProducts.forEach((item) => {
        this.$store.commit(ADD_PRODUCT, item)
      })
      console.log(this.basketProducts)
    }
  }
</script>
