<template>
    <!--    <table>-->
    <!--        <thead>-->
    <!--        <tr>-->
    <!--            <th>x</th>-->
    <!--            <th>y</th>-->
    <!--            <th>r</th>-->
    <!--            <th>hit</th>-->
    <!--        </tr>-->
    <!--        </thead>-->
    <!--        <tbody>-->
    <!--        <tr-->
    <!--                id="table"-->
    <!--                v-for="entry in entries.slice(entries.length - 9, entries.length)"-->
    <!--                :key="entry"-->
    <!--        >-->
    <!--            <td>{{ entry.x }}</td>-->
    <!--            <td>{{ entry.y }}</td>-->
    <!--            <td>{{ entry.r }}</td>-->
    <!--            <td>{{ entry.hit }}</td>-->
    <!--        </tr>-->
    <!--        </tbody>-->
    <!--    </table>-->
    <b-container fluid class="text-center justify-content-center" style="padding-bottom: 15px">
        <b-table
                :sticky-header="true"
                :no-border-collapse="false"
                responsive
                :items="entries"
                :fields="fields"
                style="margin: auto;"
                class="text-center justify-content-center col-md-10"
        >
        </b-table>
    </b-container>
</template>

<script>
    export default {
        name: "Table",
        props: {
            entries: {type: Array}
        },
        data() {
            return {
                fields: [
                    'x',
                    'y',
                    'r',
                    'result'
                ],
                items: [
                    {x: 1, y: 0, r: 1, result: 2},
                    {x: 2, y: 0, r: 1, result: 2},
                    {x: 3, y: 0, r: 1, result: 2},
                    {x: 4, y: 0, r: 1, result: 2},
                    {x: 5, y: 0, r: 1, result: 2},
                    {x: 6, y: 0, r: 1, result: 2},
                    {x: 7, y: 0, r: 1, result: 2},
                    {x: 8, y: 0, r: 1, result: 2},
                    {x: 9, y: 0, r: 1, result: 2},
                    {x: 10, y: 0, r: 1, result: 2}
                ]
            }
        }
    };
</script>

<style lang="scss" scoped>
</style>
