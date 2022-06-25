/* 

type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
  Trim<'str'> --> 'str'
  Trim<' str'> --> 'str'
  Trim<'     str'> --> 'str'
  Trim<'str   '> --> 'str'
  Trim<'     str     '> --> 'str'
  Trim<'   \n\t foo bar \t'> --> 'foo bar'
  Trim<''> --> ''
  Trim<' \n\t '> --> ''
*/

type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer G}`
  ? Trim<G>
  : S extends `${infer K}${' ' | '\n' | '\t'}`
  ? Trim<K>
  : S
