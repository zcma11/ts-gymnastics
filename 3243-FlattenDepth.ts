/* 

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

*/

type FlattenDepth<
  T extends any[],
  C extends number = 1,
  CO extends number[] = []
> = CO['length'] extends C
  ? T
  : T extends [infer G, ...infer Rest]
  ? G extends any[]
    ? [...FlattenDepth<G, C, [...CO, 1]>, ...FlattenDepth<Rest, C, CO>]
    : [G, ...FlattenDepth<Rest, C, CO>]
  : T
