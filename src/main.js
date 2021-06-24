import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ui from './qf-ui'
import qfui from 'tgq-qfui'
Vue.use(qfui)
import 'tgq-qfui/qf-ui.css'
// Vue.use(ui)
Vue.config.productionTip = false
// import tozj from '@/components/tozj.vue'
import coms from './components/index'
Vue.use(
  //全局组件
   coms
//局部
//   {
//   // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
//   // install:function(Vue){
//   //     Vue.component('tozj', tozj)
//   // }

// }
);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// Vue.use(  function (Vue) {
  
//     // Vue.component("tozj", {
//     //   // template: `
//     //   //         <div class="to">
//     //   //          <span>logo</span>
//     //   //          <span>{{ titile }}</span>
//     //   //          <span @click="$emit('click')">返回 </span>
//     //   //         </div>
//     //   //     `,
//     //   //   props:{
//     //   //     titile:{
//     //   //       type:String,
//     //   //       required: true
//     //   //       }
//     //   //   },
//     // });
//     //上述方法不能用 必须写成单文件组件
//     Vue.component('tozj',tozj)
//   },
// );
//或者这样写
