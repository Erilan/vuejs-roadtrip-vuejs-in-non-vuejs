<template>
  <div class="Counter">
    <p>Count : {{ count }} </p>
    <button @click="add">ADD</button>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    data () {
      return {
        count: 0
      }
    },
    methods: {
      add () {
        this.count++
      }
    }
  }
</script>
