<template>
    <div>
        <h1>{{ count() }}</h1>
    </div>
</template>

<script>


export default {
    name: 'Home',

    methods: {
        count() {
            this.$store.dispatch['Example/fetchCounter']
            return this.$store.getters['Example/getCounter']
        }
    }

}
</script>

<style>

</style>