<template>
    <FormBox>
        <div class="columns">
            <div class="column is-7">{{tarefa.descricao  || 'Tarefa padrão'}}</div>
            <div class="column">
                <FormCronometro :tempoEmSegundos='tarefa.duracaoEmSegundos'/>
            </div>
        </div>
    </FormBox>
</template>

<script >
import { defineComponent } from 'vue';
import FormCronometro from './FormCronometro.vue';
import FormBox from './FormBox.vue'


export default defineComponent ({
    name: 'FormTarefa',
    components:{
        FormCronometro,  
        FormBox,
    },
    props:{
        tarefa: {
            type: Object,
            required: true,
        }
    }
});

</script>

