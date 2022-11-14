<template>
    <div>
        <div>DATA api 요청 페이지</div>
        <div>DATA 결과 : {{apiValue}}</div>
        <div>
            <v-btn color="primary" @click="getData"> DATA 요청 </v-btn>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
    data() {
        return {
            apiValue: ''
        }
    },
    methods: {
        async getData() {
            const rs = await this.$axios.get('/api/');
            console.log('response : ', rs);
            this.apiValue = rs.data;
        }
    }
}
</script>
