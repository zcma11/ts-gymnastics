/* 

The sequence starts: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21

*/

type Fibonacci<
  T extends number,
  I1 extends any[] = [1],
  I2 extends any[] = [1],
  C extends any[] = [1]
> = C['length'] extends T
  ? I1['length']
  : Fibonacci<T, I2, [...I1, ...I2], [...C, 1]>
