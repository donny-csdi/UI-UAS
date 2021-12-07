<template>
    <div>
    <v-app id="inspire">
            <v-main>
                    <v-toolbar
                    color="primary"
                    dark>
                    <v-toolbar-title>Register Form</v-toolbar-title>
                    <v-spacer />
                    </v-toolbar>
                    <v-card-text>
                        <v-form @submit.prevent="handleSubmit">
                            <v-text-field
                            v-model="registration.nama"
                            label="Nama"
                            name="nama"
                            prepend-icon="mdi-account"
                            type="text"
                            :rules="namaRules" required>
                            </v-text-field>

                            <v-text-field
                            v-model="registration.email"
                            label="Email"
                            name="email"
                            prepend-icon="mdi-email"
                            type="email"
                            :rules="emailRules" required>
                            </v-text-field>
                            
                            <v-text-field
                            v-model="registration.username"
                            label="Username"
                            name="username"
                            prepend-icon="mdi-account"
                            type="text"
                            :rules="usernameRules" required>
                            </v-text-field>

                            <v-text-field
                            v-model="registration.password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            min="8"
                            :rules="passwordRules" required>
                            </v-text-field>

                            <v-card-actions>
                                <p>Sudah punya akun ? <router-link :to="{name: 'Login'}">Login</router-link></p>
                                <v-spacer />
                                <v-btn class="mr-2" @click="submit" :class=" { 'grey draken-1 white--text' : valid,disabled: !valid } ">Register</v-btn>
                            </v-card-actions>
                        </v-form>
                        <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>{{ error_message }}</v-snackbar>
                    </v-card-text>
            </v-main>
    </v-app>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Register',
        data(){
            return {
                load: false,
                snackbar: false,
                error_message: '',
                color: '',
                valid: false,
                 emailRules: [
                    (v) => !!v || 'E-mail tidak boleh kosong !',
                ],
                namaRules: [
                    (v) => !!v || 'Nama tidak boleh kosong !',
                ],
                passwordRules: [
                    (v) => !!v || 'Password tidak boleh kosong !',
                ],
                usernameRules: [
                    (v) => !!v || 'Username tidak boleh kosong !',
                ],
                registration: {
                    nama: '',
                    email: '',
                    username: '',
                    password: '',
                }
            }
        },
        methods: {

            submit() {
                
            },
            handleSubmit(){
                const data = {
                    nama: this.nama,
                    email: this.email,
                    username: this.username,
                    password: this.password
                };

                axios.post('register', data)
                    .then(
                        res => {
                            console.log(res)
                        }
                    ).catch(
                        err => {
                            console.log(err)
                        }
                    )

            }
        }
    }
</script>