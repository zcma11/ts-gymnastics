/* 

type Result = Shift<[3, 2, 1]> // [2, 1]

*/

type Shift<T extends any[]> = T extends [any, ...infer G] ? G : never
