<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do projeto</label>
        <input
          type="textt"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { SUCESSO } from "../../store/TipoNotificacao";
import { notificacaoMixin } from "@/mixins/notificar";
import { CADASTRAR_PROJETOS, ALTERAR_PROJETOS } from "@/store/tipo-acoes";
// import useNotificador from "@/hooks/notificador.js";

export default defineComponent({
  name: "FormuLario",
  props: {
    id: {
      type: String,
    },
  },
  mixins: [notificacaoMixin],
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id == this.id
      );
      this.nomeDoProjeto = projeto.nome || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store
          .dispatch(ALTERAR_PROJETOS, {
            id: this.id,
            nome: this.nomeDoProjeto,
          })
          .then(() => this.caseSucesso());
      } else {
        this.store
          .dispatch(CADASTRAR_PROJETOS, this.nomeDoProjeto)
          .then(() => this.caseSucesso());
      }
    },

    caseSucesso() {
      this.nomeDoProjeto = "";
      this.notificar(SUCESSO, "Excelente!", "Projeto incluido com sucesso!");
      this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStore();
    // const { notificar } = useNotificador();

    // const nomeDoProjeto = ref("");

    // if (props.id) {
    //   const projeto = store.state.projeto.projetos.find(
    //     (proj) => proj.id == props.id
    //   );
    //   nomeDoProjeto.value = projeto?.nome || "";
    // }
    return {
      store,
      // notificar,
      // nomeDoProjeto,
    };
  },
});
</script>

<style scoped></style>
