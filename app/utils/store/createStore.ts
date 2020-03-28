import { createElement, createContext, Reducer, useContext, useReducer, useMemo, DependencyList, Dispatch, ReactNode } from 'react';

import { Action, ActionList } from './combineReducers';

/**
 * React Context에 코드 레벨의 컨벤션 요소를 추가하기 위해 작성함
 * react-redux의 영향을 받았으며, 순수한 react-redux와는 몇몇 다른 부분이 아래와 같이 있음
 * - 여러 store 생성이 가능함
 * - dispatch 함수를 직접 받을 수 있음
 * - Custom Hooks로만 사용할 수 있도록 작성을 했기 때문에 React Class Component에서는 사용할 수 없음
 *
 * const { StoreProvider, useStore, useSelector, useDispatch } = createStore(reducer);
 */
export const createStore = <S, A extends Action | ActionList>(reducer: Reducer<S, A>) => {
  const Context = createContext<readonly [S, Dispatch<A>]>(null as any);

  type Selector<SS> = (store: S) => SS;

  /**
   * 현재 store의 값을 꺼내오는 동시에 dispatch도 같이 return 하는 Custom Hooks
   */
  type useStore = <SS>(selector: Selector<SS>, dependencies?: DependencyList) => readonly [SS, Dispatch<A>];
  const useStore: useStore = (selector, dependencies) => {
    const [store, dispatch] = useContext(Context);
    const createMemo = () => [selector(store), dispatch] as const;
    return useMemo(createMemo, dependencies);
  };

  /**
   * store에서 값을 꺼내오지 않고 dispatch 함수만 사용하기 위한 유틸리티성 Custom Hooks
   *
   * const dispatch = useDispatch();
   */
  const useDispatch = () => useContext(Context)[1];

  /**
   * dispatch 함수를 쓰지 않고 값만 가져올 때에 사용하기 위한 유틸리티성 Custom Hooks
   *
   * const userName = useSelector(store => store.User.name);
   */
  const useSelector = <SS>(selector: Selector<SS>, dependencies?: DependencyList) => {
    const [store] = useContext(Context);
    const createMemo = () => selector(store);
    return useMemo(createMemo, dependencies);
  };

  type Props = Readonly<{ children: ReactNode; createInitialStore?: () => Record<string, any> }>;
  /**
   * ! 상위 컴포넌트에 필수적으로 추가를 해줘야 하위 컴포넌트에서 store와 dispatch를 사용할 수 있음
   */
  const StoreProvider = ({ children, createInitialStore = () => ({}) }: Props) => {
    /**
     * store를 전달받은 후 reducer를 1번 도는 방식으로 store를 초기화 함
     */
    const initializer = () => reducer((createInitialStore() as unknown) as S, ({ type: Symbol('initialization') } as unknown) as A);
    const context = useReducer(reducer, null, initializer);

    /**
     * * <Context.Provider value={context}>{children}</Context.Provider>
     *
     * * 위처럼 작성하려면 tsx 파일로 바꿔야 하는데,
     * * tsx 파일일 때에는 해당 파일에서의 TypeScript 문법에 일부 제한이 있고
     * * 이것에 영향을 받는 코드(useStore, useSelector 등)가 있어서 아래처럼 작성함
     */
    return createElement(Context.Provider, { value: context }, children);
  };

  return { useStore, useDispatch, useSelector, StoreProvider };
};
