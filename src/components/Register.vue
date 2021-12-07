<template>
    <div class="bg bg-light text-dark">`
                <div class="card-header fw-bold">Register</div>
                <div class="card-body">
                    <form class="needs-validation"  @submit.prevent="handleSubmit">
                        <div class="mb-3">
                            <label for="name" class="form-label">Nama</label>
                            <input class="form-control"  placeholder="Nama Anda" required v-model="nama">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" placeholder="Alamat Email" required v-model="email">
                        </div>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input class="form-control" placeholder="Username" required v-model="username">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" placeholder="Kata Sandi" required v-model="password">
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary" name="register">Register</button>
                        </div>
                    </form>
                    <p class="mt-2 mb-0">Sudah punya akun ? <a href="./loginPage.php" class="text-primary">Login
                            Disini!</a></p>
                </div>
            </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Register',
        data(){
            return {
                nama: '',
                email: '',
                username: '',
                password: ''
            }
        },
        methods: {
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