<template>
    <dvi class="box has-text-weight-bold">
        <slot></slot>
    </dvi>
</template>

<script>

import {defineComponent} from 'vue'

export default defineComponent({
    name: 'FormBox',
})
</script>

<style scoped>
.box{
    background: #FAF0CA;
}
</style>