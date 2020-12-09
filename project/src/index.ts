import { Option } from './Option';
​
type AOfOption<A> = A extends Option<infer X> ? X : never;
​
type X = AOfOption<Option<number>>
type Y = AOfOption<Option<string>>
​
​
import { Either } from './Either';
​
type EOfEither<B> = [B] extends [Either<infer _E, infer _A>] ? _E : never;
type AOfEither<B> = [B] extends [Either<infer _E, infer _A>] ? _A : never;
​
type C = EOfEither<Either<"errore", "successo">>
type D = AOfEither<Either<"errore", "successo">>
​
​
import { Reader } from './Reader';
​
type ROfReader<B> = [B] extends [Reader<infer _R, infer _A>] ? _R : never;
type AOfReader<B> = [B] extends [Reader<infer _R, infer _A>] ? _A : never;
​
type C1 = ROfReader<Reader<{ foo: string }, number>>
type D1 = AOfReader<Reader<{ foo: string }, number>>
​
​
import * as O from './Option';
​
declare function tupleOption<ARGS extends O.Option<any>[]>(...params: Option<any>[]): O.Option<{
  [K in keyof ARGS]: AOfOption<ARGS[K]>
}>;
​
const x = tupleOption(O.some(0), O.none, O.some(2));