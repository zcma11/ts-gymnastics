/* 

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

*/

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer G}`
  ? TrimLeft<G>
  : S
