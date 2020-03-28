import React, { createContext, ReactNode } from 'react';

const Context = createContext(null as any);

type Props = {
  children: ReactNode;
};

export const Provider = ({ children }: Props) => {
  const context = {};
  return <Context.Provider value={context}>{children}</Context.Provider>;
};
