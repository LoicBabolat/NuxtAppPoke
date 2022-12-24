<template>
    <div class="card">
        <NuxtLink :to="{ name: 'ProductItem', params: { id: idPokemon } }">
            <div id="gridPoke">
                <div id="divImg">
                    <img class="img_pokemon" :src="image" :alt="'Voici une image du pokemon {{ name }} '">
                </div>
                <div>

                    <h3>{{ capitalizeFirstLetter(name) }}</h3>
                    <p> {{ price }} €</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: [
        "image", "name", "price", "idPokemon"
    ],

    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
}
</script>

<style>
.card {
    width: 100%;
    background-color: white;
}

.img_pokemon {
    width: 80%;
    height: auto;
}

#gridPoke {
    margin: 5px;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#divImg {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>