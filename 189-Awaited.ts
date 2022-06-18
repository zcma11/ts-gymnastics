type MyAwaited<T> = T extends Promise<infer S> ? MyAwaited<S> : T

type p = Promise<string>
type myaw = MyAwaited<p>
