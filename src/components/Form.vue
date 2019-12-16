<template>
    <b-container fluid class="text-center" v-if="show" id="form">
        <b-form-group id="controls" @submit="onSubmit">
            <b-form-group>
                <p class="h5 text-center">X</p>
                <b-form-radio-group class="inline text-center justify-content-center"
                                    v-model="selectedX"
                                    :options="optionsX"
                                    :state="stateX"
                                    name="radioX"
                                    required>
                    <b-form-invalid-feedback :state="stateX">Please select one</b-form-invalid-feedback>
                    <b-form-valid-feedback :state="stateX">Good</b-form-valid-feedback>
                </b-form-radio-group>
            </b-form-group>
            <b-row class="text-center">
                <b-col></b-col>

                <b-form-group :invalid-feedback="invalidFeedbackY"
                              :valid-feedback="validFeedbackY"
                              :state="stateY">
                    <b-form-input
                            id="y-value"
                            v-model="selectedY"
                            type="number"
                            name="inputY"
                            required
                            placeholder="Enter Y"
                            :state="stateY" trim
                    ></b-form-input>
                </b-form-group>
                <b-col></b-col>
            </b-row>

            <b-form-group>
                <p class="h5 text-center">R</p>
                <b-form-radio-group class="text-center justify-content-center"
                                    v-model="selectedR"
                                    :options="optionsR"
                                    :state="stateR"
                                    name="radioR"
                                    required>
                    <b-form-invalid-feedback :state="stateR">Please select one</b-form-invalid-feedback>
                    <b-form-valid-feedback :state="stateR">Good</b-form-valid-feedback>
                </b-form-radio-group>
            </b-form-group>
            <b-row class="text-center">
                <b-col>
                    <b-button type="submit" variant="primary" size="sm">Submit</b-button>
                </b-col>
            </b-row>
        </b-form-group>
    </b-container>
</template>

<script>
    import {eventBus} from "../main";

    export default {
        data() {
            return {
                selectedX: null,
                selectedR: null,
                selectedY: null,
                optionsX: [
                    {text: '-3', value: '-3'},
                    {text: '-2', value: '-2'},
                    {text: '-1', value: '-1'},
                    {text: '0', value: '0'},
                    {text: '1', value: '1'},
                    {text: '2', value: '2'},
                    {text: '3', value: '3'},
                    {text: '4', value: '4'},
                    {text: '5', value: '5'}
                ],
                optionsR: [
                    {text: '-3', value: '-3'},
                    {text: '-2', value: '-2'},
                    {text: '-1', value: '-1'},
                    {text: '0', value: '0'},
                    {text: '1', value: '1'},
                    {text: '2', value: '2'},
                    {text: '3', value: '3'},
                    {text: '4', value: '4'},
                    {text: '5', value: '5'}
                ],
                show: true
            }
        },
        computed: {
            stateX() {
                return Boolean(this.selectedX);
            },
            stateR() {
                return Boolean(this.selectedR);
            },

            stateY() {
                return Boolean(this.selectedY) && +this.selectedY >= -3 && +this.selectedY <= 5;
            },

            invalidFeedbackY() {
                if (this.selectedY === null) {
                    return ''
                } else if (Boolean(this.selectedY) && (+this.selectedY < -3 || +this.selectedY > 5)) {
                    return 'Enter number in range of -3..5'
                } else {
                    return 'Please enter something'
                }
            },
            validFeedbackY() {
                return this.state === true ? 'Good' : ''
            },
        },
        name: "Form",
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                let entry = {
                    x: +this.selectedX,
                    y: +this.selectedY.replace(",", "."),
                    r: +this.selectedR
                };
                this.$emit("addentry", entry);
            },
            checkForm() {
                let xFine = this.$refs.xVal.value != null;
                let yFine = this.$refs.yVal.value !== "";
                let rFine = this.$refs.rVal.value != null;
                return xFine && yFine && rFine;
            },
            changeR() {
                let r = this.$refs.rVal;
                if (r.value < 0) alert("stop, just stop");
                let rad = r.value;
                eventBus.$emit("radiusChanged", 20 * rad + "");
            },
            limitInput(field, min, max, length) {
                field.onkeypress = e => {
                    // Anything but numbers is blocked
                    if (!("+-1234567890.,".indexOf(e.key) >= 0)) return false;
                    // Blocked if too long
                    if (field.value.length > length) return false;
                    // Sign is blocked if length >= 1
                    if (field.value.length >= 1 && "+-".indexOf(e.key) >= 0) return false;
                    // Separator is blocked if exists
                    if (
                        (field.value.indexOf(",") >= 0 ||
                            field.value.indexOf(".") >= 0 ||
                            field.value == "" ||
                            "+-".indexOf(field.value) >= 0) &&
                        ".,".indexOf(e.key) >= 0
                    ) {
                        return false;
                    }
                    // Blocked if out of bounds
                    if (
                        +("" + field.value + e.key) >= max ||
                        +("" + field.value + e.key) <= min
                    )
                        return false;
                };
            }
        },
        mounted() {
            this.limitInput(this.$refs.yVal, -3, 5, 8);
        }
    };
</script>

<style scoped>
    form {
        display: inline-flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 250px;
        height: 250px;
    }

    select,
    input[type="text"] {
        font-size: 1.6rem;
    }

    select {
        text-align: center;
        background: none;
        border: none;
    }

    input[type="text"] {
        text-align: center;
    }

    .submit-button {
        color: white;
        background-color: rgb(81, 197, 52);
        height: 30px;
        border-radius: 5px;
        padding-top: 3px;
    }
</style>
