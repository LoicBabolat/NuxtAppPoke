<template>
    <div>
        <AppHeader :visibility="false" />
        <Nuxt class="default" />
    </div>
</template>

<script>
import AppHeader from '/components/App/AppHeader.vue';
import AppFooter from '/components/App/AppFooter.vue';

export default {
    name: 'default',
    components: {
        AppHeader, AppFooter
    }
}
</script>

<style>
body {
    margin: 0;
    font-family: 'Montserrat';
}

a {
    color: black;
    text-decoration: none;
}

.default {
    padding: 2em 10% 0 10%;
    min-height: 90vh;
    background-color: #e0e0e0;
}

header,
footer {
    background-color: white;
}
</style>