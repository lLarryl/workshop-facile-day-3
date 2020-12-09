import { Option } from "./Option";

type AOfOption<A> = [A] extends [Option<infer X>]? X : never;

type X = AOfOption<Option<number>>;
type Y = AOfOption<Option<string>>;

