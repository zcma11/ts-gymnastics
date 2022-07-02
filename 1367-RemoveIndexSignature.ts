/* 

type Foo = {
  [key: string]: any;
  foo(): void;
}

type A = RemoveIndexSignature<Foo>  // expected { foo(): void }

*/

type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer G}` ? G : never]: T[K]
}
