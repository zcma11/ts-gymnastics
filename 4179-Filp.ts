/* 

Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}

*/

type Flip<T extends { [key: string | number]: any }> = {
  [k in keyof T as `${T[k]}`]: k
}
