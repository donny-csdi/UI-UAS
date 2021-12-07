<template>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="intro">
                        <h2>WELCOME TO E-LIB</h2>
                        <p>Menyediakan berbagai macam buku menarik yang dapat Anda pinjam dan nikmati.&nbsp;</p><a class="btn btn-primary" name="register" role="button" href="/register">REGISTER NOW</a>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="d-none d-md-block phone-mockup"><img class="device" src="../../src/assets/img/book.png" style="width:250px;"></div>
                </div>
            </div>
            <div class="intro">
                <h2 class="text-center">Features </h2>
                <p class="text-center">E-Lib memiliki berbagai fitur yang kami rancang bagi pengguna sekalian</p>
            </div>
            <div class="row justify-content-center features">
                <div class="col-sm-6 col-md-5 col-lg-4 item">
                    <div class="box"><a href="/login"><img src="../../src/assets/img/pinjam.png" style="width: 150px;height:125px; margin-left:auto; margin-right:auto;display:block;"></a>
                        <h3 class="name">Pinjam Buku</h3>
                        <p class="description" style="text-align:center;">Pinjam Buku seecara online</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-4 item">
                    <div class="box"><a href="/login"><img src="../../src/assets/img/reservation.png" style="width: 150px;height:125px; margin-left:auto; margin-right:auto;display:block;"></a>
                        <h3 class="name">Reservasi Perpustakaan</h3>
                        <p class="description" style="text-align:center;">Pesan tempat anda di perustakaan</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-4 item">
                    <div class="box"><a href="/login"><img src="../../src/assets/img/icon.png" style="width: 150px;height:125px; margin-left:auto; margin-right:auto;display:block;"></a>
                        <h3 class="name">Edit Profile</h3>
                        <p class="description" style="text-align:center;">Edit Profile anda dengan mudah</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>
