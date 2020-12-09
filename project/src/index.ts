type isString<A> = A extends string ? true : false;

type A = isString<"hello">;
type B = isString<number>

type C = "hello" extends string ? true : false;

type D<A> = A extends string ? {foo: A}: never;

type E = D<number>;