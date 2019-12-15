<template>
    <b-container class="login">
        <b-row class="row justify-content-center">
            <div>
                <b-nav small>
                    <b-nav-item disabled>Sign In</b-nav-item>
                    <b-nav-item to="/account/register">Register</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                </b-nav>
            </div>
        </b-row>
        <b-row class="text-center row justify-content-center">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-row class="text-center">
                    <b-col>
                        <p class="h4 text-center">Sign in</p>
                    </b-col>
                </b-row>
                <b-row class="text-center">
                    <b-col></b-col>
                    <b-form-group
                            id="input-group-1"
                            label="Nickname:"
                            label-for="text-nickname">
                        <b-form-input
                                id="text-nickname"
                                v-model="form.nickname"
                                type="nickname"
                                required
                                placeholder="Enter nickname"
                        ></b-form-input>
                    </b-form-group>
                    <b-col></b-col>
                </b-row>
                <b-row class="text-center">
                    <b-col></b-col>
                    <b-form-group @submit.stop.prevent
                                  id="input-group-2"
                                  label="Password:"
                                  label-for="text-password">
                        <b-form-input
                                type="password"
                                id="text-password"
                                v-model="form.password"
                                required
                                placeholder="Enter password">
                        </b-form-input>
                    </b-form-group>
                    <b-col></b-col>
                </b-row>
                <b-row class="text-center">
                    <b-col>
                        <b-button type="submit" variant="primary" size="sm">Submit</b-button>
                    </b-col>
                    <b-col></b-col>
                    <b-col>
                        <b-button type="reset" variant="danger" size="sm">Reset</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    nickname: '',
                    password: '',
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
                let user = {
                    username: this.username,
                    password: this.password
                };
                this.$store.dispatch(this.operation, user);
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.nickname = '';
                this.form.password = '';
                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                    this.show = true
                })
            },
            computed: {
                operation() {
                    return "LOGIN";
                }
            }
        }
    }
</script>

<style scoped>
    .login {
        height: 100%;
        margin: 0 auto;
        padding-bottom: 10px;
    }
</style>
