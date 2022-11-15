<template>
    <v-app id="inspire">
        <v-main>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-form @submit.prevent>
                                <v-toolbar dark color="primary">
                                    <v-toolbar-title>관리자 로그인</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-card-text>
                                    <v-text-field id="id" v-model="frmId" class="mdi mdi-identifier" name="id" label="id" type="text"></v-text-field>
                                    <v-text-field id="pw" v-model="frmPw" class="mdi mdi-lock" name="pw" label="pw" type="password"></v-text-field>
                                </v-card-text>
                                <p v-if="returnMsg">{{returnMsg}}</p>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" @click="login">로그인</v-btn>
                                </v-card-actions>
                            </v-form>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            returnMsg: null,
            frmId: '',
            frmPw: ''
        }
    },
    methods: {
        async login() {
            const rs = await this.$axios.get('/api/login');
            console.log('response : ', rs.data);
        }
    }
}
</script>