/* 

interface User {
  name?: string
  age?: number
  address?: string
}

type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
  
*/

type RequiredByKeys<T, K extends keyof any = keyof T> = {
  [k in keyof T as k extends K ? k : never]-?: T[k]
} & {
  [k in keyof T as k extends K ? never : k]: T[k]
} extends infer Result
  ? {
      [k in keyof Result]: Result[k]
    }
  : never
