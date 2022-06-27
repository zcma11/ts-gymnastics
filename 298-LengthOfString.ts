/* 

LengthOfString<''> --> 0
LengthOfString<'kumiko'> --> 6
LengthOfString<'reina'> --> 5
LengthOfString<'Sound! Euphonium'> --> 16

*/

type LengthOfString<
  S extends string,
  K extends any[] = []
> = S extends `${any}${infer G}` ? LengthOfString<G, [...K, 1]> : K['length']
