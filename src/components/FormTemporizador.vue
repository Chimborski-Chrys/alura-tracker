<template>
    <section class="is-flex is-align-items-center is-justify-content-space-between">
        <FormCronometro :tempoEmSegundos="tempoEmSegundos"  />
        <!-- <BtnBotao @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando" />
        <BtnBotao @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando" /> -->

        <button type="button" @click="iniciar" :disabled="cronometroRodando">
        <span class="icon">
            <i class="fa fa-play"></i>
        </span>
        <span>play</span>
    </button>

    <button type="button" @click="finalizar" :disabled="!cronometroRodando">
        <span class="icon">
            <i class="fa fa-stop"></i>
        </span>
        <span>stop</span>
    </button>       
    </section>
</template>

<script>

import { defineComponent } from 'vue';
import FormCronometro from './FormCronometro.vue'
// import BtnBotao from './BtnBotao.vue'


export default defineComponent({
    name: "FormTemporizador",
    components:{
        FormCronometro,
        // BtnBotao
    },
    data () {
        return {
            tempoEmSegundos: 0,
            cronometo:0,
            cronometroRodando: false
        }
    },
    emits:[
        "aoTemporizadorFinalisado"
    ],

    methods:{
        iniciar(){
            this.cronometroRodando = true
           this.cronometo = setInterval(() =>{
                this.tempoEmSegundos += 1;
            },1000)
        },
        finalizar(){
            this.cronometroRodando = false
           clearInterval(this.cronometo);
           this.$emit("aoTemporizadorFinalisado", this.tempoEmSegundos);
           this.tempoEmSegundos = 0;
        }
    }
}
)

</script>
