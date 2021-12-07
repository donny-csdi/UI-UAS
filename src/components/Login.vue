<template>
    <div class="bg bg-light text-dark">
        <div class="card-header fw-bold">Login</div>
            <div class="card-body">
                <form class="needs-validation" validate action="../process/loginProcess.php" method="post">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input class="form-control" id="username" name="username" aria-describedby="emailHelp" required>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name="password" required>
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary" name="login">Login</button>
                    </div>
                </form>
                <p class="mt-2 mb-0">Belum punya akun ? <a href="./registerPage.php" class="textprimary">Klik Disini!</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>
