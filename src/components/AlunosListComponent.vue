<template>

    <table class="table">
        <thead>
            <tr>
                <th scope="col" class="text-center">#</th>
                <th scope="col" class="text-center">Nome</th>
                <th scope="col" class="text-center">Idade</th>
                <th scope="col" class="text-center">Sala</th>
                <th scope="col" class="text-center">Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in alunos" :key="item.id">
                <td class="text-center"> {{ item.id }} </td>
                <td class="text-center"> {{ item.nome }} </td>
                <td class="text-center"> {{ item.idade }} </td>
                <td class="text-center"> {{ item.sala.nome }} </td>
                <td class="text-center">
                    <div>
                        <RouterLink type="button" class="btn btn-warning me-2"
                            :to="{ name: 'alunos-cadastrar-editar', query: { id: item.id, form: 'editar' } }">Editar
                        </RouterLink>
                        <RouterLink type="button" class="btn btn-danger"
                            :to="{ name: 'alunos-cadastrar-excluir', query: { id: item.id, form: 'excluir' } }">Excluir
                        </RouterLink>
                    </div>
                    
                </td>
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
            alunos: new Array<Aluno>()
        };
    },
    mounted() {
        this.findAll();
    },
    methods: {

        findAll() {
            alunoClient.listarTodos().then(sucess => {
                this.alunos = sucess
                console.log(sucess);
            })
            .catch(error => {
                console.log(error)
            })
        },

    }
});
</script>
  
<style scoped></style>
  