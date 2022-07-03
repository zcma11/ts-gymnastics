/* 

type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }

*/

type PickByType<T, U> = {
  [k in keyof T as T[k] extends U ? k : never]: T[k]
}
