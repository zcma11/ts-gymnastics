/* 

StringToUnion<''> --> never
StringToUnion<'t'> --> 't'
StringToUnion<'hello'> --> 'h' | 'e' | 'l' | 'l' | 'o'
StringToUnion<'coronavirus'> --> 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'

*/

type StringToUnion<T extends string> = T extends `${infer G}${infer Rest}`
  ? G | StringToUnion<Rest>
  : never

// type StringToUnion<T extends string> = T extends `${infer G}${infer Rest}` ? [G, StringToUnion<Rest>][number] : never

// type StringToUnion<T extends string, K extends string[] = []> = T extends `${infer G}${infer Rest}` ? StringToUnion<Rest, [...K, G]> : K[number]
