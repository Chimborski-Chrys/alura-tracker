<template>
  <FormFormulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <FormBox v-if="listaVazia">
      Você ainda não tem atividades hoje. :(
    </FormBox>

    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="text"
          placeholder="Digite para filtrar"
          v-model="filtro"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>

    <FormTarefa
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
      @aoTarefaClicada="selecionarTarefa"
    />

    <ModalComponent :mostrar="tarefaSelecionada != null">
      <header class="modal-card-head">
        <p class="modal-card-title">Editando Tarefa</p>
        <button @click="fecharModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label for="descricaoDaTarefa" class="label"
            >Descrição da Tarefa</label
          >
          <input
            type="textt"
            class="input"
            v-model="tarefaSelecionada.descricao"
            id="descricaoDaTarefa"
          />
        </div>
      </section>
      <footer class="modal-card-foot">
        <button @click="alterarTarefa" class="button is-success">Salvar</button>
        <button @click="fecharModal" class="button">Cancelar</button>
      </footer>
    </ModalComponent>
  </div>
</template>

<script>
import { computed, defineComponent, ref, watchEffect } from "vue";
import FormFormulario from "../components/FormFormulario.vue";
import FormTarefa from "../components/FormTarefa.vue";
import FormBox from "../components/FormBox.vue";
import { useStore } from "@/store";
import {
  OBTER_TAREFAS,
  CADASTRAR_TAREFA,
  OBTER_PROJETOS,
  ALTERAR_TAREFA,
} from "@/store/tipo-acoes";
import ModalComponent from "../components/ModalComponent.vue";
// import IFormTarefa from './interface/IFormTarefa'

export default defineComponent({
  name: "App",
  components: {
    FormFormulario,
    FormTarefa,
    FormBox,
    ModalComponent,
  },

  data() {
    return {
      tarefaSelecionada: null,
    };
  },

  methods: {
    salvarTarefa(tarefa) {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa);
    },
    selecionarTarefa(tarefa) {
      this.tarefaSelecionada = tarefa;
    },
    fecharModal() {
      this.tarefaSelecionada = null;
    },
    alterarTarefa() {
      this.store
        .dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
        .then(() => this.fecharModal());
    },
  },

  computed: {
    listaVazia() {
      return this.tarefas.length == 0;
    },
  },

  setup() {
    const store = useStore();
    store.dispatch(OBTER_TAREFAS);
    store.dispatch(OBTER_PROJETOS);

    const filtro = ref("");

    const tarefas = computed(() =>
      store.state.tarefas.filter(
        (t) => !filtro.value || t.descricao.includes(filtro.value)
      )
    );

    watchEffect(() => {
      store.dispatch(OBTER_TAREFAS, filtro.value);
    });

    return {
      // tarefas: computed(() => store.state.tarefas),
      tarefas,
      store,
      filtro,
    };
  },
});
</script>
