
// import IProjeto from "@/myInterface/IProjeto";
import { createStore, useStore as vuexUseStore } from "vuex";
import {ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, ADICIONA_TAREFA, ATUALIZA_TAREFA, REMOVE_TAREFA, NOTIFICAR} from "./tipo-Mutacoes";
// import { ATENCAO, FALHA, SUCESSO } from "./TipoNotificacao";
// import { createStore } from "vuex";
// import{useStore as vuexStore} from "vuex";

// interface Estado{
//     projetos: IProjeto[]
//     notificacoes: InotiFicacao
// }

// export const key: InjectionKey<Store<Estado>> = Symbol();
export const key = Symbol();

// export const store = createStore<Estado>({
    export const store = createStore({
    state:{
        projetos:[],
        tarefas:[],
        notificacoes:[]
    },
    mutations:{
        [ADICIONA_PROJETO](state, nomeDoProjeto){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            }
            state.projetos.push(projeto);
        },
        [ALTERA_PROJETO] (state, projeto){
            const index = state.projetos.findIndex(proj => proj.id == projeto.id);
            state.projetos[index] = projeto;
        },
        [EXCLUIR_PROJETO] (state, id){
            state.projetos = state.projetos.filter(proj => proj.id != id);
        },
        [ADICIONA_TAREFA] (state, tarefa) {
            tarefa.id = new Date().toISOString()
            state.tarefas.push(tarefa)
          },
          [ATUALIZA_TAREFA](state, tarefa) {
            const indice = state.tarefas.findIndex(p => p.id == tarefa.id)
            state.tarefas[indice] = tarefa
          },
          [REMOVE_TAREFA] (state, id) {
            state.projetos = state.projetos.filter(p => p.id != id)
          },
          [NOTIFICAR](state, novaNotificacao){
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            },3000)
          }
    }
})

export function useStore(){
    return vuexUseStore(key)
}