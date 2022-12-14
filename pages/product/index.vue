<template>
    <div class="app">
        <main>
            <SearchInput v-model="searchKeyword" @search="searchProducts"></SearchInput>
            <ul>
                <li v-for="product in products" :key="product.id" class="item flex" @click="moveToProduct(product.id)">
                    <img :src="product.imageUrl" :alt="product.name" class="product-image"/>
                    <p>{{ product.name }}</p>
                    <span>{{ product.price }}</span>
                    <div>
                      <button type="button" class="add-btn" @click="addToCart(product)">Add to Cart</button>
                    </div>
                </li>
            </ul>
            <div class="cart-wrapper">
              <button class="btn" @click="moveToCart">Move to Cart</button>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
import SearchInput from '@/components/SearchInput.vue';
import { fetchProductByKeyword, createCartItem } from '@/api/product/product';

export default {
    components : {
      SearchInput
    },
    async asyncData() {
        // 페이지가 그려지기 전에 (컴포넌트 생성 전에) 실행되기 때문에 this 접근 안됨
        const response = await axios.get('http://localhost:3000/products');
        const products = response.data.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: `${product.imageUrl}?random=${Math.random()}` 
        }));
        return {
            products
        }
    },
    data() {
      return {
        searchKeyword: ''
      }
    },
    head: {
        title : 'PRODUCT'
    },
    methods: {
      moveToProduct(id) {
        this.$router.push(`/product/${id}`);
      },
      async searchProducts() {
        const response = await fetchProductByKeyword(this.searchKeyword);
        this.products = response.data.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            imageUrl: `${product.imageUrl}?random=${Math.random()}` 
        }));
      },
      async addToCart(item) {
        const response = await createCartItem(item);
        if (response.status === 201) {
          this.$store.commit('addCartItem', item);
          this.$router.push('/cart');
        } else {
          console.log('error!!')
        }
      },
      moveToCart() {
        this.$router.push('/cart');
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

.add-btn {
  border-style: solid;
}
</style>