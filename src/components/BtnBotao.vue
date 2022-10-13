<template>
 <button class="button" @click="clicado" :disabled="desabilitado" >
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>{{texto}}</span>
        </button>
</template>

<script>

import { defineComponent} from "vue";

export default defineComponent({
    name: "BtnBotao",
    emits:['clicado'],
    props:{
        desabilitado:{
            type: Boolean
        },
    icone:{
        type: String,
        required: true
    },
    texto:{
        type: String,
        required: true
    },
    },
    methods:{
        clicado() {
            this.$emit('clicado')
        }
    }
});

</script>