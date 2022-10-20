<template>    
        <FormFormulario @aoSalvarTarefa="salvarTarefa" />
            <div class="lista">
                <FormBox v-if="listaVazia">
                 Você ainda não tem atividades hoje. :(
                </FormBox>
                    <FormTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa='tarefa'/>          
            </div>
  </template>
  
  <script>
  import {defineComponent} from 'vue';
  import FormFormulario from '../components/FormFormulario.vue';
  import FormTarefa from '../components/FormTarefa.vue';
  import FormBox from '../components/FormBox.vue';
  // import IFormTarefa from './interface/IFormTarefa'    
  
  export default defineComponent({
      name: 'App',
      components:{
        FormFormulario,
        FormTarefa,
        FormBox
      },
  
      data(){
        return {
          tarefas: [],
        }
      },
      computed:{
        listaVazia (){
          return this.tarefas.length == 0
        }
      },
      methods:{
        salvarTarefa(tarefa){
          this.tarefas.push(tarefa)
        },
      }
  });
  </script>
  
  