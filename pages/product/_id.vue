<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" class="btn" @click="addToCart()">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById, createCartItem } from '@/api/product/product';

export default {
    async asyncData({ params }) {
      const response = await fetchProductById(params.id);
      const product = response.data;
      if (product) {
        product.imageUrl += `?random=${Math.random()}`;
      }
      return { product }
    },
    methods: {
      async addToCart() {
        const response = await createCartItem(this.product);
        if (response.status === 201) {
          this.$store.commit('addCartItem', this.product);
          this.$router.push('/cart');
        } else {
          console.log('error!!')
        }
      }
    }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}

.btn {
  border-style: solid;
}
</style>