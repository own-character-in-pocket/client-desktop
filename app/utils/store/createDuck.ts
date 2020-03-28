import immer from 'immer';

type Option<S, R> = Readonly<{
  namespace: string;
  createInitialState: S | ((s: S) => S);
  reducers: R;
  afterChange?: (previousState: Readonly<S>, nextState: Readonly<S>) => void;
}>;

type Reducer<S> = (state: S, action: { readonly type: symbol; readonly payload: any }) => S;

interface Action<P> {
  readonly type: unique symbol;
  readonly payload: P;
}

type Actions<S, R extends Record<string, (state: S, payload: any) => void>> = {
  readonly [key in keyof R]: R[key] extends (state: S) => void
    ? () => Action<void>
    : R[key] extends (state: S, payload: infer P) => void
    ? (payload: P) => Action<P>
    : never;
};

const NO_OPERATION = () => {};

export const createDuck = <S, R extends Record<string, (state: S, payload: any) => void>>({
  namespace,
  createInitialState,
  reducers,
  afterChange = NO_OPERATION
}: Option<S, R>) => {
  const reducer: Reducer<S> = (
    previousState = typeof createInitialState === 'function' ? (createInitialState as () => S)() : createInitialState,
    action
  ) => {
    if (!map.has(action.type)) {
      return previousState;
    }
    const nextState = immer(previousState, draft => void map.get(action.type)!(draft as S, action.payload));
    afterChange(previousState, nextState);
    return nextState;
  };
  const map = new Map(
    Object.entries(reducers).map(([key, value]) => {
      const name = `${namespace}/${key}`;
      const type = Symbol(name);
      (reducer as Record<string, any>)[key] = (payload: any) => ({ type, payload });
      return [type, value];
    })
  );
  return reducer as Reducer<S> & Actions<S, R>;
};
