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
import {ADICIONA_TAREFA, ATUALIZA_TAREFA } from "@/store/tipo-Mutacoes";

// import IFormTarefa from './interface/IFormTarefa'    

export default defineComponent({
  name: 'FormuLario',
  components:{
    FormFormulario,
    FormTarefa,
    FormBox
  },

  props:{
    id:{
        type: String,
    }
  },

  mounted(){
    if(this.id){
        const tarefa = this.store.state.tarefas.find(tar => tar.id == this.id);
        this.descricao = tarefa.descricao || ''
    }
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

