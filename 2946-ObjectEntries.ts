/* 

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];

*/

type ObjectEntries<T> = {
  [k in keyof T]-?: [
    k,
    T[k] extends undefined ? T[k] : Exclude<T[k], undefined>
  ]
}[keyof T]
