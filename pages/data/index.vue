<template>
    <div>
        <NuxtLogo/>
        <div>DATA api 요청 페이지</div>
        <div>DATA 결과 (server) : {{apiValue}}</div>
        <div>DATA 결과 (client) : {{localValue}}</div>
        <div>
            <v-btn color="primary" @click="getData"> DATA 요청 </v-btn>
        </div>
        <div>
            <v-btn color="primary" @click="getProducts"> write products to console</v-btn>
        </div>
    </div>
</template>
<script>
import NuxtLogo from '@/components/NuxtLogo.vue';

export default {
    components: {
        NuxtLogo
    },
    setup() {
        
    },
    data() {
        return {
            apiValue: '',
            localValue: ''
        }
    },
    methods: {
        async getData() {
            const rs = await this.$axios.get('/api/');
            this.apiValue = rs.data;
            const whatTime = this.$moment().toLocaleString();
            this.localValue = `What time? : ${whatTime}`;
        },
        async getProducts() {
            const rs = await this.$axios.get('http://localhost:3000/products');
            console.log(rs);
        }
    }
}
</script>
