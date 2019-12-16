<template>
    <b-container class="login">
        <b-row class="row justify-content-center">
            <div>
                <b-nav small>
                    <b-nav-item to="/account/login">Sign In</b-nav-item>
                    <b-nav-item disabled>Register</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                </b-nav>
            </div>
        </b-row>
        <b-row class="text-center row justify-content-center">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-row class="text-center">
                    <b-col>
                        <p class="h4 text-center">Register</p>
                    </b-col>
                </b-row>
                <b-row class="text-center">
                    <b-col></b-col>
                    <b-form-group
                            id="input-group-1"
                            label="Nickname:"
                            label-for="text-nickname"
                            :invalid-feedback="invalidFeedbackN"
                            :valid-feedback="validFeedbackN"
                            :state="stateN">
                        <b-form-input
                                id="text-nickname"
                                v-model="form.nickname"
                                type="nickname"
                                required
                                placeholder="Enter nickname"
                                :state="stateN" trim
                        ></b-form-input>
                    </b-form-group>
                    <b-col></b-col>
                </b-row>
                <b-row class="text-center">
                    <b-col></b-col>
                    <b-form-group @submit.stop.prevent
                                  id="input-group-2"
                                  label="Password:"
                                  label-for="text-password"
                                  :invalid-feedback="invalidFeedback"
                                  :valid-feedback="validFeedback"
                                  :state="state">
                        <b-form-input
                                type="password"
                                id="text-password"
                                v-model="form.password"
                                required
                                placeholder="Enter password"
                                :state="state" trim>
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
        computed: {
            state() {
                return this.form.password.length >= 4
            },
            invalidFeedback() {
                if (this.form.password.length > 4) {
                    return ''
                } else if (this.form.password.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Please enter something'
                }
            },
            validFeedback() {
                return this.state === true ? 'Thank you' : ''
            },

            stateN() {
                return this.form.nickname.length >= 4
            },
            invalidFeedbackN() {
                if (this.form.nickname.length > 4) {
                    return ''
                } else if (this.form.nickname.length > 0) {
                    return 'Enter at least 4 characters'
                } else {
                    return 'Please enter something'
                }
            },
            validFeedbackN() {
                return this.state === true ? 'Thank you' : ''
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                let user = {
                    username: this.form.nickname,
                    password: this.form.password
                };
                if (this.form.nickname.length >= 4 && this.form.password.length >= 4) {
                    this.$store.dispatch("REGISTER", user);
                }
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
            submit() {
                let user = {
                    username: this.username,
                    password: this.password
                };
                this.$store.dispatch("REGISTER", user);
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
