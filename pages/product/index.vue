<template>
    <div class="app">
        <main>
            <div>
                <input type="text"/>
            </div>
            <ul>
                <li v-for="product in products" :key="product.id" class="item flex">
                    <img :src="product.imageUrl" :alt="product.name" class="product-image"/>
                    <p>{{ product.name }}</p>
                    <span>{{ product.price }}</span>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData() {
        // 페이지가 그려지기 전에 (컴포넌트 생성 전에) 실행되기 때문에 this 접근 안됨
        const respons = await axios.get('http://localhost:3000/products');
        const products = respons.data.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: `${product.imageUrl}?random=${Math.random()}` 
        }));
        return {
            products
        }
    },
    head : {
        title : 'PRODUCT'
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
  height: 300px;
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
}
</style>