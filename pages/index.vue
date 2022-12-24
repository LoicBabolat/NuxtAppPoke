<template>

  <div>
    <div id="infosAffiche">
      <div>
        <label>Affiche par tranche de : </label>
        <select name="number" id="number">
          <option @click="ChangeNumber(12)" v-show="affiche.number !== 12" value="10">12</option>
          <option v-if="affiche.number === 12" value="12" selected>12</option>
          <option @click="ChangeNumber(20)" v-show="affiche.number !== 20" value="20">20</option>
          <option v-if="affiche.number === 20" value="20" selected>20</option>
          <option @click="ChangeNumber(40)" v-show="affiche.number !== 40" value="40">40</option>
          <option v-if="affiche.number === 40" value="40" selected>40</option>
        </select>
      </div>
      <div>
        <input type="text" v-model="search" name="search" id="search" placeholder="Nom de pokémon">
        <NuxtLink :to="{ name: 'ProductItem', params: { id: search } }">
          <input type="submit" name="Rechercher" value="Rechercher">
        </NuxtLink>
      </div>
    </div>
    <div v-for="pokeGpe in getPokemons()" id="carte">
      <ProductCard v-for="pokeInfos in pokeGpe" :key="pokeInfos['id']" :idPokemon="pokeInfos['id']"
        :image="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + pokeInfos['id'] + '.svg'"
        :name="pokeInfos['name']" :price="pokeInfos['base_experience']" />
    </div>
    <div id="more">
      <button @click="morePokemons()">Charger plus</button>
    </div>
  </div>

</template>

<script>
import ProductCard from '~/components/ProductCard.vue';

export default {
  name: 'IndexPage',

  components: {
    ProductCard
  },

  data() {
    return {
      search: "",
      affiche: {
        number: 12,
        nberMore: 1
      }
    }
  },

  methods: {

    ChangeNumber(nber) {
      this.affiche.number = nber;
      this.$store.dispatch('PokeStore/get', nber)
    },

    getPokemons() {
      return this.$store.state.PokeStore.pokemons
    },

    morePokemons() {
      this.affiche.nberMore += 1
      this.$store.dispatch('PokeStore/more', this.affiche)
    }

  },

  beforeCreate() {
    this.$store.dispatch('PokeStore/get', 12)
  }
}
</script>

<style>
#infosAffiche {
  padding-bottom: 0.2em;
  display: flex;
  justify-content: space-between;
}

#carte {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 3px;
  column-gap: 10px;
  padding-bottom: 3px;
}

#more {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  background-color: #e0e0e0;
}

@media screen and (min-width: 720px) {
  #carte {
    grid-template-columns: repeat(4, 1fr);
  }

}
</style>
