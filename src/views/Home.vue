<template>
  <div class="home">
    <!-- 菜单 -->
    <div class="menu" :style="{ width: wit }">
      <ul>
        <li @mouseover="who = 'index1'">{{ wit == "64px" ? "1" : "首页1" }}</li>
        <li @mouseover="who = 'index2'">{{ wit == "64px" ? "2" : "首页2" }}</li>
        <li @mouseover="who = 'index3'">{{ wit == "64px" ? "3" : "首页3" }}</li>
        <li @mouseover="who = 'index4'">{{ wit == "64px" ? "4" : "首页4" }}</li>
      </ul>
    </div>
    <!-- 主题 -->
    <div class="main">
      <!-- 头部 -->
      <div class="top">
        <div>
          <button @click="witfn">控制菜单</button>

          <!-- <transition appear enter-active-class="animated bounceInRight"> -->
          <span
            style="display: inline-block"
            v-for="item in navs"
            v-if="item.url == who"
            >{{ item.title }}</span
          >
          <!-- </transition> -->
        </div>
        <button>用户名</button>
      </div>
      <!-- 类容 -->
      <!-- appear默认 -->
      <div class="content">
        <component 
        v-bind:is = "who"
        
        > </component>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import index1 from '../components/index1.vue'
import index2 from '../components/index2.vue'
import index3 from '../components/index3.vue'
import index4 from '../components/index4.vue'
export default {
  name: "Home",
  data() {
    return {
      wit: "200px",
      who: "index1",
      navs: [
        { url: "index1", title: "首页1" },
        { url: "index2", title: "首页2" },
        { url: "index3", title: "首页3" },
        { url: "index4", title: "首页4" },
      ],
    };
  },
  methods: {
    witfn() {
      this.wit = this.wit == "200px" ? "64px" : "200px";
    },
  },
  components: {
      index1,
      index2,
      index3,
      index4,
  },
};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}

html,
body,
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.home {
  display: flex;
}

.menu {
  width: 200px;
  background-color: black;
}

.main {
  /* width: 100%;
    height: 100%; */
  flex: 1;
  background-color: #fff;
}

.top {
  height: 50px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}
.main .content {
  height: 100px;
  margin: 80px;
  background: #fff;
}
.menu li {
  width: 100%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  color: #fff;
}
.menu li:hover {
  background: yellow;
  color: black;
  cursor: pointer;
}
.main .content {
  min-height: 400px;
  margin: 80px;
}
.main .content h1 {
  width: 100%;
  height: 100%;
  background: #ccc;
}
</style>

