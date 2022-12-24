export const state = () => ({
    panier: []
})


export const mutations = {
    increment(state, Poke) {
        let AlreadyExist = false
        state.panier.forEach(function (item) {
            if (Poke[0] == item[0]) {
                window.alert("Ce prduit est déjà dans le panier")
                AlreadyExist = true
            }
        })
        if (AlreadyExist == false) {
            state.panier.push(Poke)
        }
    },

    delete(state, index) {
        let limite = index + 1
        state.panier.splice(index, limite)
    }
}

export const actions = {
    async increment({ commit }, data) {
        let Poke = []
        Poke = data
        await commit("increment", Poke)
    },

    async delete({ commit }, index) {
        await commit("delete", index)
    }
}
