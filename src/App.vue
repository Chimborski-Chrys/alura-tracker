<template>
  <main
    class="columns is-gapless is multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <NotiFicacoes />
      <router-view></router-view>
    </div>
  </main>
  <FooTer></FooTer>
</template>

<script>
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import NotiFicacoes from "./components/NotiFicacoes.vue";
import FooTer from "./components/FooTer.vue";
// import IFormTarefa from './interface/IFormTarefa'

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    NotiFicacoes,
    FooTer,
  },

  data() {
    return {
      modoEscuroAtivo: false,
    };
  },
  methods: {
    trocarTema(modoEscuroAtivo) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #000;
  --texto-primario: #fff;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
