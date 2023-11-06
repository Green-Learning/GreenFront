<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #c48cbd !important;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="Logo" height="30">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto text-light">
                    <li class="nav-item">
                        <router-link to="/salas" class="nav-link text-light fw-semibold">Salas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/alunos" class="nav-link text-light fw-semibold">Alunos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Dashboard" class="nav-link text-light fw-semibold">Jogos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link text-light fw-semibold">Sair</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

interface NavBarComponent {
    $router: ReturnType<typeof useRouter>;
}

export default defineComponent({
    methods: {
        
    }
});
</script>
  
<style scoped>
/* Adicione estilos personalizados para o seu navbar se necessário */
</style>
  