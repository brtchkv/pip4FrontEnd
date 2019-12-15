<template>
    <div class="time">
        <span id="date" :title="date">{{ day }}</span>
        <span style="margin:0 2px;"></span>
        <span id="time">{{ time }}</span>
    </div>
</template>

<script>
    export default {
        name: "TimeAndDate",
        data() {
            return {
                time: "",
                date: "",
                day: "",
                week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            };
        },
        methods: {
            updateTime() {
                let d = new Date();
                this.time =
                    (d.getHours() < 10 ? "0" : "") +
                    d.getHours() +
                    ":" +
                    (d.getMinutes() < 10 ? "0" : "") +
                    d.getMinutes();
                this.date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
                this.day = this.week[d.getDay() - 1];
            }
        },
        created() {
            this.updateTime();
            setInterval(this.updateTime, 11000);
        }
    };
</script>

<style scoped language="scss"></style>
