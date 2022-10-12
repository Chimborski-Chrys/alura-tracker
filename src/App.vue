<template>
  <main class="columns is-gapless is multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormFormulario />
</div>
  </main>
</template>

<script>
import {defineComponent} from 'vue';
import BarraLateral from './components/BarraLateral.vue'
import FormFormulario from './components/FormFormulario.vue'

export default defineComponent({
    name: 'App',
    components:{
      BarraLateral,
      FormFormulario
    }
});
</script>

<style>

</style>
