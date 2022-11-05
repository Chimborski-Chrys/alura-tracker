import { createRouter, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue';
import ProjetosProjetos from '../views/ProjetosProjetos.vue'


// alterado extensao do arquivo para .js era .ts
// const rotas: RouteRecordRaw[] = [{
    const rotas = [
    {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
    },
    {
    path: '/projetos',
    name: 'Projetos',
    component: ProjetosProjetos
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default roteador;