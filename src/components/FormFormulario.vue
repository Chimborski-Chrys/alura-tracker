<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa deseja iniciar?">
            </div>
            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                    <section>
                        <strong>{{this.tempoDecorrido}}</strong>
                    </section>
                    <button class="button" @click="iniciar()">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                        <span>play</span>
                    </button>
                    <button class="button" @click="finalizar()">
                        <span class="icon">
                            <i class="fas fa-stop"></i>
                        </span>
                        <span>stop</span>
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
    name: "FormFormulario",
    data(){
        return {
            tempoEmSegundos: 0,
            cronometo:0
        }
    },
    computed:{
        tempoDecorrido() {
            return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11,8)
        }
    },
    methods:{
        iniciar(){
           this.cronometo = setInterval(() =>{
                this.tempoEmSegundos += 1;
            },1000)
        },
        finalizar(){
           clearInterval(this.cronometo)
        }
    }
}
)

</script>

<style scoped>

</style>