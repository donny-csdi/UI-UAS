<template>
    <main>
        <v-container fluid fill-height>
            <v-layout flex align-center justify-center>
                <v-flex xs12 sm6 elevation-6>
                    <v-toolbar class="primary">
                        <v-toolbar-title class="white--text">
                            <h1>Login E-LIB</h1>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card>
                        <v-card-text class="pt-4">
                            <div>
                                <v-form v-model="valid" ref="form">
                                    <v-text-field label="Username" v-model="username" :rules="usernameRules" required></v-text-field>
                                    <v-text-field label="Password" v-model="password" type="password" min="8" :rules="passwordRules"></v-text-field>
                                    <v-layout justify-end>
                                        <v-btn class="mr-2" @click="submit" :class=" { 'grey draken-1 white--text' : valid,disabled: !valid } ">Login</v-btn>
                                        <v-btn @click="clear" class="grey draken-3 white--text">Clear</v-btn>
                                    </v-layout>
                                </v-form>
                            </div>
                        </v-card-text>
                    </v-card>
                    <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>{{ error_message }}</v-snackbar>
                </v-flex>
            </v-layout>
        </v-container>
    </main>
</template>

<style>
    @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");
</style>

<script>
    export default{
        name: "Login",
        data() {
            return{
                load: false,
                snackbar: false,
                error_message: '',
                color: '',
                valid: false,
                password: '',
                passwordRules: [
                    (v) => !!v || 'Password tidak boleh kosong !',
                ],
                username: '',
                usernameRules: [
                    (v) => !!v || 'Username tidak boleh kosong !',
                ]
            };
        },
        methods: {
            submit(){
                
            },
            clear(){
                this.$refs.form.reset()
            }
        },
    };
</script>
