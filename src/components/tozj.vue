<template>
  <div class="to">
    <span>logo</span>
    <span>{{ titile }}</span>
    <span @click="$emit('click')">返回 </span>
  </div>
</template>
<script>
export default {
  name:'tozj',
  props: [""],
  props: {},
  props: {
   titile: {
      type: String,
      required:true,// 必须传
       }
    //required:true,// 必须传
    //    default:100,// 默认值
    //  validator(val) {
    // //    return true//验证 true通过 false不通过
    // //return val.length <script 3 //也可以验证条件
    // }
  },
};
</script>
<style scoped>
.to {
  border: solid 5px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>