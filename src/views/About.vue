<template>
    <b-container fluid class="text-center justify-content-center">
        <b-row class="row justify-content-center">
            <b-navbar class="text-center justify-content-center">

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item to="/account/login"><span class="text-primary">Sign In</span></b-nav-item>
                    </b-navbar-nav>

                    <b-navbar-nav class="ml-auto">
                        <b-navbar-nav center>
                            <b-nav-item to="/account/register"><span class="text-primary">Register</span>
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-navbar-nav right>
                            <b-nav-item to="/about" disabled>About
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
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
</style>