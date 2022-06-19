/* 

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

Includes<[{}], { a: 'A' } // expected to be `false`

*/

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false

type Includes<T extends any[], U> = T extends [infer A, ...infer B]
  ? Equal<A, U> extends true
    ? true
    : Includes<B, U>
  : false
// 从数组里拿出元素进行比较，如果是对象 extends 成立，使用 equal 进一步比较。equal 生成两个类型，对两个类型进行比较。