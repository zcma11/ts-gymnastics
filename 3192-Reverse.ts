/* 

type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

*/

type Reverse<T extends any[]> = T extends [...infer Rest, infer G]
  ? [G, ...Reverse<Rest>]
  : T
