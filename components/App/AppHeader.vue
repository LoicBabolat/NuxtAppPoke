<template>
    <header @click.self="changeVisibilityHeader()">
        <NuxtLink id="logo" to="/">
            <Logo />
        </NuxtLink>
        <div id="panier">
            <button id="panierBtn" @click="changeVisibility()">Votre panier</button>
            <div v-if="visibilty" id="elements">
                <p>Votre panier s'affiche ici</p>
                <div id="infosPanier" v-for="element in getPanier()">
                    <p>{{ capitalizeFirstLetter(element[0]) }}</p>
                    <p>{{ element[1] }}</p>
                    <p>{{ element[1] * element[2] }} € </p>
                    <button @click="elementDelete(getIndex(getPanier(), element))">retirer</button>
                </div>

            </div>
        </div>
        <div @click="changeVisibility()" v-if="visibilty == true" id="opac"></div>
    </header>
</template>

<script>
import Logo from './Logo.vue';

export default {
    name: "AppHeader",

    data() {
        return {
            visibilty: false
        }
    },

    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        getPanier() {
            return this.$store.state.Panier.panier
        },

        getIndex(tab, element) {
            return tab.indexOf(element)
        },

        elementDelete(index) {
            this.$store.dispatch('Panier/delete', index)
            console.log("l'index est : ", index)
        },

        changeVisibility() {
            switch (this.visibilty) {
                case true:
                    this.visibilty = false
                    break;
                case false:
                    this.visibilty = true
                    break;
            }
        },

        changeVisibilityHeader() {
            if (this.visibilty == true) {
                this.visibilty = false
            }
        }
    },

    components: { Logo }
}
</script>

<style>
#infosPanier {
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid rgba(0, 0, 0, 0.35);
    padding: 0.5em 0 0.5em 0;
}

#opac {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 11vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.20);
}

#panierBtn {
    font-family: 'Montserrat';
    font-size: 1em;
    padding-right: 1em;
    padding-left: 1em;
    border: none;
    height: 100%;
    transition: background-color 0.4s;
}


header {
    z-index: 2;
    font-family: 'Montserrat';
    width: calc(100%);
    height: 11vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(0, 0, 0, 0.35);
}

#panier {
    z-index: 2;
    height: 100%;
    position: relative;
    justify-self: end;
    text-align: end;
    background-color: white;
}

#logo {
    padding-left: 1em;
}

#elements {
    top: calc(100% + 1px);
    left: -130%;
    right: 0;
    position: absolute;
    background-color: white;
    border-left: 2px solid rgba(0, 0, 0, 0.35);
    border-right: 2px solid rgba(0, 0, 0, 0.35);
    border-bottom: 2px solid rgba(0, 0, 0, 0.35);
    padding: 0.5em;
}

#elements>p:first-of-type {
    font-size: 1em;
    text-align: center;
}
</style>