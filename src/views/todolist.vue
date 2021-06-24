<template>
   
    <div>
    <tozj v-bind:titile="titile" @click="fhfn" />
    <qf-fieldset title="测试">
        你好
    </qf-fieldset>
     <h1>ToDoList</h1>
     <input v-model= "p" type="text" name="" id=""><button @click="tjfn">添加</button>
     <ul>
         <li v-for="item in lists">{{item.name}}</li>
     </ul>
    </div>
</template>
<script>
import tozj from '@/components/tozj.vue';
export default {
  components: { tozj },
    data() {
        return {
            titile:'gjbwy',
            p:'',
             lists: [
                    { name: '吃饭' },
                    { name: '睡觉' },
                    { name: '挤痘痘' },
                    { name: '抠脚' },
                    { name: '扣鼻' }
                ]
        }
    },
    methods: {
        fhfn() {
            alert('nannn')
        },
        tjfn() {
           console.log(this.p);
           this.lists.push({ name : this.p})
        }
    }
 }
</script>
<style scoped>
</style>