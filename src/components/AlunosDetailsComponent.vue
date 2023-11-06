<template>
    <form @submit.prevent="submitForm">

        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" name="nome" v-model="aluno.nome">
        </div>
        <div class="mb-3">
            <label for="idade" class="form-label">Idade</label>
            <input type="number" class="form-control" id="idade" name="idade" v-model="aluno.idade">
        </div>

        <button type="submit" class="btn btn-success">Salvar</button>
    </form>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Aluno } from '@/models/aluno';
import alunoClient from '@/clients/aluno.client';

interface AlunosDetailsComponent {
    $router: ReturnType<typeof useRouter>;
    listAll(): void;
}

export default defineComponent({
    data() {
        return {
            aluno: new Aluno()
        };
    },
    mounted() {
    },
    methods: {

        submitForm() {
            alunoClient.cadastrar(this.aluno).then(sucess => {
                this.$router.push({ name: 'Alunos' });
            }).catch(error => {
                console.log(error)
            })
        }
    }
});
</script>
  
<style scoped></style>
  