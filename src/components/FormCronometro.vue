<template>  
    <section>
    <i class="far fa-clock"></i> {{this.tempoDecorrido}}
   </section>
   </template>
   
   <script>
   
   import { defineComponent } from 'vue'
   
   export default defineComponent({
       name: "FormCronometro",
   
       props:{
           tempoEmSegundos: {
               type: Number,
               default: 0
           }
       },
       computed:{
           tempoDecorrido(){
               return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11,8)
           }
       },
       
   })
   
   </script>

<style>
.display{
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>