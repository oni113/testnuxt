<template>
  <div class="container">
    <h1 class="list-title">Cart</h1>
    <CartList></CartList>
    <div class="extra-panel">
      <button class="btn">Purcharse</button>
      <button class="btn" @click="moveToProduct">Move to Product</button>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/CartList.vue';

export default {
  components : {
    CartList
  },
  methods: {
    moveToProduct() {
      this.$router.push('/product');
    }
  }
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 3rem;
}
.extra-panel .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  border-style: solid !important;
}

</style>