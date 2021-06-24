import i1 from "./index1.vue"
import i2 from "./index2.vue"
import i3 from "./index3.vue"
import i4 from "./index4.vue"
import tozj from "./tozj.vue"
const coms = [
    i1,
    i2,
    i3,
    i1,
    tozj,
]

//批量组件注册
const install = function (Vue) {
    coms.forEach(com => {
        Vue.component(com.name,com)
    })
}
export default install