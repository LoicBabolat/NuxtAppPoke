export const state = () => ({
    counter: 7
})

export const getters = {
    getCounter: (state) => {
        return state.counter
    }
}

export const mutations = {
    increment(state, value) {
        state.counter = value
    }
}

export const actions = {
    async fetchCounter({ commit, state }) {
        let actionsCounter = state.counter + 1
        commit("increment", actionsCounter)
    }
}
