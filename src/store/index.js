
// import IProjeto from "@/myInterface/IProjeto";
import { createStore, useStore as vuexUseStore } from "vuex";
import { ALTERAR_PROJETOS, CADASTRAR_PROJETOS, OBTER_PROJETOS, REMOVER_PROJETOS } from "./tipo-acoes";
import {ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, ADICIONA_TAREFA, ATUALIZA_TAREFA, REMOVE_TAREFA, NOTIFICAR, DEFINIR_PROJETOS} from "./tipo-Mutacoes";
import http from "@/http";
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
        [DEFINIR_PROJETOS] (state, projetos){
           state.projetos = projetos
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
    },
    actions: {
        [OBTER_PROJETOS]({ commit }){
            http.get('projetos')
                .then(response => commit(DEFINIR_PROJETOS, response.data))
        },
        [CADASTRAR_PROJETOS](contexto, nomeDoProjeto){
           return http.post('/projetos', {
                nome: nomeDoProjeto
            })
        },
        [ALTERAR_PROJETOS](contexto, projeto){
            return http.put(`/projetos/${projeto.id}`, projeto) 
         },
         [REMOVER_PROJETOS]({commit}, id){
            return http.delete(`/projetos/${id}`)
            .then( () => commit(EXCLUIR_PROJETO, id))
         }
    }
})

export function useStore(){
    return vuexUseStore(key)
}