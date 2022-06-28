/* 

type foo = {
    name: string;
    age: string;
  }
  type coo = {
    age: number;
    sex: string
  }
  
  type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
  
*/

type Merge<F, S> = {
  [s in keyof F | keyof S]: s extends keyof S
    ? S[s]
    : s extends keyof F
    ? F[s]
    : never
}
