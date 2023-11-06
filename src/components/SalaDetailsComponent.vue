<template>
    <form @submit.prevent="submitForm">

        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" name="nome" v-model="salas.nome">
        </div>

        <!-- <div class="mb-3">
                <label for="recipient-name" class="m-auto col-form-label">Professor:</label>
                <select type="text" class="row ms-1" v-model="salas.professor">
                    <option v-for="item in professor"
                    :value="item">{{ item.nome }}</option>
                </select>
            </div> -->

            <div class="col d-flex align-items-center justify-content-center">
                <router-link class="col col-md-1" to="/salas">
                    <button type="submit" class="btn btn-success">Voltar</button>
                </router-link>
                <button type="submit" :disabled="buttonDisabled" v-if="this.form === undefined" class="btn btn-success mt-2 mb-2" @click="submitForm()"> Cadastrar</button>
                <button type="submit"  :disabled="buttonDisabled" v-if="this.form === 'editar'" class="btn btn-warning mt-2 mb-2" @click="onClickEditar()"> Editar</button>
                <button type="submit" :disabled="buttonDisabled" v-if="this.form === 'excluir'" class="btn btn-danger mt-2 mb-2" @click="onClickExcluir()"> Excluir</button>
            </div>
    </form>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import { Sala } from '../models/sala';
import  salaClient  from '../clients/sala.cliente';
import { Professor } from '../models/professor';
import professorClient from '@/clients/professor.client';

interface SalaDetailsComponent {
    $router: ReturnType<typeof useRouter>;
    listAll(): void;
}

export default defineComponent({
    data() {
        return {
            salas: new Sala(),
            professor: new Array<Professor>(),
            buttonDisabled : false
        };
    },
    components:{

    },
    mounted() {

        if(this.id !== undefined){
            this.findById(Number(this.id));
        }

        this.findAllProfessor();
    },
    computed:{
        id(){
            return this.$route.query.id
        },
        form(){
            return this.$route.query.form
        }
    },
    methods: {

        findAllProfessor(){
            professorClient.listarTodos().then(sucess =>{
                this.professor = sucess;
            })
            .catch(error =>{
                console.log(error)
            })
        },
        submitForm() {
            this.buttonDisabled = true;
            salaClient.cadastrar(this.salas).then(sucess => {
                this.$router.push({ name: 'Salas' });
            }).catch(error => {
                console.log(error)
            })
        },
        onClickEditar(){
            this.buttonDisabled = true;
            salaClient.editar(this.salas.id, this.salas).then(sucess => {
                this.buttonDisabled = false;
                this.salas = new Sala();
                this.$router.push({ name: 'Salas' });

            })
            .catch(error =>{
                console.log(error)
            })
        },
        onClickExcluir(){
            this.buttonDisabled = true;
            salaClient.deletar(this.salas.id).then(sucess =>{
                this.buttonDisabled = false;
                this.salas = new Sala();
                this.$router.push({ name: 'Salas' });

            })
            .catch(error =>{
                console.log(error);
                
            })
        },
        findById(id: number){
            salaClient.buscaPorId(id).then(sucess =>{
                this.salas = sucess
            })
            .catch(error =>{
                console.log(error)
            })
        }
    }
});
</script>
  
<style scoped></style>
  