<template>
    <div>
        <p>{{ getPokemons() }}</p>
    </div>
</template>

<script>
import Logo from '~/components/App/Logo.vue';

export default {
    name: "Home",

    data() {
        return {
            poke: 'pokemon'
        }
    },

    components: {
        Logo
    },

    methods: {
        getPokemons() {
            return this.$store.state.PokeStore.pokemons
        }
    },

    beforeCreate() {
        this.$store.dispatch('PokeStore/')
    }


}
</script>

<style>

</style>