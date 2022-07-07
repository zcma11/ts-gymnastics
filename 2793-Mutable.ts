/* 

interface Todo {
  readonly title: string
  readonly description: string
  readonly completed: boolean
}

type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }

*/

type Mutable<T extends object> = {
  -readonly [k in keyof T]: T[k]
}
