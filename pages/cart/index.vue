<template>
  <div class="app">
      <main>
          <p>Cart</p>
          <ul>
              <li v-for="cartItem in $store.state.cartItems" :key="cartItem.id" class="item flex" >
                  <img :src="cartItem.imageUrl" :alt="cartItem.name" class="product-image"/>
                  <p>{{ cartItem.name }}</p>
                  <span>{{ cartItem.price }}</span>
              </li>
          </ul>
          <div class="cart-wrapper">
            <button class="btn" @click="moveToProduct">Move to Product</button>
          </div>
      </main>
  </div>
</template>

<script>
export default {
  methods: {
    moveToProduct() {
      this.$router.push('/product');
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 345px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  border-style: solid !important;
}

</style>