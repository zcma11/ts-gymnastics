/* 

KebabCase<'FooBarBaz'> --> 'foo-bar-baz'
KebabCase<'fooBarBaz'> --> 'foo-bar-baz'
KebabCase<'foo-bar'> --> 'foo-bar'
KebabCase<'foo_bar'> --> 'foo_bar'
KebabCase<'Foo-Bar'> --> 'foo--bar'
KebabCase<'ABC'> --> 'a-b-c'
KebabCase<'-'> --> '-'
KebabCase<''> --> ''
KebabCase<'π'> --> 'π'

*/

// ζ³¨ζ extends δΉεζ³εεΌηεε
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
