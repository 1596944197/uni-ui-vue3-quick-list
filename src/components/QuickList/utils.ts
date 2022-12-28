import { reactive } from "vue";
import { DomainsType } from "./type";

// # 生成具有类型提示的响应式数据
export const generate = <T extends DomainsType>(list: T) => {
  return reactive(list)
}