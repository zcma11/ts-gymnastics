/* 

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]
*/

type Filter<A, B, K = A | B> = K extends A | B
  ? K extends A & B
    ? never
    : K
  : never

type Diff<O, O1> = {
  [k in Filter<keyof O, keyof O1>]: k extends keyof O
    ? O[k]
    : k extends keyof O1
    ? O1[k]
    : never
}

// type Diff<O, O1> = {
//   [k in keyof (O & O1) as k extends keyof (O | O1) ? never : k]: k extends keyof O ? O[k] : k extends keyof O1 ? O1[k] : never
// }
