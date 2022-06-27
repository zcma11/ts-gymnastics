/* 

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

*/

type Flatten<T extends any[]> = T extends [infer G, ...infer K]
  ? G extends any[]
    ? [...Flatten<G>, ...Flatten<K>]
    : [G, ...Flatten<K>]
  : T
