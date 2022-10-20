<template>
  <main class="columns is-gapless is multiline" :class="{'modo-escuro': modoEscuroAtivo}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <router-view></router-view>
</div>
  </main>
</template>

<script>
import {defineComponent} from 'vue';
import BarraLateral from './components/BarraLateral.vue';
// import IFormTarefa from './interface/IFormTarefa'    

export default defineComponent({
    name: 'App',
    components:{
      BarraLateral,
    },

    data(){
      return {
        modoEscuroAtivo: false
      }
    },
    methods:{
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
