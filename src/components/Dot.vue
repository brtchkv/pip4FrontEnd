<template>
    <circle :cx="dot.x * 20" :cy="-dot.y * 20" r="3" :fill="color"></circle>
</template>

<script>
    export default {
        name: "Dot",
        props: {
            dot: {type: Object},
            radius: {type: Number}
        },
        methods: {},
        computed: {
            color() {
                let r = this.radius;
                let x = this.dot.x;
                let y = this.dot.y;

                let green = "#4ced5c";
                let red = "#ff564a";

                if (x > 0 && y > 0) return red;
                if (x <= 0 && y >= 0 && x ** 2 + y ** 2 <= r ** 2) return green;
                if (x <= 0 && y < 0 && y > -x * 2 - r) return green;
                if (x > 0 && y <= 0 && x <= r && y >= -r / 2) return green;

                return red;
            }
        }
    };
</script>

<style></style>
