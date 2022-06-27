/* 

type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

*/

type AppendToObject<T, U extends string, V = any> = {
  [k in keyof T | U]: k extends keyof T ? T[k] : V
}
