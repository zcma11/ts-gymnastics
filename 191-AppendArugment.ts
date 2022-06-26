/* 

type Fn = (a: number, b: string) => number
  
type Result = AppendArgument<Fn, boolean> 
// expected be (a: number, b: string, x: boolean) => number

*/

type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
  ...args: infer G
) => infer T
  ? (...args: [...G, A]) => T
  : Fn
