/* 

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = Promise.all([promise1, promise2, promise3] as const)

*/

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [k in keyof T]: T[k] extends Promise<infer G> ? G : T[k]
}>
