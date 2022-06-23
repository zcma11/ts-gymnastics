/* 

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

*/

type MyOmit<T, K> = {
  [key in keyof T as key extends K ? never : key]: T[key]
}
