<template>
  <main class="columns is-gapless is multiline" :class="{'modo-escuro': modoEscuroAtivo}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <FormFormulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <FormTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa='tarefa'/>
        <FormBox v-if="listaVazia">
        Você ainda não tem atividades hoje. :(
      </FormBox>
      </div>

</div>
  </main>
</template>

<script>
import {defineComponent} from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormFormulario from './components/FormFormulario.vue';
import FormTarefa from './components/FormTarefa.vue';
import FormBox from './components/FormBox.vue';
// import IFormTarefa from './interface/IFormTarefa'    

export default defineComponent({
    name: 'App',
    components:{
      BarraLateral,
      FormFormulario,
      FormTarefa,
      FormBox
    },

    data(){
      return {
        tarefas: [],
        modoEscuroAtivo: false
      }
    },
    computed:{
      listaVazia (){
        return this.tarefas.length === 0
      }
    },
    methods:{
      salvarTarefa(tarefa){
        this.tarefas.push(tarefa)
      },
      trocarTema(modoEscuroAtivo){
        this.modoEscuroAtivo = modoEscuroAtivo
      }
    }
});
</script>

<style>
.lista{
  padding:1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro{
  --bg-primario: #000;
  --texto-primario: #ddd;
}

.conteudo{
  background-color: var(--bg-primario);
}

</style>
