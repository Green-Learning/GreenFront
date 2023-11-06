<template>
        <navbar-component></navbar-component>

        <div class="container mt-4">

            <div class="col d-flex justify-content-between align-items-center">
                <h1 class="mb-3">Lista de alunos</h1>
                <RouterLink to="/alunos/details"><button type="button" class="btn btn-success fw-semibold">NOVO</button></RouterLink>
            </div>

            <alunos-list-component></alunos-list-component>
        </div>
</template>
  
<script lang="ts">
import { RouterLink } from 'vue-router';
import NavbarComponent from '@/components/NavBarComponent.vue';
import AlunosListComponent from '@/components/AlunosListComponent.vue';

export default {
    components: {
        NavbarComponent,
        AlunosListComponent,
        RouterLink

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
  