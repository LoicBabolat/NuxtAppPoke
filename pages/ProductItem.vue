<template>

    <div>
        <h1>{{ poke.name }}</h1>
        <div id="InfosPoke">
            <div>
                <p>Height: {{ poke.height }}</p>
                <p>Weight: {{ poke.weight }}</p>
                <p>Abilties</p>
                <ul>
                    <li v-for="ability in poke.abilities" :key="ability.ability.name">{{ ability.ability.name }}</li>
                </ul>
            </div>
            <div>
                <p v-for="stat in poke.stats">{{ stat.stat.name }}: {{ stat.base_stat }}</p>
            </div>
            <img id="itemImg"
                :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + poke.id + '.svg'"
                :alt="'Une image du pokemon ' + poke.name">
        </div>
        <button @click="Increment()">Ajouter au panier</button>
        <div>
            <p><button @click="baisseQuantity()">-</button> {{ quantity }} <button
                    @click="augmenteQuantity()">+</button></p>
            <p>prix: {{ poke.base_experience * quantity }} €</p>
        </div>
        <!-- <p>{{ getPanier() }}</p> -->
    </div>
</template>

<script>

export default {
    name: 'ProductItem',

    data() {
        return {
            idPoke: this.$route.params.id,
            poke: [],
            quantity: 1
        }
    },

    async fetch() {
        let pokeUrl = 'https://pokeapi.co/api/v2/pokemon/' + this.idPoke + '/'
        this.poke = await fetch(
            pokeUrl
        ).then(res => res.json())
    },

    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },

        Increment() {
            this.$store.dispatch('Panier/increment', [this.poke.name, this.quantity, this.poke.base_experience])
        },

        baisseQuantity() {
            if (this.quantity > 1) {
                this.quantity -= 1
            }
        },

        augmenteQuantity() {
            this.quantity += 1
        }
    }


}
</script>

<style>
ul {
    padding-left: 15px;
}

#InfosPoke {
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    gap: 2em;
}

#itemImg {
    width: 100%;
    height: auto;
}
</style>