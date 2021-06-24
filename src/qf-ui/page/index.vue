<template>
    <div class="qf-page">
        <span v-for="n in total" v-bind:key="n" @click="changePageFn(n)">
            {{n}}
        </span>
    </div> 
</template>
<script>
export default {
    name: 'qf-page',
    props: {
        total: {  
            type: Number,
            default: 0,
        }
    },
    methods: {
        changePageFn(n) {
            this.$emit('changePage', n)
        }
    }
}
</script>
<style scoped>
.qf-page {
    width: 300px;
    /* height: 50px; */
}

.qf-page span {
    width: 30px;
    height: 30px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    background-color: black;
    color: #fff;
    font-weight: bold;
}
.qf-page span:hover{color:yellow;cursor:pointer;}
</style>