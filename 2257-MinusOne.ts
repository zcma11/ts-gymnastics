/* 

type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54

*/

// 溢出
// type MinusOne<T extends number, K extends any[] = []> = K['length'] extends T ? K extends [any, ...infer G] ? G['length'] : K['length'] : MinusOne<T, [...K, 1]>

type Increase<T extends any[]> = [...T, 1]

type Decrease<T extends any[]> = T extends [any, ...infer G] ? G : []

type Concat<T extends any[], K extends any[]> = [...T, ...K]

type GetLength<T extends any[]> = T['length'] extends number
  ? T['length']
  : never

type MutiTen<T extends any[] = []> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
]

type Bit<
  T extends number | string,
  K extends any[] = []
> = `${T}` extends `${infer G}${infer R}`
  ? Bit<R, Concat<MutiTen<K>, CreateArray<G>>>
  : K

type CreateArray<
  T extends number | string,
  K extends any[] = []
> = `${K['length']}` extends `${T}` ? K : CreateArray<T, Increase<K>>

type MinusOne<T extends number> = GetLength<Decrease<Bit<T>>>

type a = MinusOne<1011>
