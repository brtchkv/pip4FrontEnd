<template>
    <table>
        <thead>
        <tr>
            <th>x</th>
            <th>y</th>
            <th>r</th>
            <th>hit</th>
        </tr>
        </thead>
        <tbody>
        <tr
                id="table"
                v-for="entry in entries.slice(entries.length - 9, entries.length)"
                :key="entry"
        >
            <td>{{ entry.x }}</td>
            <td>{{ entry.y }}</td>
            <td>{{ entry.r }}</td>
            <td>{{ entry.hit }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "Table",
        props: {
            entries: {type: Array}
        }
    };
</script>

<style lang="scss" scoped>
    table {
        width: 250px;
    }

    #table {
        width: 100%;

        & td {
            width: 25%;
            text-align: center;
        }
    }
</style>
