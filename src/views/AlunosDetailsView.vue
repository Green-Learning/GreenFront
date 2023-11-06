<template>
    <navbar-component></navbar-component>

    <div class="container mt-4">

        <AlunosDetailsComponent></AlunosDetailsComponent>

    </div>
</template>
  
<script lang="ts">
import NavbarComponent from '@/components/NavBarComponent.vue';
import AlunosDetailsComponent from '@/components/AlunosDetailsComponent.vue';

export default {
    components: {
        NavbarComponent,
        AlunosDetailsComponent
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
  