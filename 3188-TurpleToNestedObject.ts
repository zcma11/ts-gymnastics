/* 

type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type

*/

type TupleToNestedObject<T extends any[], U> = T extends [infer G extends PropertyKey, ...infer Rest] ? { [key in G]: TupleToNestedObject<Rest, U>} : U