<template>
  <div>
    <tozj v-bind:titile="titile" @click="fhfn" />
  </div>
</template>
<script>
// import tozj from '../components/tozj.vue'

export default {
  // components: { tozj },
  data() {
    return {
      titile: "狗几把玩意", 
    };
  },
  methods: {
    fhfn() {
      alert("警方是");
    },
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
