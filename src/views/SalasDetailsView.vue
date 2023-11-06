<template>
    <navbar-component></navbar-component>

    <div class="container mt-4">

        <h1 class="mb-3">Nova Sala</h1>

        <SalaDetailsComponent></SalaDetailsComponent>

    </div>
</template>
  
<script lang="ts">
import NavbarComponent from '@/components/NavBarComponent.vue';
import SalaDetailsComponent from '@/components/SalaDetailsComponent.vue';

export default {
    components: {
        NavbarComponent,
        SalaDetailsComponent
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {


    }
};
</script>
  
<style scoped>
/* Suas regras de estilo aqui */
</style>
  