import { createRouter, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue';
import ProjetosProjetos from '../views/ProjetosProjetos.vue';
import FormuLario from '../views/Projetos/FormuLario.vue'; 
import LisTa from '../views/Projetos/LisTa.vue';

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
    component: ProjetosProjetos,
    children: [
        {
            path: '',
            name: 'Projetos',
            component: LisTa
            },
            {
                path: 'novo',
                name: 'Novo projeto',
                component: FormuLario        
            },
            {
                path: ':id',
                name: 'Editar projeto',
                component: FormuLario,
                props: true      
            },
    ]
   }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default roteador;