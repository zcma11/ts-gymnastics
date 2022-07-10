/* 

BEM<'btn', ['price'], []> --> 'btn__price'
BEM<'btn', ['price'], ['warning', 'success']> --> 'btn__price--warning' | 'btn__price--success' 
BEM<'btn', [], ['small', 'medium', 'large']> --> 'btn--small' | 'btn--medium' | 'btn--large' 

*/

type IsNever<T> = [T] extends [never] ? true : false
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${IsNever<E[number]> extends true ? '' : `__${E[number]}`}${IsNever<
  M[number]
> extends true
  ? ''
  : `--${M[number]}`}`
