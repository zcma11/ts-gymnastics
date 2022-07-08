/* 

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void

*/

// type Reverse<T extends any[]> = T extends [infer G, ...infer Rest] ? [...Reverse<Rest>, G] : []
type FlipArguments<T extends (...args: any[]) => any> = T extends (
  ...args: infer Pa
) => infer G
  ? (...args: Reverse<Pa>) => G
  : never
