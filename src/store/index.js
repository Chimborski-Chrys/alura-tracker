
// import IProjeto from "@/myInterface/IProjeto";
import { createStore, useStore as vuexUseStore } from "vuex";
import { ALTERAR_PROJETOS, CADASTRAR_PROJETOS, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS, REMOVER_PROJETOS, ALTERAR_TAREFA } from "./tipo-acoes";
import {ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, ADICIONA_TAREFA, ALTERA_TAREFA, REMOVE_TAREFA, NOTIFICAR, DEFINIR_PROJETOS, DEFINIR_TAREFAS} from "./tipo-Mutacoes";
import http from "@/http";
// import { ATENCAO, FALHA, SUCESSO } from "./TipoNotificacao";
// import { createStore } from "vuex";
// import{useStore as vuexStore} from "vuex";

// export interface Estado{
//     projetos: [],
//     tarefas: [],
//     notificacoes: [],
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
        [DEFINIR_TAREFAS] (state, tarefas){
            state.tarefas = tarefas
         },
        [ADICIONA_TAREFA] (state, tarefa) {
            state.tarefas.push(tarefa)
        },
        [ALTERA_TAREFA]({state}, tarefa) {
        const indice = state.tarefas.findIndex(t => t.id == tarefa.id)
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
         },
        //  [OBTER_TAREFAS]({ commit }, filtro){
        //     let url = 'tarefas'
        //     if(filtro){
        //         url += '?descricao=' + filtro
        //     }
        //     http.get(url)
        //         .then(response => commit(DEFINIR_TAREFAS, response.data))
        // },
        [OBTER_TAREFAS]({ commit }){
            http.get('tarefas')
                .then(response => commit(DEFINIR_TAREFAS, response.data))
        },
        [CADASTRAR_TAREFA]({ commit}, tarefa){
            return http.post('/tarefas', tarefa)
            .then(response => commit(ADICIONA_TAREFA, response.data))
         },
         [ALTERAR_TAREFA]({commit}, tarefa){
            return http.put(`/tarefas/${tarefa.id}`, tarefa)
            .then(() => commit(ALTERA_TAREFA, tarefa))
         },
    }
})

export function useStore(){
    return vuexUseStore(key)
}