<template>
  <div>
    <h1>제품 상세 페이지</h1>
    <img :src="product.imageUrl" :alt="product.name">
    <p>name: {{ product.name }}</p>
    <p>price: {{ product.price }}</p>
  </div>
</template>

<script>
import { fetchProductById } from '@/api/product/product';

export default {
    async asyncData({ params }) {
      const response = await fetchProductById(params.id);
      const product = response.data;
      if (product) {
        product.imageUrl += `?random=${Math.random()}`;
      }
      return { product }
    }
}
</script>

<style>

</style>