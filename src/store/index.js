
// import IProjeto from "@/myInterface/IProjeto";
import { createStore, useStore as vuexUseStore } from "vuex";
// import { createStore } from "vuex";
// import{useStore as vuexStore} from "vuex";

// interface Estado{
//     projetos: IProjeto[]
// }

// export const key: InjectionKey<Store<Estado>> = Symbol();
export const key = Symbol();

// export const store = createStore<Estado>({
    export const store = createStore({
    state:{
        projetos:[]
    },
    mutations:{
        'ADICIONA_PROJETO'(state, nomeDoProjeto){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            }
            state.projetos.push(projeto);
        }
    }
})

export function useStore(){
    return vuexUseStore(key)
}