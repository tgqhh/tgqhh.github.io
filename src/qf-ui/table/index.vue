<template>
    <table class="qf-table" border="1" cellpadding="20" cellspacing="0">
      <tr>
        <th v-for="(item,index) in column" :key="index">{{item.title}}</th>
      </tr>  
      <tr v-for="(item,index) in data" :key="index">
        <td v-for="(col, colIndex) in column" :key="colIndex" v-html=" col.render ?  col.render(item, item[col.key]) : item[col.key] "></td>
      </tr>  
    </table>
</template>
<script>
export default {
    name: 'qf-table',
    props: ['column', 'data'],
}
</script>
<style scoped>
.qf-table {margin:10px 0px;}
</style>