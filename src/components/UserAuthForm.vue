<template>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1">
            <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter name"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
</template>

<script>
    export default {
        name: "UserAuthForm",
        props: {
            type: {
                type: String
            }
        },
        data() {
            return {
                username: "",
                password: ""
            };
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.email = '';
                this.form.name = '';
                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                    this.show = true;
                });
            },
            submit() {
                let user = {
                    username: this.username,
                    password: this.password
                };
                this.$store.dispatch(this.operation, user);
            }
        },
        computed: {
            operation() {
                return this.type === "login" ? "LOGIN" : "REGISTER";
            }
        }
    };
</script>

<style scoped></style>
