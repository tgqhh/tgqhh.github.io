import button from "./button"
import fieldset from "./fieldset"
import table from "./table"
import page from "./page"
import row from "./row"

const coms = [
  button, 
  fieldset, 
  table,
  page,
  row,
]

//批量组件注册
const install = function (Vue) {
    coms.forEach(com => {
        Vue.component(com.name, com)
    })
}

export default install