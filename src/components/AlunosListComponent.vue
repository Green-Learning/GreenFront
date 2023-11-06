<template>
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Idade</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in alunos" :key="item.id">
                <th>{{ item.id }}</th>
                <th>{{ item.nome }}</th>
                <th> {{ item.idade }}</th>
                <th>
                    <div>
                        <!-- <RouterLink type="button"
                            :to="{ name: '/alunos/details', params: { aluno : item } }">Editar
                        </RouterLink> -->
                        <!-- <RouterLink type="button"
                            :to="{ name: 'alunos-cadastrar-excluir', query: { id: item.id, form: 'excluir' } }">Excluir
                        </RouterLink> -->
                    </div>
                </th>
            </tr>
        </tbody>
    </table>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Aluno } from '@/models/aluno';
import alunoClient from '@/clients/aluno.client';

interface AlunosListComponent {
    $router: ReturnType<typeof useRouter>;
    listAll(): void;
}

export default defineComponent({
    data() {
        return {
            alunos: [] as Aluno[]
        };
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            alunoClient.listarTodos().then(sucess => {
                this.alunos = sucess
            })
                .catch(error => {
                    console.log(error)
                })
        }
    }
});
</script>
  
<style scoped></style>
  