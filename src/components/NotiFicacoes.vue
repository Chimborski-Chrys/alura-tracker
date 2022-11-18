<template>
   <div class="notificacoes">
    <article class="message is-success">
        <div class="message-header">Atenção</div>
        <div class="message-body">
            Texto aqui!.
        </div> 
    </article>
    <article class="message is-warning">
        <div class="message-header">Atenção</div>
        <div class="message-body">
            Texto aqui!.
        </div> 
    </article>
    <article class="message is-danger">
        <div class="message-header">Atenção</div>
        <div class="message-body">
            Texto aqui!.
        </div> 
    </article>
   </div>
</template>

<script>

import { defineComponent} from 'vue'

export default defineComponent({
    name: 'NotiFicacoes'
})

</script>

<style scoped>
.notificacoes {
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 105;
}

</style>