<template>
  <FormBox>
    <div class="columns clicavel" @click="tarefaClicada">
      <div class="column is-4">
        {{ tarefa.descricao || "Tarefa padrão" }}
      </div>
      <div class="column is-3">
        {{ tarefa.projeto?.nome || "N/D" }}
      </div>
      <div class="column">
        <FormCronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </FormBox>
</template>

<script>
import { defineComponent } from "vue";
import FormCronometro from "./FormCronometro.vue";
import FormBox from "./FormBox.vue";

export default defineComponent({
  name: "FormTarefa",
  emits: ["aoTarefaClicada"],

  components: {
    FormCronometro,
    FormBox,
  },
  props: {
    tarefa: {
      type: Object,
      required: true,
    },
  },

  methods: {
    tarefaClicada() {
      this.$emit("aoTarefaClicada", this.tarefa);
    },
  },
});
</script>

<style scoped>
.clicavel {
  cursor: pointer;
}
</style>
