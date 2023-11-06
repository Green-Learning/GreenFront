<template>
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Professor</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in salas" :key="item.id">
                <th> {{ item.id }} </th>
                <th> {{ item.nome }} </th>
                <th> {{ item.professor.nome }} </th>
                <th>
                    <div>
                        <RouterLink type="button"
                            :to="{ name: 'salas-cadastrar-editar', query: { id: item.id, form: 'editar' } }">Editar
                        </RouterLink>
                        <RouterLink type="button"
                            :to="{ name: 'salas-cadastrar-excluir', query: { id: item.id, form: 'excluir' } }">Excluir
                        </RouterLink>
                    </div>
                    
                </th>
            </tr>
        </tbody>
    </table>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Sala } from '../models/sala';
import salaCliente from '@/clients/sala.cliente';

interface SalaListComponent {
    $router: ReturnType<typeof useRouter>;
    listAll(): void;
}

export default defineComponent({
    data() {
        return {
            salas: new Array<Sala>()
        };
    },
    mounted() {
        this.findAll();
    },
    methods: {

        findAll() {
            salaCliente.listarTodos().then(sucess => {
                this.salas = sucess
            })
            .catch(error => {
                console.log(error)
            })
        },

    }
});
</script>
  
<style scoped></style>
  