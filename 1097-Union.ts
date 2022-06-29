/* 

type case1 = IsUnion<string>  // false
type case2 = IsUnion<string|number>  // true
type case3 = IsUnion<[string|number]>  // false
type case4 = IsUnion<never> // false

*/

type IsUnion<T, K = T> = [T] extends [never]
  ? false
  : T extends K
  ? [K] extends [T]
    ? false
    : true
  : never
