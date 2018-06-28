<template>
  <div class="ProductList">
    <product
      v-for="product in products"
      :key="product.id"
      :product="product"
      :action="getButtonAction(product)"
    />
  </div>
</template>

<script>
  import { ADD_PRODUCT, REMOVE_PRODUCT } from '../store/modules/basket/types'

  import Product from '../components/Product'

  export default {
    name: 'ProductList',
    props: ['products'],
    components: {
      Product
    },
    data () {
      return {
        //count: this.startValue
      }
    },
    computed: {
    },
    methods: {
      getButtonAction (product) {
        //console.log('get', product.id)
        if (this.productIsAlreadyInBasket(product.id)) {
          return {
            method: this.removeProductFromBasket,
            label: 'Remove from basket'
          }
        }
        return {
          method: this.addProductToBasket,
          label: 'Add to basket'
        }
      },
      addProductToBasket (productId, productName) {
        this.$store.commit(ADD_PRODUCT, {
          productId: productId,
          productName: productName
        })
      },
      removeProductFromBasket (productId) {
        this.$store.commit(REMOVE_PRODUCT, productId)
      },
      productIsAlreadyInBasket(productId) {
        return this.$store.state.basket.products.filter((item) => {
          return item.id === productId
        }).length
        return true
      }
    },
    mounted () {
      console.log(this.products)
    }
  }
</script>
