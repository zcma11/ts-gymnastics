/* 

type OmitBoolean = OmitByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { name: string; count: number }

*/

type OmitByType<T, U> = {
  [k in keyof T as T[k] extends U ? never : k]: T[k]
}
