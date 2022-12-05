<template>
    <div>
        <ul>
            <li v-for="product in products" v-bind:key="product.id">
                {{ product.name }} {{ product.price }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData() {
        // 페이지가 그려지기 전에 (컴포넌트 생성 전에) 실행되기 때문에 this 접근 안됨
        const rs = await axios.get('http://localhost:3000/products');
        const products = rs.data;
        return {
            products
        }
    },
    data() {
        return {
            products: []
        }
    },
    head : {
        title : 'PRODUCT'
    }
}
</script>