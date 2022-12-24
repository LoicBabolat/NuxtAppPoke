export const state = () => ({
    pokemons: [],
    pokemonsFilter: []
})

export const getters = {
    getPokemons: (state) => {
        return state.pokemons
    }
}

export const mutations = {
    SET_Pokemons(state, items) {
        state.pokemons = []
        state.pokemons.push(items)
    },

    more(state, object) {
        state.pokemons.push(object)
    }
}

export const actions = {
    async get({ commit }, number) {
        let poke = []
        for (let i = 0; i < number; i++) {
            let j = i + 1
            poke[i] = await this.$axios.$get('https://pokeapi.co/api/v2/pokemon/' + j + '/')
        }
        await commit('SET_Pokemons', poke)
    },

    async more({ commit }, affiche) {
        let poke = []
        for (let i = 0; i < affiche.number; i++) {
            let j = i + affiche.nberMore * affiche.number + 1
            poke[i] = await this.$axios.$get('https://pokeapi.co/api/v2/pokemon/' + j + '/')
        }
        await commit('more', poke)
    }
}
