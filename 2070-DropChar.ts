/* 

type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'

*/

type DropChar<S, C> = S extends `${infer G}${infer Rest}`
  ? `${G extends C ? '' : G}${DropChar<Rest, C>}`
  : S
