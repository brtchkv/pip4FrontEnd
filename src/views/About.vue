<template>
    <b-container class="about">
        <b-row class="row justify-content-center">
            <div>
                <b-nav small>
                    <b-nav-item to="/account/login">Sign In</b-nav-item>
                    <b-nav-item to="/account/register">Register</b-nav-item>
                    <b-nav-item disabled>About</b-nav-item>
                </b-nav>
            </div>
        </b-row>
        <div class="col justify-content-center">
            <p></p>
            <p></p>
            <p></p>
            <p class="text-center">Вариант: 20191</p>
            <p class="text-center">Backend: Венщиков</p>
            <p class="text-center">Frontend: Братчиков</p>
            <p class="text-center">Группа: P3201</p>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    .about {
        height: 100%;
        margin: 0 auto;
        padding-bottom: 10px;
    }
</style>