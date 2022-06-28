/* 

KebabCase<'FooBarBaz'> --> 'foo-bar-baz'
KebabCase<'fooBarBaz'> --> 'foo-bar-baz'
KebabCase<'foo-bar'> --> 'foo-bar'
KebabCase<'foo_bar'> --> 'foo_bar'
KebabCase<'Foo-Bar'> --> 'foo--bar'
KebabCase<'ABC'> --> 'a-b-c'
KebabCase<'-'> --> '-'
KebabCase<''> --> ''
KebabCase<'😎'> --> '😎'

*/

// 注意 extends 之后泛型值的变化
type KebabCase<
  S extends string,
  U extends string = ''
> = S extends `${infer G}${infer Rest}`
  ? G extends Lowercase<G>
    ? KebabCase<Rest, `${U}${G}`>
    : U extends ''
    ? KebabCase<Rest, Lowercase<G>>
    : KebabCase<Rest, `${U}-${Lowercase<G>}`>
  : U
