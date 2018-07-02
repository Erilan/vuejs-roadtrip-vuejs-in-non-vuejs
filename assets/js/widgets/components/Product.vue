<template>
  <div class="Product">
    <img v-if="product.image" :src="product.image">
    <div class="Product-informations">
      <span class="Product-title">{{ product.name }}</span>
      <span v-if="product.price" class="Product-price">{{ product.price }}€</span>
    </div>
    <span class="Product-action" @click="action.method(product.id, product.name)">{{ action.label }}</span>
  </div>
</template>

<script>

  export default {
    name: 'Product',
    props: ['product', 'action']
  }
</script>
