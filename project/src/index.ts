function add(x: number, y: string): string {
    return x + y;
}

type FirstParameter<A> = A extends (...rest: infer X) => any ? X : never;

type X = (FirstParameter<typeof add>)[0];