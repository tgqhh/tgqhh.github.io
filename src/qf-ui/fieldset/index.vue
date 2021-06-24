<template>
    <fieldset>
        <legend v-if="title">{{title}}</legend>
        <slot></slot>
    </fieldset>
</template>
<script>
export default {
    name: 'qf-fieldset',
    props: {
        title: {
            type: String
        }
    },
}
</script>
<style scoped>
</style>