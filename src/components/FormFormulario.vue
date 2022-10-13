<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa deseja iniciar?" v-model="descricao">
            </div>
            <div class="column">
                <FormTemporizador @aoTemporizadorFinalisado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue';
import FormTemporizador from './FormTemporizador.vue'


export default defineComponent({
    name: "FormFormulario",
    components: {
        FormTemporizador
    },
    data(){
        return{
            descricao:''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido){
            console.log("tempo decorrido: ", tempoDecorrido),
            console.log("Descricao: ", this.descricao),
            this.descricao = ''
        }
    }
});
</script>