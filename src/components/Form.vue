<template>
    <form id="controls" @submit.prevent="submit">
        <select name="x" ref="xVal" id="x-value">
            <option value="-3">-3</option>
            <option value="-2">-2</option>
            <option value="-1">-1</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <input
                ref="yVal"
                type="text"
                name="y"
                id="y-value"
                placeholder="(-3 ; +5)"
                required="required"
        />
        <select name="r" ref="rVal" id="r-value" @change.prevent="changeR">
            <option value="-3" disabled="true">-3</option>
            <option value="-2" disabled="true">-2</option>
            <option value="-1" disabled="true">-1</option>
            <option value="0" selected>0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <button type="submit" class="icon-button submit-button">
            <ion-icon name="checkmark"/>
        </button>
    </form>
</template>

<script>
    import {eventBus} from "../main";

    export default {
        name: "Form",
        methods: {
            submit() {
                if (this.checkForm()) {
                    let entry = {
                        x: +this.$refs.xVal.value,
                        y: +this.$refs.yVal.value.replace(",", "."),
                        r: +this.$refs.rVal.value
                    };
                    this.$emit("addentry", entry);
                }
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
