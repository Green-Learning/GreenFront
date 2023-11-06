<template>
    <h1 class="mb-3" v-if="this.form === undefined">Novo aluno</h1>
    <h1 class="mb-3" v-if="this.form === 'editar'">Editar aluno</h1>

    <form @submit.prevent="submitForm">

        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" name="nome" v-model="aluno.nome">
        </div>
        <div class="mb-3">
            <label for="idade" class="form-label">Idade</label>
            <input type="number" class="form-control" id="idade" name="idade" v-model="aluno.idade">
        </div>

        <div class="mb-3">
            <label for="recipient-name" class="m-auto col-form-label">Sala:</label>
            <select type="text" class="row ms-1 form-control " v-model="aluno.sala">
                <option v-for="item in sala" :value="item">{{ item.nome }}</option>
            </select>
        </div>

        <div class="col d-flex align-items-center justify-content-center">
            <router-link class="col col-md-1" to="/alunos">
                <button type="submit" class="btn btn-primary">Voltar</button>
            </router-link>
            <button type="submit" :disabled="buttonDisabled" v-if="this.form === undefined"
                class="btn btn-success mt-2 mb-2" @click="submitForm()"> Cadastrar</button>
            <button type="submit" :disabled="buttonDisabled" v-if="this.form === 'editar'" class="btn btn-warning mt-2 mb-2"
                @click="onClickEditar()"> Editar</button>
            <button type="submit" :disabled="buttonDisabled" v-if="this.form === 'excluir'" class="btn btn-danger mt-2 mb-2"
                @click="onClickExcluir()"> Excluir</button>
        </div>
    </form>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Aluno } from '@/models/aluno';
import alunoClient from '@/clients/aluno.client';
import { Sala } from '../models/sala';
import salaClient from '../clients/sala.cliente';

interface AlunosDetailsComponent {
    $router: ReturnType<typeof useRouter>;
    listAll(): void;
}

export default defineComponent({
    data() {
        return {
            aluno: new Aluno(),
            sala: new Array<Sala>(),
            buttonDisabled: false

        };
    },
    components: {

    },
    mounted() {

        if (this.id !== undefined) {
            this.findById(Number(this.id));
        }

        this.findAllSala();
    },
    computed: {
        id() {
            return this.$route.query.id
        },
        form() {
            return this.$route.query.form
        }
    },
    methods: {

        findAllSala() {
            salaClient.listarTodos().then(sucess => {
                this.sala = sucess;
            })
                .catch(error => {
                    console.log(error)
                })
        },
        submitForm() {
            this.buttonDisabled = true;
            alunoClient.cadastrar(this.aluno).then(sucess => {
                this.$router.push({ name: 'Alunos' });
            }).catch(error => {
                console.log(error)
            })
        },
        onClickEditar() {
            this.buttonDisabled = true;
            alunoClient.editar(this.aluno.id, this.aluno).then(sucess => {
                this.buttonDisabled = false;
                this.aluno = new Aluno()
                this.$router.push({ name: 'Alunos' });

            })
                .catch(error => {
                    console.log(error)
                })
        },
        onClickExcluir() {
            this.buttonDisabled = true;
            alunoClient.deletar(this.aluno.id).then(sucess => {
                this.buttonDisabled = false;
                this.aluno = new Aluno();
                this.$router.push({ name: 'Alunos' });

            })
                .catch(error => {
                    console.log(error);

                })
        },
        findById(id: number) {
            alunoClient.buscaPorId(id).then(sucess => {
                this.aluno = sucess
            })
                .catch(error => {
                    console.log(error)
                })
        }
    }
});
</script>
  
<style scoped></style>
  