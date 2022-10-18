<template>
    <div class="box formulario">
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
    emits:['aoSalvarTarefa'],
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
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao
            })
            this.descricao = ''
        }
    }
});
</script>

<style>
.formulario{
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>